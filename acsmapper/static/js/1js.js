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
options[0]=new Option("Total:", "?acs_table=B05001_001E");
options[1]=new Option("U.S. citizen, born in the United States", "?acs_table=B05001_002E");
options[2]=new Option("U.S. citizen, born in Puerto Rico or U.S. Island Areas", "?acs_table=B05001_003E");
options[3]=new Option("U.S. citizen, born abroad of American parent(s)", "?acs_table=B05001_004E");
options[4]=new Option("U.S. citizen by naturalization", "?acs_table=B05001_005E");
options[5]=new Option("Not a U.S. citizen", "?acs_table=B05001_006E");
options[0].selected=true


}
}
function MySubjectDMA7(aMenu){
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

}
}

}


/* ####################### end of doublemenu code ####################### */

