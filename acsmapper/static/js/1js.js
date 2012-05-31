function nullOptionsDMA(aMenu){
	var tot=aMenu.options.length
	for (i=0;i<tot;i++){
		aMenu.options[i]=null
	}
	aMenu.options.length=0;
	}


function MySubjectDMA0(aMenu){
	nullOptionsDMA(aMenu)

	with (aMenu){

	//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B01001_001E");
options[1]=new Option("Male:", "?acs_table=B01001_002E");
options[2]=new Option("Male:!!Under 5 years", "?acs_table=B01001_003E");
options[3]=new Option("Male:!!5 to 9 years", "?acs_table=B01001_004E");
options[4]=new Option("Male:!!10 to 14 years", "?acs_table=B01001_005E");
options[5]=new Option("Male:!!15 to 17 years", "?acs_table=B01001_006E");
options[6]=new Option("Male:!!18 and 19 years", "?acs_table=B01001_007E");
options[7]=new Option("Male:!!20 years", "?acs_table=B01001_008E");
options[8]=new Option("Male:!!21 years", "?acs_table=B01001_009E");
options[9]=new Option("Male:!!22 to 24 years", "?acs_table=B01001_010E");
options[10]=new Option("Male:!!25 to 29 years", "?acs_table=B01001_011E");
options[11]=new Option("Male:!!30 to 34 years", "?acs_table=B01001_012E");
options[12]=new Option("Male:!!35 to 39 years", "?acs_table=B01001_013E");
options[13]=new Option("Male:!!40 to 44 years", "?acs_table=B01001_014E");
options[14]=new Option("Male:!!45 to 49 years", "?acs_table=B01001_015E");
options[15]=new Option("Male:!!50 to 54 years", "?acs_table=B01001_016E");
options[16]=new Option("Male:!!55 to 59 years", "?acs_table=B01001_017E");
options[17]=new Option("Male:!!60 and 61 years", "?acs_table=B01001_018E");
options[18]=new Option("Male:!!62 to 64 years", "?acs_table=B01001_019E");
options[19]=new Option("Male:!!65 and 66 years", "?acs_table=B01001_020E");
options[20]=new Option("Male:!!67 to 69 years", "?acs_table=B01001_021E");
options[21]=new Option("Male:!!70 to 74 years", "?acs_table=B01001_022E");
options[22]=new Option("Male:!!75 to 79 years", "?acs_table=B01001_023E");
options[23]=new Option("Male:!!80 to 84 years", "?acs_table=B01001_024E");
options[24]=new Option("Male:!!85 years and over", "?acs_table=B01001_025E");
options[25]=new Option("Female:", "?acs_table=B01001_026E");
options[26]=new Option("Female:!!Under 5 years", "?acs_table=B01001_027E");
options[27]=new Option("Female:!!5 to 9 years", "?acs_table=B01001_028E");
options[28]=new Option("Female:!!10 to 14 years", "?acs_table=B01001_029E");
options[29]=new Option("Female:!!15 to 17 years", "?acs_table=B01001_030E");
options[30]=new Option("Female:!!18 and 19 years", "?acs_table=B01001_031E");
options[31]=new Option("Female:!!20 years", "?acs_table=B01001_032E");
options[32]=new Option("Female:!!21 years", "?acs_table=B01001_033E");
options[33]=new Option("Female:!!22 to 24 years", "?acs_table=B01001_034E");
options[34]=new Option("Female:!!25 to 29 years", "?acs_table=B01001_035E");
options[35]=new Option("Female:!!30 to 34 years", "?acs_table=B01001_036E");
options[36]=new Option("Female:!!35 to 39 years", "?acs_table=B01001_037E");
options[37]=new Option("Female:!!40 to 44 years", "?acs_table=B01001_038E");
options[38]=new Option("Female:!!45 to 49 years", "?acs_table=B01001_039E");
options[39]=new Option("Female:!!50 to 54 years", "?acs_table=B01001_040E");
options[40]=new Option("Female:!!55 to 59 years", "?acs_table=B01001_041E");
options[41]=new Option("Female:!!60 and 61 years", "?acs_table=B01001_042E");
options[42]=new Option("Female:!!62 to 64 years", "?acs_table=B01001_043E");
options[43]=new Option("Female:!!65 and 66 years", "?acs_table=B01001_044E");
options[44]=new Option("Female:!!67 to 69 years", "?acs_table=B01001_045E");
options[45]=new Option("Female:!!70 to 74 years", "?acs_table=B01001_046E");
options[46]=new Option("Female:!!75 to 79 years", "?acs_table=B01001_047E");
options[47]=new Option("Female:!!80 to 84 years", "?acs_table=B01001_048E");
options[48]=new Option("Female:!!85 years and over", "?acs_table=B01001_049E");
	options[0].selected=true

	}
	}

function MySubjectDMA1(aMenu){
	nullOptionsDMA(aMenu)

	with (aMenu){

	//Rewrites the text and values
options[0]=new Option("Median age --!!Total:", "?acs_table=B01002_001E");
options[1]=new Option("Median age --!!Male", "?acs_table=B01002_002E");
options[2]=new Option("Median age --!!Female", "?acs_table=B01002_003E");
	options[0].selected=true

	}
	}

function MySubjectDMA2(aMenu){
	nullOptionsDMA(aMenu)

	with (aMenu){

	//Rewrites the text and values
options[0]=new Option("Total", "?acs_table=B01003_001E");
	options[0].selected=true


	}
	}


function MySubjectDMA3(aMenu){
	nullOptionsDMA(aMenu)

	with (aMenu){

	//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B02001_001E");
options[1]=new Option("White alone", "?acs_table=B02001_002E");
options[2]=new Option("Black or African American alone", "?acs_table=B02001_003E");
options[3]=new Option("American Indian and Alaska Native alone", "?acs_table=B02001_004E");
options[4]=new Option("Asian alone", "?acs_table=B02001_005E");
options[5]=new Option("Native Hawaiian and Other Pacific Islander alone", "?acs_table=B02001_006E");
options[6]=new Option("Some other race alone", "?acs_table=B02001_007E");
options[7]=new Option("Two or more races:", "?acs_table=B02001_008E");
options[8]=new Option("Two or more races:!!Two races including Some other race", "?acs_table=B02001_009E");
options[9]=new Option("Two or more races:!!Two races excluding Some other race, and three or more races", "?acs_table=B02001_010E");
	options[0].selected=true
	

	}
	}

function MySubjectDMA4(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B02006_001E");
options[1]=new Option("Asian Indian", "?acs_table=B02006_002E");
options[2]=new Option("Bangladeshi", "?acs_table=B02006_003E");
options[3]=new Option("Cambodian", "?acs_table=B02006_004E");
options[4]=new Option("Chinese , except Taiwanese", "?acs_table=B02006_005E");
options[5]=new Option("Filipino", "?acs_table=B02006_006E");
options[6]=new Option("Hmong", "?acs_table=B02006_007E");
options[7]=new Option("Indonesian", "?acs_table=B02006_008E");
options[8]=new Option("Japanese", "?acs_table=B02006_009E");
options[9]=new Option("Korean", "?acs_table=B02006_010E");
options[10]=new Option("Laotian", "?acs_table=B02006_011E");
options[11]=new Option("Malaysian", "?acs_table=B02006_012E");
options[12]=new Option("Pakistani", "?acs_table=B02006_013E");
options[13]=new Option("Sri Lankan", "?acs_table=B02006_014E");
options[14]=new Option("Taiwanese", "?acs_table=B02006_015E");
options[15]=new Option("Thai", "?acs_table=B02006_016E");
options[16]=new Option("Vietnamese", "?acs_table=B02006_017E");
options[17]=new Option("Other Asian", "?acs_table=B02006_018E");
options[18]=new Option("Other Asian, not specified", "?acs_table=B02006_019E");
options[0].selected=true


}
}


