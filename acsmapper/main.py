#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os
import sys
import webapp2
import jinja2
from BeautifulSoup import BeautifulSoup
import urllib
import simplejson
import re
from google.appengine.ext import db

APIKEY = '531b63cec265a38f8de88d58d3a25eb7cb62b6a5'

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),
                               autoescape = True)


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


def ACSmapSVG(APIKEY, table):
    patt = re.compile('B\d+_')
    totals = patt.findall(table)[0]+'001E'
    
    data = ACSquery(apikey=APIKEY, tables=','.join([table,totals]), loctype='county', locs='*')
    
    
    results = {}
    for i in data.results:
        results[str(i[3])+str(i[4])] = float(i[0])/float(i[1])
    result_total = sum(results.values())
        
    svg = open('USA_Counties_with_FIPS_and_names.svg', 'r').read()
    soup = BeautifulSoup(svg, selfClosingTags=['defs','sodipodi:namedview'])
    paths = soup.findAll('path')
    colors = ["#FEEDDE", "#FDD0A2", "#FDAE6B", "#FD8D3C", "#E6550D", "#A63603"]
    
    path_style = 'font-size:12px;fill-rule:nonzero;stroke:#FFFFFF;\
    stroke-opacity:1;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none;\
    stroke-linecap:butt;marker-start:none;stroke-linejoin:bevel;fill:'
    
    for p in paths:
        if p['id'] not in ["State_Lines", "separator"]:
            try:
                rate = results[p['id']]
            except:
                continue
            if rate > .9:
                color_class = 5
            elif rate > .7:
                color_class = 4
            elif rate > .5:
                color_class = 3
            elif rate > .3:
                color_class = 2
            elif rate > .1:
                color_class = 1
            else:
                color_class = 0     
            color = colors[color_class]
            p['style'] = path_style + color
    
    return soup()[0]
    
#    filename = '/static/mapper.svg'
#    f = open(filename, 'w')
#    f.write(soup.prettify())
#    f.close()


#apikey = '531b63cec265a38f8de88d58d3a25eb7cb62b6a5'
#table = raw_input('ACS table: ')
#ACSmapSVG(apikey, table)

class SVGmap(db.Model):
    svg = db.BlobProperty(required = True)
    title = db.StringProperty(required = True)
    last_modified = db.DateTimeProperty(auto_now = True)

    
class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)

    def render_str(self, template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)
    
    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))

    def render_json(self, d):
        json_txt = json.dumps(d)
        self.response.headers['Content-Type'] = 'application/json; charset=UTF-8'
        self.write(json_txt)
    


class ACSMapHandler(Handler):
    def get(self):
        self.render('ACSmap.html')

    def post(self):
        self.acs_table = self.request.get('acs_table')
        
        if self.acs_table:
            self.acs_svg = str(ACSmapSVG(APIKEY, self.acs_table))
            #self.write(self.acs_svg)
            #self.render('ACSmap.html', acs_svg = self.acs_svg)
            map = SVGmap(svg = self.acs_svg, title = self.acs_table)
            map.put()


app = webapp2.WSGIApplication([('/', ACSMapHandler)],
                              debug=True)
