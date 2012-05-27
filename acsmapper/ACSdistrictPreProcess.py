from BeautifulSoup import BeautifulSoup

FIPSmapStates = {'56': 'WY', '54': 'WV', '42': 'PA', '50': 'VT', '60': 'AS', '49': 'UT', '66': 'GU', '53': 'WA', '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME', '46': 'SD', '47': 'TN', '44': 'RI', '45': 'SC', '28': 'MS', '29': 'MO', '40': 'OK', '41': 'OR', '1': 'AL', '2': 'AK', '5': 'AR', '4': 'AZ', '6': 'CA', '9': 'CT', '8': 'CO', '51': 'VA', '39': 'OH', '38': 'ND', '72': 'PR', '78': 'VI', '11': 'DC', '10': 'DE', '13': 'GA', '12': 'FL', '15': 'HI', '48': 'TX', '17': 'IL', '16': 'ID', '19': 'IA', '18': 'IN', '31': 'NE', '30': 'MT', '37': 'NC', '36': 'NY', '35': 'NM', '34': 'NJ', '33': 'NH', '55': 'WI', '32': 'NV'}

def ACSdistrictSVGPreProcess():

    svg = open('US_Congressional_districts.svg', 'r').read()
    soup = BeautifulSoup(svg, selfClosingTags=['defs','sodipodi:namedview'])
    paths = soup.findAll('path')
    colors = ["#FEEDDE", "#FDD0A2", "#FDAE6B", "#FD8D3C", "#E6550D", "#A63603"]
    
    path_style = 'font-size:12px;fill-rule:nonzero;stroke:#FFFFFF;\
    stroke-opacity:1;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none;\
    stroke-linecap:butt;marker-start:none;stroke-linejoin:bevel;fill:'
    
    for p in paths:
        if p['id'] not in ["State_Lines", "State_Border", "separator"]:
            color = "{{district_colors['%s']}}" % p['id']
            p['style'] = path_style + color
    
    print soup.prettify()

#    return soup()[0]
    
    filename = 'ACSDistrictTemplate.html'
    f = open(filename, 'w')
    f.write(soup.prettify())
    f.close()


ACSdistrictSVGPreProcess()