function MySubjectDMA5(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B03001_001E");
options[1]=new Option("Not Hispanic or Latino", "?acs_table=B03001_002E");
options[2]=new Option("Hispanic or Latino:", "?acs_table=B03001_003E");
options[3]=new Option("Hispanic or Latino:!!Mexican", "?acs_table=B03001_004E");
options[4]=new Option("Hispanic or Latino:!!Puerto Rican", "?acs_table=B03001_005E");
options[5]=new Option("Hispanic or Latino:!!Cuban", "?acs_table=B03001_006E");
options[6]=new Option("Hispanic or Latino:!!Dominican (Dominican Republic)", "?acs_table=B03001_007E");
options[7]=new Option("Hispanic or Latino:!!Central American:", "?acs_table=B03001_008E");
options[8]=new Option("Hispanic or Latino:!!Central American:!!Costa Rican", "?acs_table=B03001_009E");
options[9]=new Option("Hispanic or Latino:!!Central American:!!Guatemalan", "?acs_table=B03001_010E");
options[10]=new Option("Hispanic or Latino:!!Central American:!!Honduran", "?acs_table=B03001_011E");
options[11]=new Option("Hispanic or Latino:!!Central American:!!Nicaraguan", "?acs_table=B03001_012E");
options[12]=new Option("Hispanic or Latino:!!Central American:!!Panamanian", "?acs_table=B03001_013E");
options[13]=new Option("Hispanic or Latino:!!Central American:!!Salvadoran", "?acs_table=B03001_014E");
options[14]=new Option("Hispanic or Latino:!!Central American:!!Other Central American", "?acs_table=B03001_015E");
options[15]=new Option("Hispanic or Latino:!!South American:", "?acs_table=B03001_016E");
options[16]=new Option("Hispanic or Latino:!!South American:!!Argentinean", "?acs_table=B03001_017E");
options[17]=new Option("Hispanic or Latino:!!South American:!!Bolivian", "?acs_table=B03001_018E");
options[18]=new Option("Hispanic or Latino:!!South American:!!Chilean", "?acs_table=B03001_019E");
options[19]=new Option("Hispanic or Latino:!!South American:!!Colombian", "?acs_table=B03001_020E");
options[20]=new Option("Hispanic or Latino:!!South American:!!Ecuadorian", "?acs_table=B03001_021E");
options[21]=new Option("Hispanic or Latino:!!South American:!!Paraguayan", "?acs_table=B03001_022E");
options[22]=new Option("Hispanic or Latino:!!South American:!!Peruvian", "?acs_table=B03001_023E");
options[23]=new Option("Hispanic or Latino:!!South American:!!Uruguayan", "?acs_table=B03001_024E");
options[24]=new Option("Hispanic or Latino:!!South American:!!Venezuelan", "?acs_table=B03001_025E");
options[25]=new Option("Hispanic or Latino:!!South American:!!Other South American", "?acs_table=B03001_026E");
options[26]=new Option("Hispanic or Latino:!!Other Hispanic or Latino:", "?acs_table=B03001_027E");
options[27]=new Option("Hispanic or Latino:!!Other Hispanic or Latino:!!Spaniard", "?acs_table=B03001_028E");
options[28]=new Option("Hispanic or Latino:!!Other Hispanic or Latino:!!Spanish", "?acs_table=B03001_029E");
options[29]=new Option("Hispanic or Latino:!!Other Hispanic or Latino:!!Spanish American", "?acs_table=B03001_030E");
options[30]=new Option("Hispanic or Latino:!!Other Hispanic or Latino:!!All other Hispanic or Latino", "?acs_table=B03001_031E");
options[0].selected=true


}
}
function MySubjectDMA6(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B03002_001E");
options[1]=new Option("Not Hispanic or Latino:", "?acs_table=B03002_002E");
options[2]=new Option("Not Hispanic or Latino:!!White alone", "?acs_table=B03002_003E");
options[3]=new Option("Not Hispanic or Latino:!!Black or African American alone", "?acs_table=B03002_004E");
options[4]=new Option("Not Hispanic or Latino:!!American Indian and Alaska Native alone", "?acs_table=B03002_005E");
options[5]=new Option("Not Hispanic or Latino:!!Asian alone", "?acs_table=B03002_006E");
options[6]=new Option("Not Hispanic or Latino:!!Native Hawaiian and Other Pacific Islander alone", "?acs_table=B03002_007E");
options[7]=new Option("Not Hispanic or Latino:!!Some other race alone", "?acs_table=B03002_008E");
options[8]=new Option("Not Hispanic or Latino:!!Two or more races:", "?acs_table=B03002_009E");
options[9]=new Option("Not Hispanic or Latino:!!Two or more races:!!Two races including Some other race", "?acs_table=B03002_010E");
options[10]=new Option("Not Hispanic or Latino:!!Two or more races:!!Two races excluding Some other race, and three or more races", "?acs_table=B03002_011E");
options[11]=new Option("Hispanic or Latino:", "?acs_table=B03002_012E");
options[12]=new Option("Hispanic or Latino:!!White alone", "?acs_table=B03002_013E");
options[13]=new Option("Hispanic or Latino:!!Black or African American alone", "?acs_table=B03002_014E");
options[14]=new Option("Hispanic or Latino:!!American Indian and Alaska Native alone", "?acs_table=B03002_015E");
options[15]=new Option("Hispanic or Latino:!!Asian alone", "?acs_table=B03002_016E");
options[16]=new Option("Hispanic or Latino:!!Native Hawaiian and Other Pacific Islander alone", "?acs_table=B03002_017E");
options[17]=new Option("Hispanic or Latino:!!Some other race alone", "?acs_table=B03002_018E");
options[18]=new Option("Hispanic or Latino:!!Two or more races:", "?acs_table=B03002_019E");
options[19]=new Option("Hispanic or Latino:!!Two or more races:!!Two races including Some other race", "?acs_table=B03002_020E");
options[20]=new Option("Hispanic or Latino:!!Two or more races:!!Two races excluding Some other race, and three or more races", "?acs_table=B03002_021E");
options[0].selected=true


}
}

function MySubjectDMA7(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B05001_001E");
options[1]=new Option("U.S. citizen, born in the United States", "?acs_table=B05001_002E");
options[2]=new Option("U.S. citizen, born in Puerto Rico or U.S. Island Areas", "?acs_table=B05001_003E");
options[3]=new Option("U.S. citizen, born abroad of American parent(s)", "?acs_table=B05001_004E");
options[4]=new Option("U.S. citizen by naturalization", "?acs_table=B05001_005E");
options[5]=new Option("Not a U.S. citizen", "?acs_table=B05001_006E");
options[0].selected=true


}
}
function MySubjectDMA8(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B05002_001E");
options[1]=new Option("Native:", "?acs_table=B05002_002E");
options[2]=new Option("Native:!!Born in state of residence", "?acs_table=B05002_003E");
options[3]=new Option("Native:!!Born in other state in the United States:", "?acs_table=B05002_004E");
options[4]=new Option("Native:!!Born in other state in the United States:!!Northeast", "?acs_table=B05002_005E");
options[5]=new Option("Native:!!Born in other state in the United States:!!Midwest", "?acs_table=B05002_006E");
options[6]=new Option("Native:!!Born in other state in the United States:!!South", "?acs_table=B05002_007E");
options[7]=new Option("Native:!!Born in other state in the United States:!!West", "?acs_table=B05002_008E");
options[8]=new Option("Native:!!Born outside the United States:", "?acs_table=B05002_009E");
options[9]=new Option("Native:!!Born outside the United States:!!Puerto Rico", "?acs_table=B05002_010E");
options[10]=new Option("Native:!!Born outside the United States:!!U.S. Island Areas", "?acs_table=B05002_011E");
options[11]=new Option("Native:!!Born outside the United States:!!Born abroad of American parent(s)", "?acs_table=B05002_012E");
options[12]=new Option("Foreign born:", "?acs_table=B05002_013E");
options[13]=new Option("Foreign born:!!Naturalized U.S. citizen", "?acs_table=B05002_014E");
options[14]=new Option("Foreign born:!!Not a U.S. citizen", "?acs_table=B05002_015E");
options[0].selected=true


}
}

