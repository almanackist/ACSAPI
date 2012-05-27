def ACSmapSVG(APIKEY, table):
    colors = ["#FEEDDE", "#FDD0A2", "#FDAE6B", "#FD8D3C", "#E6550D", "#A63603"]
    
    patt = re.compile('B\d+_')
    totals = patt.findall(table)[0]+'001E'
    
    data = ACSquery(apikey=APIKEY, tables=','.join([table,totals]), loctype='county', locs='*')
    
    results = {}
    for i in data.results:
        results[str(i[3])+str(i[4])] = float(i[0])/float(i[1])
    result_total = sum(results.values())
    
    county_colors = {}
    for county in results:
        rate = results[county]
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
        county_colors[county] = color
            
    return county_colors


