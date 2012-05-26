from BeautifulSoup import BeautifulSoup

def ACScountySVGPreProcess():

    svg = open('USA_Counties_with_FIPS_and_names.svg', 'r').read()
    soup = BeautifulSoup(svg, selfClosingTags=['defs','sodipodi:namedview'])
    paths = soup.findAll('path')
    colors = ["#FEEDDE", "#FDD0A2", "#FDAE6B", "#FD8D3C", "#E6550D", "#A63603"]
    
    path_style = 'font-size:12px;fill-rule:nonzero;stroke:#FFFFFF;\
    stroke-opacity:1;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none;\
    stroke-linecap:butt;marker-start:none;stroke-linejoin:bevel;fill:'
    
    for p in paths:
        if p['id'] not in ["State_Lines", "separator"]:
            color = '{{county_%s_color}}' % p['id']
            p['style'] = path_style + color
    
    print soup.prettify()

#    return soup()[0]
    
    filename = 'ACSCountyTemplate.html'
    f = open(filename, 'w')
    f.write(soup.prettify())
    f.close()


ACScountySVGPreProcess()