function MySubjectDMA9(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B08006_001E");
options[1]=new Option("Car, truck, or van:", "?acs_table=B08006_002E");
options[2]=new Option("Drove alone", "?acs_table=B08006_003E");
options[3]=new Option("Carpooled:", "?acs_table=B08006_004E");
options[4]=new Option("In 2-person carpool", "?acs_table=B08006_005E");
options[5]=new Option("In 3-person carpool", "?acs_table=B08006_006E");
options[6]=new Option("In 4-or-more-person carpool", "?acs_table=B08006_007E");
options[7]=new Option("Public transportation (excluding taxicab):", "?acs_table=B08006_008E");
options[8]=new Option("Bus or trolley bus", "?acs_table=B08006_009E");
options[9]=new Option("Streetcar or trolley car (carro publico in Puerto Rico)", "?acs_table=B08006_010E");
options[10]=new Option("Subway or elevated", "?acs_table=B08006_011E");
options[11]=new Option("Railroad", "?acs_table=B08006_012E");
options[12]=new Option("Ferryboat", "?acs_table=B08006_013E");
options[13]=new Option("Bicycle", "?acs_table=B08006_014E");
options[14]=new Option("Walked", "?acs_table=B08006_015E");
options[15]=new Option("Taxicab, motorcycle, or other means", "?acs_table=B08006_016E");
options[16]=new Option("Worked at home", "?acs_table=B08006_017E");
options[17]=new Option("Male:", "?acs_table=B08006_018E");
options[18]=new Option("Male:!!Car, truck, or van:", "?acs_table=B08006_019E");
options[19]=new Option("Male:!!Car, truck, or van:!!Drove alone", "?acs_table=B08006_020E");
options[20]=new Option("Male:!!Car, truck, or van:!!Carpooled:", "?acs_table=B08006_021E");
options[21]=new Option("Male:!!Car, truck, or van:!!Carpooled:!!In 2-person carpool", "?acs_table=B08006_022E");
options[22]=new Option("Male:!!Car, truck, or van:!!Carpooled:!!In 3-person carpool", "?acs_table=B08006_023E");
options[23]=new Option("Male:!!Car, truck, or van:!!Carpooled:!!In 4-or-more-person carpool", "?acs_table=B08006_024E");
options[24]=new Option("Male:!!Public transportation (excluding taxicab):", "?acs_table=B08006_025E");
options[25]=new Option("Male:!!Public transportation (excluding taxicab):!!Bus or trolley bus", "?acs_table=B08006_026E");
options[26]=new Option("Male:!!Public transportation (excluding taxicab):!!Streetcar or trolley car (carro publico in Puerto Rico)", "?acs_table=B08006_027E");
options[27]=new Option("Male:!!Public transportation (excluding taxicab):!!Subway or elevated", "?acs_table=B08006_028E");
options[28]=new Option("Male:!!Public transportation (excluding taxicab):!!Railroad", "?acs_table=B08006_029E");
options[29]=new Option("Male:!!Public transportation (excluding taxicab):!!Ferryboat", "?acs_table=B08006_030E");
options[30]=new Option("Male:!!Bicycle", "?acs_table=B08006_031E");
options[31]=new Option("Male:!!Walked", "?acs_table=B08006_032E");
options[32]=new Option("Male:!!Taxicab, motorcycle, or other means", "?acs_table=B08006_033E");
options[33]=new Option("Male:!!Worked at home", "?acs_table=B08006_034E");
options[34]=new Option("Female:", "?acs_table=B08006_035E");
options[35]=new Option("Female:!!Car, truck, or van:", "?acs_table=B08006_036E");
options[36]=new Option("Female:!!Car, truck, or van:!!Drove alone", "?acs_table=B08006_037E");
options[37]=new Option("Female:!!Car, truck, or van:!!Carpooled:", "?acs_table=B08006_038E");
options[38]=new Option("Female:!!Car, truck, or van:!!Carpooled:!!In 2-person carpool", "?acs_table=B08006_039E");
options[39]=new Option("Female:!!Car, truck, or van:!!Carpooled:!!In 3-person carpool", "?acs_table=B08006_040E");
options[40]=new Option("Female:!!Car, truck, or van:!!Carpooled:!!In 4-or-more-person carpool", "?acs_table=B08006_041E");
options[41]=new Option("Female:!!Public transportation (excluding taxicab):", "?acs_table=B08006_042E");
options[42]=new Option("Female:!!Public transportation (excluding taxicab):!!Bus or trolley bus", "?acs_table=B08006_043E");
options[43]=new Option("Female:!!Public transportation (excluding taxicab):!!Streetcar or trolley car (carro publico in Puerto Rico)", "?acs_table=B08006_044E");
options[44]=new Option("Female:!!Public transportation (excluding taxicab):!!Subway or elevated", "?acs_table=B08006_045E");
options[45]=new Option("Female:!!Public transportation (excluding taxicab):!!Railroad", "?acs_table=B08006_046E");
options[46]=new Option("Female:!!Public transportation (excluding taxicab):!!Ferryboat", "?acs_table=B08006_047E");
options[47]=new Option("Female:!!Bicycle", "?acs_table=B08006_048E");
options[48]=new Option("Female:!!Walked", "?acs_table=B08006_049E");
options[49]=new Option("Female:!!Taxicab, motorcycle, or other means", "?acs_table=B08006_050E");
options[50]=new Option("Female:!!Worked at home", "?acs_table=B08006_051E");
options[0].selected=true


}
}

function MySubjectDMA10(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B15002_001E");
options[1]=new Option("Male:", "?acs_table=B15002_002E");
options[2]=new Option("Male:!!No schooling completed", "?acs_table=B15002_003E");
options[3]=new Option("Male:!!Nursery to 4th grade", "?acs_table=B15002_004E");
options[4]=new Option("Male:!!5th and 6th grade", "?acs_table=B15002_005E");
options[5]=new Option("Male:!!7th and 8th grade", "?acs_table=B15002_006E");
options[6]=new Option("Male:!!9th grade", "?acs_table=B15002_007E");
options[7]=new Option("Male:!!10th grade", "?acs_table=B15002_008E");
options[8]=new Option("Male:!!11th grade", "?acs_table=B15002_009E");
options[9]=new Option("Male:!!12th grade, no diploma", "?acs_table=B15002_010E");
options[10]=new Option("Male:!!High school graduate, GED, or alternative", "?acs_table=B15002_011E");
options[11]=new Option("Male:!!Some college, less than 1 year", "?acs_table=B15002_012E");
options[12]=new Option("Male:!!Some college, 1 or more years, no degree", "?acs_table=B15002_013E");
options[13]=new Option("Male:!!Associate's degree", "?acs_table=B15002_014E");
options[14]=new Option("Male:!!Bachelor's degree", "?acs_table=B15002_015E");
options[15]=new Option("Male:!!Master's degree", "?acs_table=B15002_016E");
options[16]=new Option("Male:!!Professional school degree", "?acs_table=B15002_017E");
options[17]=new Option("Male:!!Doctorate degree", "?acs_table=B15002_018E");
options[18]=new Option("Female:", "?acs_table=B15002_019E");
options[19]=new Option("Female:!!No schooling completed", "?acs_table=B15002_020E");
options[20]=new Option("Female:!!Nursery to 4th grade", "?acs_table=B15002_021E");
options[21]=new Option("Female:!!5th and 6th grade", "?acs_table=B15002_022E");
options[22]=new Option("Female:!!7th and 8th grade", "?acs_table=B15002_023E");
options[23]=new Option("Female:!!9th grade", "?acs_table=B15002_024E");
options[24]=new Option("Female:!!10th grade", "?acs_table=B15002_025E");
options[25]=new Option("Female:!!11th grade", "?acs_table=B15002_026E");
options[26]=new Option("Female:!!12th grade, no diploma", "?acs_table=B15002_027E");
options[27]=new Option("Female:!!High school graduate, GED, or alternative", "?acs_table=B15002_028E");
options[28]=new Option("Female:!!Some college, less than 1 year", "?acs_table=B15002_029E");
options[29]=new Option("Female:!!Some college, 1 or more years, no degree", "?acs_table=B15002_030E");
options[30]=new Option("Female:!!Associate's degree", "?acs_table=B15002_031E");
options[31]=new Option("Female:!!Bachelor's degree", "?acs_table=B15002_032E");
options[32]=new Option("Female:!!Master's degree", "?acs_table=B15002_033E");
options[33]=new Option("Female:!!Professional school degree", "?acs_table=B15002_034E");
options[34]=new Option("Female:!!Doctorate degree", "?acs_table=B15002_035E");
options[0].selected=true


}
}

