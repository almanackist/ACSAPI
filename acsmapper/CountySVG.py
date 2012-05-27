from BeautifulSoup import BeautifulSoup
import urllib
import simplejson
import re

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
        
    svg = open('/Users/alanj/Documents/workspace/ACSAPI/acsmapper/USA_Counties_with_FIPS_and_names.svg', 'r').read()
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
    
    filename = data.tables + '.svg'
    f = open(filename, 'w')
    f.write(soup.prettify())
    f.close()


apikey = '531b63cec265a38f8de88d58d3a25eb7cb62b6a5'
table = raw_input('ACS table: ')
ACSmapSVG(apikey, table)
