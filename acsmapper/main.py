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
import webapp2
import jinja2
import json
import re
from google.appengine.api import urlfetch
import pickle

APIKEY = 'XXXX'

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),
                               autoescape = False)

FIPSmapStates = {'56': 'WY', '54': 'WV', '42': 'PA', '50': 'VT', '60': 'AS', '49': 'UT', '66': 'GU', '53': 'WA', '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME', '46': 'SD', '47': 'TN', '44': 'RI', '45': 'SC', '28': 'MS', '29': 'MO', '40': 'OK', '41': 'OR', '1': 'AL', '2': 'AK', '5': 'AR', '4': 'AZ', '6': 'CA', '9': 'CT', '8': 'CO', '51': 'VA', '39': 'OH', '38': 'ND', '72': 'PR', '78': 'VI', '11': 'DC', '10': 'DE', '13': 'GA', '12': 'FL', '15': 'HI', '48': 'TX', '17': 'IL', '16': 'ID', '19': 'IA', '18': 'IN', '31': 'NE', '30': 'MT', '37': 'NC', '36': 'NY', '35': 'NM', '34': 'NJ', '33': 'NH', '55': 'WI', '32': 'NV'}
ACSvars = pickle.load(open('ACSvars.pkl', 'r'))
ACStables = list(set(([i[1] for i in ACSvars])))
ACStables.sort()

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
        rawdata = urlfetch.fetch('http://thedataweb.rm.census.gov/data/2010/acs5' + params)
        self.tables = kwargs.get('tables')
        self.header = json.loads(rawdata.content)[0]
        self.results = json.loads(rawdata.content)[1:]
        self.dict = {self.tables: {'total':{}}}
        for r in self.results:
            self.dict[self.tables]['total'][str(r[1])] = int(r[0])

    def result(self, geo_name):
        return [i[self.tables] for i in self.dict if i['NAME'] == geo_name][0]


def ACSmapSVG(APIKEY, table):
    colors = ["#FEEDDE", "#FDD0A2", "#FDAE6B", "#FD8D3C", "#E6550D", "#A63603"]
    
    patt = re.compile('B\d+_')
    totals = patt.findall(table)[0]+'001E'
    
    counties = ACSquery(apikey=APIKEY, tables=','.join([table,totals]), loctype='county', locs='*')
    districts = ACSquery(apikey=APIKEY, tables=','.join([table,totals]), loctype='congressional+district', locs='*')
    
    county_results = {}
    for i in counties.results:
        county_results[str(i[3])+str(i[4])] = float(i[0])/float(i[1])
    county_result_total = sum(county_results.values())
    
    district_results = {}
    for i in districts.results:
        if i[4] == "00":
            district_results['_'.join([FIPSmapStates[str(int((i[3])))], 'AtLarge'])] = float(i[0])/float(i[1])            
        else:
            district_results['_'.join([FIPSmapStates[str(int((i[3])))], str(int(i[4]))])] = float(i[0])/float(i[1])
    district_result_total = sum(district_results.values())
    
    county_colors = {}
    district_colors = {}
    for county in county_results:
        rate = county_results[county]
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
        county_colors[int(county)] = color
    for district in district_results:
        rate = district_results[district]
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
        district_colors[district] = color        
         
    return county_colors, district_colors


def ACSmapJSON(APIKEY, table):
    colors = ["#FEEDDE", "#FDD0A2", "#FDAE6B", "#FD8D3C", "#E6550D", "#A63603"]
    
    patt = re.compile('B\d+_')
    totals = patt.findall(table)[0]+'001E'
    
    counties = ACSquery(apikey=APIKEY, tables=','.join([table,totals]), loctype='county', locs='*')
    districts = ACSquery(apikey=APIKEY, tables=','.join([table,totals]), loctype='congressional+district', locs='*')
    
    county_results = {}
    for i in counties.results:
        county_results[str(i[3])+str(i[4])] = float(i[0])/float(i[1])
    county_result_total = sum(county_results.values())
    county_result_max = max(county_results.values())
    county_result_scale = [round(100*county_result_max * i, 2)  for i in (0, .1, .3, .5, .7, .9, 1)]
    