function MySubjectDMA11(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B17001_001E");
options[1]=new Option("Income in the past 12 months below poverty level:", "?acs_table=B17001_002E");
options[2]=new Option("Income in the past 12 months below poverty level:!!Male:", "?acs_table=B17001_003E");
options[3]=new Option("Income in the past 12 months below poverty level:!!Male:!!Under 5 years", "?acs_table=B17001_004E");
options[4]=new Option("Income in the past 12 months below poverty level:!!Male:!!5 years", "?acs_table=B17001_005E");
options[5]=new Option("Income in the past 12 months below poverty level:!!Male:!!6 to 11 years", "?acs_table=B17001_006E");
options[6]=new Option("Income in the past 12 months below poverty level:!!Male:!!12 to 14 years", "?acs_table=B17001_007E");
options[7]=new Option("Income in the past 12 months below poverty level:!!Male:!!15 years", "?acs_table=B17001_008E");
options[8]=new Option("Income in the past 12 months below poverty level:!!Male:!!16 and 17 years", "?acs_table=B17001_009E");
options[9]=new Option("Income in the past 12 months below poverty level:!!Male:!!18 to 24 years", "?acs_table=B17001_010E");
options[10]=new Option("Income in the past 12 months below poverty level:!!Male:!!25 to 34 years", "?acs_table=B17001_011E");
options[11]=new Option("Income in the past 12 months below poverty level:!!Male:!!35 to 44 years", "?acs_table=B17001_012E");
options[12]=new Option("Income in the past 12 months below poverty level:!!Male:!!45 to 54 years", "?acs_table=B17001_013E");
options[13]=new Option("Income in the past 12 months below poverty level:!!Male:!!55 to 64 years", "?acs_table=B17001_014E");
options[14]=new Option("Income in the past 12 months below poverty level:!!Male:!!65 to 74 years", "?acs_table=B17001_015E");
options[15]=new Option("Income in the past 12 months below poverty level:!!Male:!!75 years and over", "?acs_table=B17001_016E");
options[16]=new Option("Income in the past 12 months below poverty level:!!Female:", "?acs_table=B17001_017E");
options[17]=new Option("Income in the past 12 months below poverty level:!!Female:!!Under 5 years", "?acs_table=B17001_018E");
options[18]=new Option("Income in the past 12 months below poverty level:!!Female:!!5 years", "?acs_table=B17001_019E");
options[19]=new Option("Income in the past 12 months below poverty level:!!Female:!!6 to 11 years", "?acs_table=B17001_020E");
options[20]=new Option("Income in the past 12 months below poverty level:!!Female:!!12 to 14 years", "?acs_table=B17001_021E");
options[21]=new Option("Income in the past 12 months below poverty level:!!Female:!!15 years", "?acs_table=B17001_022E");
options[22]=new Option("Income in the past 12 months below poverty level:!!Female:!!16 and 17 years", "?acs_table=B17001_023E");
options[23]=new Option("Income in the past 12 months below poverty level:!!Female:!!18 to 24 years", "?acs_table=B17001_024E");
options[24]=new Option("Income in the past 12 months below poverty level:!!Female:!!25 to 34 years", "?acs_table=B17001_025E");
options[25]=new Option("Income in the past 12 months below poverty level:!!Female:!!35 to 44 years", "?acs_table=B17001_026E");
options[26]=new Option("Income in the past 12 months below poverty level:!!Female:!!45 to 54 years", "?acs_table=B17001_027E");
options[27]=new Option("Income in the past 12 months below poverty level:!!Female:!!55 to 64 years", "?acs_table=B17001_028E");
options[28]=new Option("Income in the past 12 months below poverty level:!!Female:!!65 to 74 years", "?acs_table=B17001_029E");
options[29]=new Option("Income in the past 12 months below poverty level:!!Female:!!75 years and over", "?acs_table=B17001_030E");
options[30]=new Option("Income in the past 12 months at or above poverty level:", "?acs_table=B17001_031E");
options[31]=new Option("Income in the past 12 months at or above poverty level:!!Male:", "?acs_table=B17001_032E");
options[32]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!Under 5 years", "?acs_table=B17001_033E");
options[33]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!5 years", "?acs_table=B17001_034E");
options[34]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!6 to 11 years", "?acs_table=B17001_035E");
options[35]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!12 to 14 years", "?acs_table=B17001_036E");
options[36]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!15 years", "?acs_table=B17001_037E");
options[37]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!16 and 17 years", "?acs_table=B17001_038E");
options[38]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!18 to 24 years", "?acs_table=B17001_039E");
options[39]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!25 to 34 years", "?acs_table=B17001_040E");
options[40]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!35 to 44 years", "?acs_table=B17001_041E");
options[41]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!45 to 54 years", "?acs_table=B17001_042E");
options[42]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!55 to 64 years", "?acs_table=B17001_043E");
options[43]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!65 to 74 years", "?acs_table=B17001_044E");
options[44]=new Option("Income in the past 12 months at or above poverty level:!!Male:!!75 years and over", "?acs_table=B17001_045E");
options[45]=new Option("Income in the past 12 months at or above poverty level:!!Female:", "?acs_table=B17001_046E");
options[46]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!Under 5 years", "?acs_table=B17001_047E");
options[47]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!5 years", "?acs_table=B17001_048E");
options[48]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!6 to 11 years", "?acs_table=B17001_049E");
options[49]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!12 to 14 years", "?acs_table=B17001_050E");
options[50]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!15 years", "?acs_table=B17001_051E");
options[51]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!16 and 17 years", "?acs_table=B17001_052E");
options[52]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!18 to 24 years", "?acs_table=B17001_053E");
options[53]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!25 to 34 years", "?acs_table=B17001_054E");
options[54]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!35 to 44 years", "?acs_table=B17001_055E");
options[55]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!45 to 54 years", "?acs_table=B17001_056E");
options[56]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!55 to 64 years", "?acs_table=B17001_057E");
options[57]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!65 to 74 years", "?acs_table=B17001_058E");
options[58]=new Option("Income in the past 12 months at or above poverty level:!!Female:!!75 years and over", "?acs_table=B17001_059E");
options[0].selected=true


}
}

function MySubjectDMA12(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B17010_001E");
options[1]=new Option("Income in the past 12 months below poverty level:", "?acs_table=B17010_002E");
options[2]=new Option("Income in the past 12 months below poverty level:!!Married-couple family:", "?acs_table=B17010_003E");
options[3]=new Option("Income in the past 12 months below poverty level:!!Married-couple family:!!With related children under 18 years:", "?acs_table=B17010_004E");
options[4]=new Option("Income in the past 12 months below poverty level:!!Married-couple family:!!With related children under 18 years:!!Under 5 years only", "?acs_table=B17010_005E");
options[5]=new Option("Income in the past 12 months below poverty level:!!Married-couple family:!!With related children under 18 years:!!Under 5 years and 5 to 17 years", "?acs_table=B17010_006E");
options[6]=new Option("Income in the past 12 months below poverty level:!!Married-couple family:!!With related children under 18 years:!!5 to 17 years only", "?acs_table=B17010_007E");
options[7]=new Option("Income in the past 12 months below poverty level:!!Married-couple family:!!No related children under 18 years", "?acs_table=B17010_008E");
options[8]=new Option("Income in the past 12 months below poverty level:!!Other family:", "?acs_table=B17010_009E");
options[9]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Male householder, no wife present:", "?acs_table=B17010_010E");
options[10]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Male householder, no wife present:!!With related children under 18 years:", "?acs_table=B17010_011E");
options[11]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Male householder, no wife present:!!With related children under 18 years:!!Under 5 years only", "?acs_table=B17010_012E");
options[12]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Male householder, no wife present:!!With related children under 18 years:!!Under 5 years and 5 to 17 years", "?acs_table=B17010_013E");
options[13]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Male householder, no wife present:!!With related children under 18 years:!!5 to 17 years only", "?acs_table=B17010_014E");
options[14]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Male householder, no wife present:!!No related children under 18 years", "?acs_table=B17010_015E");
options[15]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Female householder, no husband present:", "?acs_table=B17010_016E");
options[16]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Female householder, no husband present:!!With related children under 18 years:", "?acs_table=B17010_017E");
options[17]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Female householder, no husband present:!!With related children under 18 years:!!Under 5 years only", "?acs_table=B17010_018E");
options[18]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Female householder, no husband present:!!With related children under 18 years:!!Under 5 years and 5 to 17 years", "?acs_table=B17010_019E");
options[19]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Female householder, no husband present:!!With related children under 18 years:!!5 to 17 years only", "?acs_table=B17010_020E");
options[20]=new Option("Income in the past 12 months below poverty level:!!Other family:!!Female householder, no husband present:!!No related children under 18 years", "?acs_table=B17010_021E");
options[21]=new Option("Income in the past 12 months at or above poverty level:", "?acs_table=B17010_022E");
options[22]=new Option("Income in the past 12 months at or above poverty level:!!Married-couple family:", "?acs_table=B17010_023E");
options[23]=new Option("Income in the past 12 months at or above poverty level:!!Married-couple family:!!With related children under 18 years:", "?acs_table=B17010_024E");
options[24]=new Option("Income in the past 12 months at or above poverty level:!!Married-couple family:!!With related children under 18 years:!!Under 5 years only", "?acs_table=B17010_025E");
options[25]=new Option("Income in the past 12 months at or above poverty level:!!Married-couple family:!!With related children under 18 years:!!Under 5 years and 5 to 17 years", "?acs_table=B17010_026E");
options[26]=new Option("Income in the past 12 months at or above poverty level:!!Married-couple family:!!With related children under 18 years:!!5 to 17 years only", "?acs_table=B17010_027E");
options[27]=new Option("Income in the past 12 months at or above poverty level:!!Married-couple family:!!No related children under 18 years", "?acs_table=B17010_028E");
options[28]=new Option("Income in the past 12 months at or above poverty level:!!Other family:", "?acs_table=B17010_029E");
options[29]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Male householder, no wife present:", "?acs_table=B17010_030E");
options[30]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Male householder, no wife present:!!With related children under 18 years:", "?acs_table=B17010_031E");
options[31]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Male householder, no wife present:!!With related children under 18 years:!!Under 5 years only", "?acs_table=B17010_032E");
options[32]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Male householder, no wife present:!!With related children under 18 years:!!Under 5 years and 5 to 17 years", "?acs_table=B17010_033E");
options[33]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Male householder, no wife present:!!With related children under 18 years:!!5 to 17 years only", "?acs_table=B17010_034E");
options[34]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Male householder, no wife present:!!No related children under 18 years", "?acs_table=B17010_035E");
options[35]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Female householder, no husband present:", "?acs_table=B17010_036E");
options[36]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Female householder, no husband present:!!With related children under 18 years:", "?acs_table=B17010_037E");
options[37]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Female householder, no husband present:!!With related children under 18 years:!!Under 5 years only", "?acs_table=B17010_038E");
options[38]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Female householder, no husband present:!!With related children under 18 years:!!Under 5 years and 5 to 17 years", "?acs_table=B17010_039E");
options[39]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Female householder, no husband present:!!With related children under 18 years:!!5 to 17 years only", "?acs_table=B17010_040E");
options[40]=new Option("Income in the past 12 months at or above poverty level:!!Other family:!!Female householder, no husband present:!!No related children under 18 years", "?acs_table=B17010_041E");
options[0].selected=true


}
}

