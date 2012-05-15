# Tools for working with the Census Bureau's API for ACS & Census 2010 data

# User: APIbeta-tester
# Password: Beta2012Test!



import os
import webapp2
import jinja2

from google.appengine.ext import db
from BeautifulSoup import BeautifulSoup

import re
import urllib
import simplejson
from xml.dom.minidom import parseString
import Image, ImageDraw
import math




# Globals
APIKEY = '531b63cec265a38f8de88d58d3a25eb7cb62b6a5'
STATES = {u'Mississippi': u'28', u'Oklahoma': u'40', u'Delaware': u'10', u'Minnesota': u'27', u'Illinois': u'17', u'Arkansas': u'05', u'New Mexico': u'35', u'Indiana': u'18', u'Maryland': u'24', u'Louisiana': u'22', u'Idaho': u'16', u'Wyoming': u'56', u'Tennessee': u'47', u'Arizona': u'04', u'Iowa': u'19', u'Michigan': u'26', u'Kansas': u'20', u'Utah': u'49', u'Virginia': u'51', u'Oregon': u'41', u'Connecticut': u'09', u'Montana': u'30', u'California': u'06', u'Massachusetts': u'25', u'West Virginia': u'54', u'South Carolina': u'45', u'New Hampshire': u'33', u'Wisconsin': u'55', u'Vermont': u'50', u'Georgia': u'13', u'North Dakota': u'38', u'Pennsylvania': u'42', u'Puerto Rico': u'72', u'Florida': u'12', u'Alaska': u'02', u'Kentucky': u'21', u'Hawaii': u'15', u'Nebraska': u'31', u'Missouri': u'29', u'Ohio': u'39', u'Alabama': u'01', u'New York': u'36', u'Colorado': u'08', u'South Dakota': u'46', u'NAME': u'state', u'New Jersey': u'34', u'Washington': u'53', u'North Carolina': u'37', u'District of Columbia': u'11', u'Texas': u'48', u'Nevada': u'32', u'Maine': u'23', u'Rhode Island': u'44'}

### TEMPLATE VARIABLES
template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),
                               autoescape = True)



# Build a database of table numbers and titles
def ACSvariables():
    ACSvars = []
    site = urllib.urlopen('http://www.census.gov/developers/data/2010acs5_variables.xml').read()
    dom = parseString(site)
    varpatt = re.compile(r'concept="(?P<table>[B0-9]+)\.  (?P<name>[\'\-0-9a-z A-z]+)" name="(?P<tsub>[A-Z\_0-9]+)">(?P<nsub>[\'$!\.\(\) ,:\-0-9a-zA-Z]+)<')
    for i in dom.getElementsByTagName('variable'):
        ACSvars.append(varpatt.findall(i.toxml()))
    return ACSvars


# feed in dict where {TABLE: {'total': {state: val, ...}, 'pct': {state: val, ...}}, ...}
# get and sort all tables where pct exists
# sort geo_keys in pct for one TABLE
# for each geo_key:
#     make pie slice for each table, where radius of each slice = (circle radius) / (number of tables)

def chart(ACSdict='', size=800, start=0):
    im = Image.new('RGB', (size, size), (255,255,255))
    draw = ImageDraw.Draw(im)
    pct_tables = [str(d) for d in ACSdict if ACSdict[d].get('pct')]
    pct_tables.sort()
    geo_keys = ACSdict[pct_tables[0]]['pct'].keys()
    geo_keys.sort()
    slice_width = (size/2) / len(pct_tables)
    for place in geo_keys:
        for table in pct_tables:
            slice_coord = slice_width * pct_tables.index(table)
            draw.pieslice((0+slice_coord, 0+slice_coord, size-slice_coord, size-slice_coord),
                          start,
                          start + int(math.ceil(360/len(geo_keys))),
                          outline = (255, 255, 255),
                          fill="hsl(%s, 90%%, %s%%)" % (0, 100-int(100*ACSdict[table]['pct'][place])))
        start = start + int(math.ceil(360/len(geo_keys)))
    return im

def doughnut_chart(values='', size=800, start=0, pos=(), hue=0):
    im = Image.new('RGB', (size, size), (255,255,255))
    draw = ImageDraw.Draw(im)
    for item in values:
        for p in pos:
            draw.pieslice((0+30*p, 0+30*p, size-30*p, size-30*p), 
                          start, 
                          start + int(math.ceil(360/len(values))), 
                          outline=0, 
                          fill="hsl(%s, 90%%, %s%%)" % (hue, 100-int(100*item[p])))
        start = start + int(math.ceil(360/len(values)))
    return im 
        