#    district_results = {}
#    for i in districts.results:
#        if i[4] == "00":
#            district_results['_'.join([FIPSmapStates[str(int((i[3])))], 'AtLarge'])] = float(i[0])/float(i[1])            
#        else:
#            district_results['_'.join([FIPSmapStates[str(int((i[3])))], str(int(i[4]))])] = float(i[0])/float(i[1])
#    district_result_total = sum(district_results.values())
#    district_result_max = max(district_results.values())
    
    county_colors = {}
#    district_colors = {}
    for county in county_results:
        rate = county_results[county]
        if rate/county_result_max > .9:
            color_class = 5
        elif rate/county_result_max > .7:
            color_class = 4
        elif rate/county_result_max > .5:
            color_class = 3
        elif rate/county_result_max > .3:
            color_class = 2
        elif rate/county_result_max > .1:
            color_class = 1
        else:
            color_class = 0     
        #color = colors[color_class]
        county_colors[county] = color_class #try passing a number instead of a string
#    for district in district_results:
#        rate = district_results[district]
#        if rate > .9:
#            color_class = 5
#        elif rate > .7:
#            color_class = 4
#        elif rate > .5:
#            color_class = 3
#        elif rate > .3:
#            color_class = 2
#        elif rate > .1:
#            color_class = 1
#        else:
#            color_class = 0     
#        #color = colors[color_class]
#        district_colors[district] = color_class        
#         
#    return county_colors, district_colors
    return county_colors, county_result_scale

    
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
            county_colors, district_colors = ACSmapSVG(APIKEY, self.acs_table)
            self.render('ACSmap.html', district_colors=district_colors, ACSvars=ACSvars, county_colors=county_colors, acs_table=self.acs_table)
            

class ACSD3MapHandler(Handler):
    def get(self):
        self.acs_table = self.request.get('acs_table')
        
        params = {}
        
        if self.acs_table:
            #county_colors, district_colors = ACSmapJSON(APIKEY, self.acs_table)
            county_colors, county_result_scale = ACSmapJSON(APIKEY, self.acs_table)
            #self.render('ACSD3map.html', ACStables=ACStables, ACSselected=self.ACSselected, county_colors=json.dumps(county_colors), acs_table=self.acs_table)
#            params['acs_id'] = self.acs_id
            self.table_info = [i for i in ACSvars if i[0] == self.acs_table]
            params['ACStables'] = ACStables
            params['county_colors'] = json.dumps(county_colors)
            params['acs_table'] = self.acs_table
            params['table_info'] = self.table_info
            params['county_result_scale'] = county_result_scale

        self.render('ACSD3map.html', **params)

#    def post(self):
#        self.acs_id = self.request.get('acs_id')
#        self.acs_table = self.request.get('acs_table')
#        self.table_info = [i for i in ACSvars if i[0] == self.acs_table]
#        self.ACSselected = [i for i in ACSvars if i[1][:6] == self.acs_id[:6]]
#        
#        params = {}
#        
#        if self.acs_id:
#            #self.render('ACSD3map.html', acs_id=self.acs_id, ACStables='', ACSselected=self.ACSselected)
#            params['acs_id'] = self.acs_id
#            params['ACStables'] = ACStables
#            params['ACSselected'] = self.ACSselected
#            
#        if self.acs_table:
#            #county_colors, district_colors = ACSmapJSON(APIKEY, self.acs_table)
#            county_colors, county_result_scale = ACSmapJSON(APIKEY, self.acs_table)
#            #self.render('ACSD3map.html', ACStables=ACStables, ACSselected=self.ACSselected, county_colors=json.dumps(county_colors), acs_table=self.acs_table)
#            params['acs_id'] = self.acs_id
#            params['ACSselected'] = self.ACSselected
#            params['ACStables'] = ACStables
#            params['county_colors'] = json.dumps(county_colors)
#            params['acs_table'] = self.acs_table
#            params['table_info'] = self.table_info
#            params['county_result_scale'] = county_result_scale
#
#        self.render('ACSD3map.html', **params)

app = webapp2.WSGIApplication([('/', ACSMapHandler),
                               ('/D3', ACSD3MapHandler)],
                              debug=True)