function MySubjectDMA13(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B19001_001E");
options[1]=new Option("Less than $10,000", "?acs_table=B19001_002E");
options[2]=new Option("$10,000 to $14,999", "?acs_table=B19001_003E");
options[3]=new Option("$15,000 to $19,999", "?acs_table=B19001_004E");
options[4]=new Option("$20,000 to $24,999", "?acs_table=B19001_005E");
options[5]=new Option("$25,000 to $29,999", "?acs_table=B19001_006E");
options[6]=new Option("$30,000 to $34,999", "?acs_table=B19001_007E");
options[7]=new Option("$35,000 to $39,999", "?acs_table=B19001_008E");
options[8]=new Option("$40,000 to $44,999", "?acs_table=B19001_009E");
options[9]=new Option("$45,000 to $49,999", "?acs_table=B19001_010E");
options[10]=new Option("$50,000 to $59,999", "?acs_table=B19001_011E");
options[11]=new Option("$60,000 to $74,999", "?acs_table=B19001_012E");
options[12]=new Option("$75,000 to $99,999", "?acs_table=B19001_013E");
options[13]=new Option("$100,000 to $124,999", "?acs_table=B19001_014E");
options[14]=new Option("$125,000 to $149,999", "?acs_table=B19001_015E");
options[15]=new Option("$150,000 to $199,999", "?acs_table=B19001_016E");
options[16]=new Option("$200,000 or more", "?acs_table=B19001_017E");
options[0].selected=true


}
}

function MySubjectDMA14(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Median household income in the past 12 months (in 2009 inflation-adjusted dollars)", "?acs_table=B19013_001E");
options[1]=new Option("Margin Of Error For!!Median household income in the past 12 months (in 2009 inflation-adjusted dollars)", "?acs_table=B19013_001M");
options[2]=new Option("Median household income in the past 12 months (in 2010 inflation-adjusted dollars)", "?acs_table=B19013_001E");
options[0].selected=true


}
}

function MySubjectDMA15(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B19101_001E");
options[1]=new Option("Less than $10,000", "?acs_table=B19101_002E");
options[2]=new Option("$10,000 to $14,999", "?acs_table=B19101_003E");
options[3]=new Option("$15,000 to $19,999", "?acs_table=B19101_004E");
options[4]=new Option("$20,000 to $24,999", "?acs_table=B19101_005E");
options[5]=new Option("$25,000 to $29,999", "?acs_table=B19101_006E");
options[6]=new Option("$30,000 to $34,999", "?acs_table=B19101_007E");
options[7]=new Option("$35,000 to $39,999", "?acs_table=B19101_008E");
options[8]=new Option("$40,000 to $44,999", "?acs_table=B19101_009E");
options[9]=new Option("$45,000 to $49,999", "?acs_table=B19101_010E");
options[10]=new Option("$50,000 to $59,999", "?acs_table=B19101_011E");
options[11]=new Option("$60,000 to $74,999", "?acs_table=B19101_012E");
options[12]=new Option("$75,000 to $99,999", "?acs_table=B19101_013E");
options[13]=new Option("$100,000 to $124,999", "?acs_table=B19101_014E");
options[14]=new Option("$125,000 to $149,999", "?acs_table=B19101_015E");
options[15]=new Option("$150,000 to $199,999", "?acs_table=B19101_016E");
options[16]=new Option("$200,000 or more", "?acs_table=B19101_017E");
options[0].selected=true


}
}

function MySubjectDMA16(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "");
options[1]=new Option("Per capita income in the past 12 months (in 2009 inflation-adjusted dollars)", "?acs_table=B19301_001E");
options[2]=new Option("Per capita income in the past 12 months (in 2010 inflation-adjusted dollars)", "?acs_table=B19301_001E");
options[0].selected=true


}
}

function MySubjectDMA17(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B20004_001E");
options[1]=new Option("!!Less than high school graduate", "?acs_table=B20004_002E");
options[2]=new Option("!!High school graduate (includes equivalency)", "?acs_table=B20004_003E");
options[3]=new Option("!!Some college or associate's degree", "?acs_table=B20004_004E");
options[4]=new Option("!!Bachelor's degree", "?acs_table=B20004_005E");
options[5]=new Option("!!Graduate or professional degree", "?acs_table=B20004_006E");
options[6]=new Option("Male:", "?acs_table=B20004_007E");
options[7]=new Option("Male:!!Less than high school graduate", "?acs_table=B20004_008E");
options[8]=new Option("Male:!!High school graduate (includes equivalency)", "?acs_table=B20004_009E");
options[9]=new Option("Male:!!Some college or associate's degree", "?acs_table=B20004_010E");
options[10]=new Option("Male:!!Bachelor's degree", "?acs_table=B20004_011E");
options[11]=new Option("Male:!!Graduate or professional degree", "?acs_table=B20004_012E");
options[12]=new Option("Female:", "?acs_table=B20004_013E");
options[13]=new Option("Female:!!Less than high school graduate", "?acs_table=B20004_014E");
options[14]=new Option("Female:!!High school graduate (includes equivalency)", "?acs_table=B20004_015E");
options[15]=new Option("Female:!!Some college or associate's degree", "?acs_table=B20004_016E");
options[16]=new Option("Female:!!Bachelor's degree", "?acs_table=B20004_017E");
options[17]=new Option("Female:!!Graduate or professional degree", "?acs_table=B20004_018E");
options[0].selected=true


}
}