def make_pcts(ACSresult, base=0, matches=()):
    '''
    (deprecated)
    take results of an ACSquery for totals + multiple sub-properties and convert
    subprops to percentages of the total 
    '''
    for i in ACSresult:
        for j in matches:
            i[j] = float(i[j])/float(i[base])

def pcts_from_dict(d):
    '''
    take output of ACSquery.dict and add a new 'pct' key for all
    sub-levels of a given ACS category, computing percentages against 
    the top-level total
    {ACSTABLE: {'total': {lots of states}, 'pct': {lots of states}}, ACSTABLE: ...}
    '''
    k = d.keys()
    k.sort()
    for i in k[1:]:
        d[i]['pct'] = {}
        for state in d[k[0]]['total'].keys():
            d[i]['pct'][state] = float(d[i]['total'][state])/float(d[k[0]]['total'][state])

# Class for querying the ACS API and returning various results and analyses
class ACSquery(object):
    '''
    Query the Census Bureau's API for ACS 5-year estimates data. 
    Required params:
        apikey, tables, loctype, locs, 
    Optional params:
        intype, inlocs
    '''
    
    def __init__(self,
                 **kwargs):
        params = "?key=%(apikey)s&get=%(tables)s,NAME&for=%(loctype)s:%(locs)s" % kwargs
        if kwargs.get('intype'):
                params += "&in=%(intype)s:%(inlocs)s" % kwargs
        rawdata = urllib.urlopen('http://thedataweb.rm.census.gov/data/2010/acs5' + params).read()
        self.tables = kwargs.get('tables')
        self.header = simplejson.loads(rawdata)[0]
        self.results = simplejson.loads(rawdata)[1:]
        self.dict = {self.tables: {'total':{}}}
        for r in self.results:
            self.dict[self.tables]['total'][str(r[1])] = int(r[0])

    def result(self, geo_name):
        return [i[self.tables] for i in self.dict if i['NAME'] == geo_name][0]



### CLASSES

class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)

    def render_str(self, template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)
    
    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))


class BlogPost(db.Model):
    subject = db.StringProperty(required = True)
    content = db.TextProperty(required = True)
    created = db.DateTimeProperty(auto_now_add = True)
    

class MainPage(Handler):  
    def render_front(self, subject="", content="", error=""):
        blogposts = db.GqlQuery("SELECT * FROM BlogPost ORDER BY created DESC")
        self.render("front.html", subject=subject, content=content, error=error, blogposts=blogposts)

    def get(self):
        self.render_front()

    def post(self):
        createnew = self.request.get("createnew")
        if createnew:
            self.redirect("/newpost")


class NewPostHandler(Handler):
    def render_front(self, subject="", content="", error=""):
        self.render("newpost.html", subject=subject, content=content, error=error)
        
    def get(self):
        self.render_front()
        
    def post(self):
        subject = self.request.get("subject")
        content = self.request.get("content")
        
        if subject and content:
            a = BlogPost(subject = subject, content = content)
            a.put()
            self.redirect("/%s" % a.key().id())
        else:
            error = "we need both a title and some content"
            self.render_front(subject, content, error)

class PermalinkHandler(Handler):
    def get(self, post_id=""):
        post = BlogPost.get_by_id(int(post_id)) 
        self.render("permalink.html", post=post)
    
class SignupHandler(Handler):
    def get(self):
        #self.response.headers['Content-Type'] = 'text/plain'
        self.render("signup.html", username='',
                   username_error='', 
                   password='', 
                   password_error='',
                   verify='', 
                   verify_error='',
                   email='',
                   email_error='')

    def post(self):
        user_username = self.request.get('username')
        user_pword = self.request.get('password')
        user_pword2 = self.request.get('verify')
        user_email = self.request.get('email')

        username = validate_input(user_username, 'username')
        password = validate_input(user_pword, 'password')
        verify = user_pword2 == user_pword
        email = validate_input(user_email, 'email')
        
        if username and password and verify and email:
            self.redirect("/welcome?username=" + user_username)
        else:
            username_error, password_error, verify_error, email_error = '','','',''     
            if not username:
                username_error = 'Invalid username'
            if not password:
                password_error = 'Invalid password'
            if not verify:
                verify_error = 'Passwords don\'t match'
            if not email and user_email != '':
                email_error = 'Invalid email'
            self.render("signup.html", username=user_username,
                   username_error=username_error, 
                   password='', 
                   password_error=password_error,
                   verify='', 
                   verify_error=verify_error,
                   email=user_email,
                   email_error=email_error)
        
       
class ValidatedHandler(Handler):
    def get(self):  
        username = self.request.get('username')        
        self.response.out.write("Welcome, %(username)s!" % {"username":username})  