function MySubjectDMA18(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B23001_001E");
options[1]=new Option("Male:", "?acs_table=B23001_002E");
options[2]=new Option("Male:!!16 to 19 years:", "?acs_table=B23001_003E");
options[3]=new Option("Male:!!16 to 19 years:!!In labor force:", "?acs_table=B23001_004E");
options[4]=new Option("Male:!!16 to 19 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_005E");
options[5]=new Option("Male:!!16 to 19 years:!!In labor force:!!Civilian:", "?acs_table=B23001_006E");
options[6]=new Option("Male:!!16 to 19 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_007E");
options[7]=new Option("Male:!!16 to 19 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_008E");
options[8]=new Option("Male:!!16 to 19 years:!!Not in labor force", "?acs_table=B23001_009E");
options[9]=new Option("Male:!!20 and 21 years:", "?acs_table=B23001_010E");
options[10]=new Option("Male:!!20 and 21 years:!!In labor force:", "?acs_table=B23001_011E");
options[11]=new Option("Male:!!20 and 21 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_012E");
options[12]=new Option("Male:!!20 and 21 years:!!In labor force:!!Civilian:", "?acs_table=B23001_013E");
options[13]=new Option("Male:!!20 and 21 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_014E");
options[14]=new Option("Male:!!20 and 21 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_015E");
options[15]=new Option("Male:!!20 and 21 years:!!Not in labor force", "?acs_table=B23001_016E");
options[16]=new Option("Male:!!22 to 24 years:", "?acs_table=B23001_017E");
options[17]=new Option("Male:!!22 to 24 years:!!In labor force:", "?acs_table=B23001_018E");
options[18]=new Option("Male:!!22 to 24 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_019E");
options[19]=new Option("Male:!!22 to 24 years:!!In labor force:!!Civilian:", "?acs_table=B23001_020E");
options[20]=new Option("Male:!!22 to 24 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_021E");
options[21]=new Option("Male:!!22 to 24 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_022E");
options[22]=new Option("Male:!!22 to 24 years:!!Not in labor force", "?acs_table=B23001_023E");
options[23]=new Option("Male:!!25 to 29 years:", "?acs_table=B23001_024E");
options[24]=new Option("Male:!!25 to 29 years:!!In labor force:", "?acs_table=B23001_025E");
options[25]=new Option("Male:!!25 to 29 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_026E");
options[26]=new Option("Male:!!25 to 29 years:!!In labor force:!!Civilian:", "?acs_table=B23001_027E");
options[27]=new Option("Male:!!25 to 29 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_028E");
options[28]=new Option("Male:!!25 to 29 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_029E");
options[29]=new Option("Male:!!25 to 29 years:!!Not in labor force", "?acs_table=B23001_030E");
options[30]=new Option("Male:!!30 to 34 years:", "?acs_table=B23001_031E");
options[31]=new Option("Male:!!30 to 34 years:!!In labor force:", "?acs_table=B23001_032E");
options[32]=new Option("Male:!!30 to 34 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_033E");
options[33]=new Option("Male:!!30 to 34 years:!!In labor force:!!Civilian:", "?acs_table=B23001_034E");
options[34]=new Option("Male:!!30 to 34 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_035E");
options[35]=new Option("Male:!!30 to 34 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_036E");
options[36]=new Option("Male:!!30 to 34 years:!!Not in labor force", "?acs_table=B23001_037E");
options[37]=new Option("Male:!!35 to 44 years:", "?acs_table=B23001_038E");
options[38]=new Option("Male:!!35 to 44 years:!!In labor force:", "?acs_table=B23001_039E");
options[39]=new Option("Male:!!35 to 44 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_040E");
options[40]=new Option("Male:!!35 to 44 years:!!In labor force:!!Civilian:", "?acs_table=B23001_041E");
options[41]=new Option("Male:!!35 to 44 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_042E");
options[42]=new Option("Male:!!35 to 44 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_043E");
options[43]=new Option("Male:!!35 to 44 years:!!Not in labor force", "?acs_table=B23001_044E");
options[44]=new Option("Male:!!45 to 54 years:", "?acs_table=B23001_045E");
options[45]=new Option("Male:!!45 to 54 years:!!In labor force:", "?acs_table=B23001_046E");
options[46]=new Option("Male:!!45 to 54 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_047E");
options[47]=new Option("Male:!!45 to 54 years:!!In labor force:!!Civilian:", "?acs_table=B23001_048E");
options[48]=new Option("Male:!!45 to 54 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_049E");
options[49]=new Option("Male:!!45 to 54 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_050E");
options[50]=new Option("Male:!!45 to 54 years:!!Not in labor force", "?acs_table=B23001_051E");
options[51]=new Option("Male:!!55 to 59 years:", "?acs_table=B23001_052E");
options[52]=new Option("Male:!!55 to 59 years:!!In labor force:", "?acs_table=B23001_053E");
options[53]=new Option("Male:!!55 to 59 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_054E");
options[54]=new Option("Male:!!55 to 59 years:!!In labor force:!!Civilian:", "?acs_table=B23001_055E");
options[55]=new Option("Male:!!55 to 59 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_056E");
options[56]=new Option("Male:!!55 to 59 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_057E");
options[57]=new Option("Male:!!55 to 59 years:!!Not in labor force", "?acs_table=B23001_058E");
options[58]=new Option("Male:!!60 and 61 years:", "?acs_table=B23001_059E");
options[59]=new Option("Male:!!60 and 61 years:!!In labor force:", "?acs_table=B23001_060E");
options[60]=new Option("Male:!!60 and 61 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_061E");
options[61]=new Option("Male:!!60 and 61 years:!!In labor force:!!Civilian:", "?acs_table=B23001_062E");
options[62]=new Option("Male:!!60 and 61 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_063E");
options[63]=new Option("Male:!!60 and 61 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_064E");
options[64]=new Option("Male:!!60 and 61 years:!!Not in labor force", "?acs_table=B23001_065E");
options[65]=new Option("Male:!!62 to 64 years:", "?acs_table=B23001_066E");
options[66]=new Option("Male:!!62 to 64 years:!!In labor force:", "?acs_table=B23001_067E");
options[67]=new Option("Male:!!62 to 64 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_068E");
options[68]=new Option("Male:!!62 to 64 years:!!In labor force:!!Civilian:", "?acs_table=B23001_069E");
options[69]=new Option("Male:!!62 to 64 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_070E");
options[70]=new Option("Male:!!62 to 64 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_071E");
options[71]=new Option("Male:!!62 to 64 years:!!Not in labor force", "?acs_table=B23001_072E");
options[72]=new Option("Male:!!65 to 69 years:", "?acs_table=B23001_073E");
options[73]=new Option("Male:!!65 to 69 years:!!In labor force:", "?acs_table=B23001_074E");
options[74]=new Option("Male:!!65 to 69 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_075E");
options[75]=new Option("Male:!!65 to 69 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_076E");
options[76]=new Option("Male:!!65 to 69 years:!!Not in labor force", "?acs_table=B23001_077E");
options[77]=new Option("Male:!!70 to 74 years:", "?acs_table=B23001_078E");
options[78]=new Option("Male:!!70 to 74 years:!!In labor force:", "?acs_table=B23001_079E");
options[79]=new Option("Male:!!70 to 74 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_080E");
options[80]=new Option("Male:!!70 to 74 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_081E");
options[81]=new Option("Male:!!70 to 74 years:!!Not in labor force", "?acs_table=B23001_082E");
options[82]=new Option("Male:!!75 years and over:", "?acs_table=B23001_083E");
options[83]=new Option("Male:!!75 years and over:!!In labor force:", "?acs_table=B23001_084E");
options[84]=new Option("Male:!!75 years and over:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_085E");
options[85]=new Option("Male:!!75 years and over:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_086E");
options[86]=new Option("Male:!!75 years and over:!!Not in labor force", "?acs_table=B23001_087E");
options[87]=new Option("Female:", "?acs_table=B23001_088E");
options[88]=new Option("Female:!!16 to 19 years:", "?acs_table=B23001_089E");
options[89]=new Option("Female:!!16 to 19 years:!!In labor force:", "?acs_table=B23001_090E");
options[90]=new Option("Female:!!16 to 19 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_091E");
options[91]=new Option("Female:!!16 to 19 years:!!In labor force:!!Civilian:", "?acs_table=B23001_092E");
options[92]=new Option("Female:!!16 to 19 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_093E");
options[93]=new Option("Female:!!16 to 19 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_094E");
options[94]=new Option("Female:!!16 to 19 years:!!Not in labor force", "?acs_table=B23001_095E");
options[95]=new Option("Female:!!20 and 21 years:", "?acs_table=B23001_096E");
options[96]=new Option("Female:!!20 and 21 years:!!In labor force:", "?acs_table=B23001_097E");
options[97]=new Option("Female:!!20 and 21 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_098E");
options[98]=new Option("Female:!!20 and 21 years:!!In labor force:!!Civilian:", "?acs_table=B23001_099E");
options[99]=new Option("Female:!!20 and 21 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_100E");
options[100]=new Option("Female:!!20 and 21 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_101E");
options[101]=new Option("Female:!!20 and 21 years:!!Not in labor force", "?acs_table=B23001_102E");
options[102]=new Option("Female:!!22 to 24 years:", "?acs_table=B23001_103E");
options[103]=new Option("Female:!!22 to 24 years:!!In labor force:", "?acs_table=B23001_104E");
options[104]=new Option("Female:!!22 to 24 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_105E");
options[105]=new Option("Female:!!22 to 24 years:!!In labor force:!!Civilian:", "?acs_table=B23001_106E");
options[106]=new Option("Female:!!22 to 24 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_107E");
options[107]=new Option("Female:!!22 to 24 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_108E");
options[108]=new Option("Female:!!22 to 24 years:!!Not in labor force", "?acs_table=B23001_109E");
options[109]=new Option("Female:!!25 to 29 years:", "?acs_table=B23001_110E");
options[110]=new Option("Female:!!25 to 29 years:!!In labor force:", "?acs_table=B23001_111E");
options[111]=new Option("Female:!!25 to 29 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_112E");
options[112]=new Option("Female:!!25 to 29 years:!!In labor force:!!Civilian:", "?acs_table=B23001_113E");
options[113]=new Option("Female:!!25 to 29 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_114E");
options[114]=new Option("Female:!!25 to 29 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_115E");
options[115]=new Option("Female:!!25 to 29 years:!!Not in labor force", "?acs_table=B23001_116E");
options[116]=new Option("Female:!!30 to 34 years:", "?acs_table=B23001_117E");
options[117]=new Option("Female:!!30 to 34 years:!!In labor force:", "?acs_table=B23001_118E");
options[118]=new Option("Female:!!30 to 34 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_119E");
options[119]=new Option("Female:!!30 to 34 years:!!In labor force:!!Civilian:", "?acs_table=B23001_120E");
options[120]=new Option("Female:!!30 to 34 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_121E");
options[121]=new Option("Female:!!30 to 34 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_122E");
options[122]=new Option("Female:!!30 to 34 years:!!Not in labor force", "?acs_table=B23001_123E");
options[123]=new Option("Female:!!35 to 44 years:", "?acs_table=B23001_124E");
options[124]=new Option("Female:!!35 to 44 years:!!In labor force:", "?acs_table=B23001_125E");
options[125]=new Option("Female:!!35 to 44 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_126E");
options[126]=new Option("Female:!!35 to 44 years:!!In labor force:!!Civilian:", "?acs_table=B23001_127E");
options[127]=new Option("Female:!!35 to 44 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_128E");
options[128]=new Option("Female:!!35 to 44 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_129E");
options[129]=new Option("Female:!!35 to 44 years:!!Not in labor force", "?acs_table=B23001_130E");
options[130]=new Option("Female:!!45 to 54 years:", "?acs_table=B23001_131E");
options[131]=new Option("Female:!!45 to 54 years:!!In labor force:", "?acs_table=B23001_132E");
options[132]=new Option("Female:!!45 to 54 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_133E");
options[133]=new Option("Female:!!45 to 54 years:!!In labor force:!!Civilian:", "?acs_table=B23001_134E");
options[134]=new Option("Female:!!45 to 54 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_135E");
options[135]=new Option("Female:!!45 to 54 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_136E");
options[136]=new Option("Female:!!45 to 54 years:!!Not in labor force", "?acs_table=B23001_137E");
options[137]=new Option("Female:!!55 to 59 years:", "?acs_table=B23001_138E");
options[138]=new Option("Female:!!55 to 59 years:!!In labor force:", "?acs_table=B23001_139E");
options[139]=new Option("Female:!!55 to 59 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_140E");
options[140]=new Option("Female:!!55 to 59 years:!!In labor force:!!Civilian:", "?acs_table=B23001_141E");
options[141]=new Option("Female:!!55 to 59 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_142E");
options[142]=new Option("Female:!!55 to 59 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_143E");
options[143]=new Option("Female:!!55 to 59 years:!!Not in labor force", "?acs_table=B23001_144E");
options[144]=new Option("Female:!!60 and 61 years:", "?acs_table=B23001_145E");
options[145]=new Option("Female:!!60 and 61 years:!!In labor force:", "?acs_table=B23001_146E");
options[146]=new Option("Female:!!60 and 61 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_147E");
options[147]=new Option("Female:!!60 and 61 years:!!In labor force:!!Civilian:", "?acs_table=B23001_148E");
options[148]=new Option("Female:!!60 and 61 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_149E");
options[149]=new Option("Female:!!60 and 61 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_150E");
options[150]=new Option("Female:!!60 and 61 years:!!Not in labor force", "?acs_table=B23001_151E");
options[151]=new Option("Female:!!62 to 64 years:", "?acs_table=B23001_152E");
options[152]=new Option("Female:!!62 to 64 years:!!In labor force:", "?acs_table=B23001_153E");
options[153]=new Option("Female:!!62 to 64 years:!!In labor force:!!In Armed Forces", "?acs_table=B23001_154E");
options[154]=new Option("Female:!!62 to 64 years:!!In labor force:!!Civilian:", "?acs_table=B23001_155E");
options[155]=new Option("Female:!!62 to 64 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_156E");
options[156]=new Option("Female:!!62 to 64 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_157E");
options[157]=new Option("Female:!!62 to 64 years:!!Not in labor force", "?acs_table=B23001_158E");
options[158]=new Option("Female:!!65 to 69 years:", "?acs_table=B23001_159E");
options[159]=new Option("Female:!!65 to 69 years:!!In labor force:", "?acs_table=B23001_160E");
options[160]=new Option("Female:!!65 to 69 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_161E");
options[161]=new Option("Female:!!65 to 69 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_162E");
options[162]=new Option("Female:!!65 to 69 years:!!Not in labor force", "?acs_table=B23001_163E");
options[163]=new Option("Female:!!70 to 74 years:", "?acs_table=B23001_164E");
options[164]=new Option("Female:!!70 to 74 years:!!In labor force:", "?acs_table=B23001_165E");
options[165]=new Option("Female:!!70 to 74 years:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_166E");
options[166]=new Option("Female:!!70 to 74 years:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_167E");
options[167]=new Option("Female:!!70 to 74 years:!!Not in labor force", "?acs_table=B23001_168E");
options[168]=new Option("Female:!!75 years and over:", "?acs_table=B23001_169E");
options[169]=new Option("Female:!!75 years and over:!!In labor force:", "?acs_table=B23001_170E");
options[170]=new Option("Female:!!75 years and over:!!In labor force:!!Civilian:!!Employed", "?acs_table=B23001_171E");
options[171]=new Option("Female:!!75 years and over:!!In labor force:!!Civilian:!!Unemployed", "?acs_table=B23001_172E");
options[172]=new Option("Female:!!75 years and over:!!Not in labor force", "?acs_table=B23001_173E");
options[0].selected=true


}
}

function MySubjectDMA19(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B25002_001E");
options[1]=new Option("Occupied", "?acs_table=B25002_002E");
options[2]=new Option("Vacant", "?acs_table=B25002_003E");
options[0].selected=true


}
}

function MySubjectDMA20(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B25003_001E");
options[1]=new Option("Owner occupied", "?acs_table=B25003_002E");
options[2]=new Option("Renter occupied", "?acs_table=B25003_003E");
options[0].selected=true


}
}

function MySubjectDMA21(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B25004_001E");
options[1]=new Option("For rent", "?acs_table=B25004_002E");
options[2]=new Option("Rented, not occupied", "?acs_table=B25004_003E");
options[3]=new Option("For sale only", "?acs_table=B25004_004E");
options[4]=new Option("Sold, not occupied", "?acs_table=B25004_005E");
options[5]=new Option("For seasonal, recreational, or occasional use", "?acs_table=B25004_006E");
options[6]=new Option("For migrant workers", "?acs_table=B25004_007E");
options[7]=new Option("Other vacant", "?acs_table=B25004_008E");
options[0].selected=true


}
}

function MySubjectDMA22(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B25024_001E");
options[1]=new Option("1, detached", "?acs_table=B25024_002E");
options[2]=new Option("1, attached", "?acs_table=B25024_003E");
options[3]=new Option("2", "?acs_table=B25024_004E");
options[4]=new Option("3 or 4", "?acs_table=B25024_005E");
options[5]=new Option("5 to 9", "?acs_table=B25024_006E");
options[6]=new Option("10 to 19", "?acs_table=B25024_007E");
options[7]=new Option("20 to 49", "?acs_table=B25024_008E");
options[8]=new Option("50 or more", "?acs_table=B25024_009E");
options[9]=new Option("Mobile home", "?acs_table=B25024_010E");
options[10]=new Option("Boat, RV, van, etc.", "?acs_table=B25024_011E");
options[0].selected=true


}
}

function MySubjectDMA23(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B25034_001E");
options[1]=new Option("Built 2005 or later", "?acs_table=B25034_002E");
options[2]=new Option("Built 2000 to 2004", "?acs_table=B25034_003E");
options[3]=new Option("Built 1990 to 1999", "?acs_table=B25034_004E");
options[4]=new Option("Built 1980 to 1989", "?acs_table=B25034_005E");
options[5]=new Option("Built 1970 to 1979", "?acs_table=B25034_006E");
options[6]=new Option("Built 1960 to 1969", "?acs_table=B25034_007E");
options[7]=new Option("Built 1950 to 1959", "?acs_table=B25034_008E");
options[8]=new Option("Built 1940 to 1949", "?acs_table=B25034_009E");
options[9]=new Option("Built 1939 or earlier", "?acs_table=B25034_010E");
options[0].selected=true


}
}

function MySubjectDMA24(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B25070_001E");
options[1]=new Option("Less than 10.0 percent", "?acs_table=B25070_002E");
options[2]=new Option("10.0 to 14.9 percent", "?acs_table=B25070_003E");
options[3]=new Option("15.0 to 19.9 percent", "?acs_table=B25070_004E");
options[4]=new Option("20.0 to 24.9 percent", "?acs_table=B25070_005E");
options[5]=new Option("25.0 to 29.9 percent", "?acs_table=B25070_006E");
options[6]=new Option("30.0 to 34.9 percent", "?acs_table=B25070_007E");
options[7]=new Option("35.0 to 39.9 percent", "?acs_table=B25070_008E");
options[8]=new Option("40.0 to 49.9 percent", "?acs_table=B25070_009E");
options[9]=new Option("50.0 percent or more", "?acs_table=B25070_010E");
options[10]=new Option("Not computed", "?acs_table=B25070_011E");
options[0].selected=true


}
}

function MySubjectDMA25(aMenu){
nullOptionsDMA(aMenu)

with (aMenu){

//Rewrites the text and values
options[0]=new Option("Total:", "?acs_table=B25087_001E");
options[1]=new Option("Housing units with a mortgage:", "?acs_table=B25087_002E");
options[2]=new Option("Housing units with a mortgage:!!Less than $200", "?acs_table=B25087_003E");
options[3]=new Option("Housing units with a mortgage:!!$200 to $299", "?acs_table=B25087_004E");
options[4]=new Option("Housing units with a mortgage:!!$300 to $399", "?acs_table=B25087_005E");
options[5]=new Option("Housing units with a mortgage:!!$400 to $499", "?acs_table=B25087_006E");
options[6]=new Option("Housing units with a mortgage:!!$500 to $599", "?acs_table=B25087_007E");
options[7]=new Option("Housing units with a mortgage:!!$600 to $699", "?acs_table=B25087_008E");
options[8]=new Option("Housing units with a mortgage:!!$700 to $799", "?acs_table=B25087_009E");
options[9]=new Option("Housing units with a mortgage:!!$800 to $899", "?acs_table=B25087_010E");
options[10]=new Option("Housing units with a mortgage:!!$900 to $999", "?acs_table=B25087_011E");
options[11]=new Option("Housing units with a mortgage:!!$1,000 to $1,249", "?acs_table=B25087_012E");
options[12]=new Option("Housing units with a mortgage:!!$1,250 to $1,499", "?acs_table=B25087_013E");
options[13]=new Option("Housing units with a mortgage:!!$1,500 to $1,999", "?acs_table=B25087_014E");
options[14]=new Option("Housing units with a mortgage:!!$2,000 to $2,499", "?acs_table=B25087_015E");
options[15]=new Option("Housing units with a mortgage:!!$2,500 to $2,999", "?acs_table=B25087_016E");
options[16]=new Option("Housing units with a mortgage:!!$3,000 or more", "?acs_table=B25087_017E");
options[17]=new Option("Housing units without a mortgage:", "?acs_table=B25087_018E");
options[18]=new Option("Housing units without a mortgage:!!Less than $100", "?acs_table=B25087_019E");
options[19]=new Option("Housing units without a mortgage:!!$100 to $149", "?acs_table=B25087_020E");
options[20]=new Option("Housing units without a mortgage:!!$150 to $199", "?acs_table=B25087_021E");
options[21]=new Option("Housing units without a mortgage:!!$200 to $249", "?acs_table=B25087_022E");
options[22]=new Option("Housing units without a mortgage:!!$250 to $299", "?acs_table=B25087_023E");
options[23]=new Option("Housing units without a mortgage:!!$300 to $349", "?acs_table=B25087_024E");
options[24]=new Option("Housing units without a mortgage:!!$350 to $399", "?acs_table=B25087_025E");
options[25]=new Option("Housing units without a mortgage:!!$400 to $499", "?acs_table=B25087_026E");
options[26]=new Option("Housing units without a mortgage:!!$500 to $599", "?acs_table=B25087_027E");
options[27]=new Option("Housing units without a mortgage:!!$600 to $699", "?acs_table=B25087_028E");
options[28]=new Option("Housing units without a mortgage:!!$700 or more", "?acs_table=B25087_029E");
options[0].selected=true


}
}


/* ####################### goDM() ####################### */

function goDMA(aMenu){
if (aMenu.options.value!="none")
{
location=aMenu.options[aMenu.selectedIndex].value
} 

}

/* ####################### setUp ####################### */

function setUpDMA(){
with (document.formDoubleMenuDMA) {
if (menuSubjectsDMA.selectedIndex==0){
menuSubjectsDMA.options[0].selected=true
menuFilesDMA.options[0].selected=true
}

if (menuSubjectsDMA.selectedIndex==1)
MySubjectDMA0(menuFilesDMA)
if (menuSubjectsDMA.selectedIndex==2)
MySubjectDMA1(menuFilesDMA)
if (menuSubjectsDMA.selectedIndex==3)
MySubjectDMA2(menuFilesDMA)
if (menuSubjectsDMA.selectedIndex==4)
MySubjectDMA3(menuFilesDMA)
if (menuSubjectsDMA.selectedIndex==5)
MySubjectDMA4(menuFilesDMA)

}
}

/* ####################### changeFiles ####################### */

function changeFilesDMA(){
aMenu=document.formDoubleMenuDMA.menuSubjectsDMA
aMenu2=document.formDoubleMenuDMA.menuFilesDMA
with  (aMenu){

switch (selectedIndex) {
case 0:
aMenu2.options.length=0;
aMenu2.options[0]=
new Option("Pages appear here","none")
aMenu2.options[0].selected=true;
history.go(0)
break    
case 1:  
MySubjectDMA0(aMenu2)  
aMenu2.options[0].text="Sex by Age"
break       
case 2:  
MySubjectDMA1(aMenu2)  
aMenu2.options[0].text="Median Age by Sex"
break       
case 3:  
MySubjectDMA2(aMenu2)  
aMenu2.options[0].text="Total Population"
break       
case 4:  
MySubjectDMA3(aMenu2)  
aMenu2.options[0].text="Race"
break       
case 5:  
MySubjectDMA4(aMenu2)  
aMenu2.options[0].text="Asian Alone by Selected Groups"
break       
case 6:  
MySubjectDMA5(aMenu2)  
aMenu2.options[0].text="Hispanic or Latino by Specific Origin"
break       
case 7:  
MySubjectDMA6(aMenu2)  
aMenu2.options[0].text="Hispanic or Latino by Race"
break       
case 8:  
MySubjectDMA7(aMenu2)  
aMenu2.options[0].text="Citizenship Status"
break       
case 9:  
MySubjectDMA8(aMenu2)  
aMenu2.options[0].text="Place of Birth by Citizenship Status"
break       
case 10:  
MySubjectDMA9(aMenu2)  
aMenu2.options[0].text="Sex of Workers by Means of Transportation to Work"
break       
case 11:  
MySubjectDMA10(aMenu2)  
aMenu2.options[0].text="Sex by Educational Attainment"
break       
case 12:  
MySubjectDMA11(aMenu2)  
aMenu2.options[0].text="Poverty Status in Past 12 Months by Sex by Age"
break       
case 13:  
MySubjectDMA12(aMenu2)  
aMenu2.options[0].text="Poverty Status of Families by Family Type by Presence of Related Children under 18 Years of Age"
break       
case 14:  
MySubjectDMA13(aMenu2)  
aMenu2.options[0].text="Household Income"
break       
case 15:  
MySubjectDMA14(aMenu2)  
aMenu2.options[0].text="Median Household Income (2009 dollars)"
break       
case 16:  
MySubjectDMA15(aMenu2)  
aMenu2.options[0].text="Family Income"
break       
case 17:  
MySubjectDMA16(aMenu2)  
aMenu2.options[0].text="Per Capita Income"
break       
case 18:  
MySubjectDMA17(aMenu2)  
aMenu2.options[0].text="Median earnings by sex by educational attainment"
break       
case 19:  
MySubjectDMA18(aMenu2)  
aMenu2.options[0].text="Sex by age by employment status"
break       
case 20:  
MySubjectDMA19(aMenu2)  
aMenu2.options[0].text="Occupancy status"
break       
case 21:  
MySubjectDMA20(aMenu2)  
aMenu2.options[0].text="Tenure"
break       
case 22:  
MySubjectDMA21(aMenu2)  
aMenu2.options[0].text="Vacancy status"
break       
case 23:  
MySubjectDMA22(aMenu2)  
aMenu2.options[0].text="Units in structure"
break       
case 24:  
MySubjectDMA23(aMenu2)  
aMenu2.options[0].text="Year Structure Built"
break       
case 25:  
MySubjectDMA24(aMenu2)  
aMenu2.options[0].text="Gross Rent as a Percentage of Household Income"
break       
case 26:  
MySubjectDMA25(aMenu2)  
aMenu2.options[0].text="Mortgage Status and Selected Monthly Owner Costs for Owner_Occupied Housing Units"
break       

}
}

}


/* ####################### end of doublemenu code ####################### */

