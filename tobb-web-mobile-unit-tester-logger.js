 	/****************************************************************************************
	*@Company:              Tobb Technologies (Pty) Ltd                  					*
	*@Year:                 2017-11-10                                           			*
	*@Deveopers:            Bernard Sibanda               				                    *
	*@Source code license:  GNU GENERAL PUBLIC LICENSE(Version 3, 29 June 2007)     		*
	*@website:              http://www.tobb.co.za                           				*
	*@emails:               besi@tobb.co.za               				                    *
	****************************************************************************************/

var countPass = 0;

var countFail = 0;

var code = "";

var runTnull = true;

var runTequal = true;

function tnull(variable, variableLabel)
{
	if(runTnull === true)
	{
		var d = new Date();
		
		var displayElement = document.getElementById("displayTextArea");
				
		if(variable === '' || variable === null || variable == null || variable == undefined)
		{
			
			countFail++;
			
			code += '\n'+d.toDateString() +" : " +	"'" + variableLabel + " = FAIL" 
			
			code += '\n'+d.toDateString() +" : " +	"'" + variableLabel + " = " + variable;
			
			
		}		
		else
		{
			countPass++;
				
			code += '\n'+d.toDateString() +" : " + variableLabel + " = PASS&#10004" 
			
			code += '\n'+d.toDateString() +" : " + variableLabel + " = " + variable;
		}
		
		displayElement.innerHTML = "\nTotal Passed : " + countPass;
		
		displayElement.innerHTML += "\nTotal FAIL : " + countFail;
		
		displayElement.innerHTML += "\n-------------------------------";
		
		displayElement.innerHTML += code;
	}
}

function tequal(variable, expectedVariableValue, label)
{
	
	if(runTequal === true)
	{
		var d = new Date();
		
		var displayElement = document.getElementById("displayTextArea");
				
		if(variable === '' || variable === null || variable == null || variable == undefined)
		{
			
			
			code += '\n'+d.toDateString() +" : " + label + " = " +	expectedVariableValue + " = FAIL" ;
			
			code += '\n'+d.toDateString() +" : " +	label + " = " +  expectedVariableValue + "  UNDEFINED OR EMPTY";
			
			
		}		
		else if(variable === expectedVariableValue)
		{
			countPass++;
				
			code += '\n'+d.toDateString() +" : " + label + " = " +  expectedVariableValue + " = PASS&#10004" 

		}
		else
		{
			countFail++;
			
			code += '\n'+d.toDateString() +" : " + label + " = " + expectedVariableValue + " = FAIL" 
			
			code += '\n'+d.toDateString() +" : " + label + " = " + expectedVariableValue + " = " + variable;
		}
		
		displayElement.innerHTML = "\nTotal Passed : " + countPass;
		
		displayElement.innerHTML += "\nTotal FAIL : " + countFail;
		
		displayElement.innerHTML += "\n-------------------------------";
		
		displayElement.innerHTML += code;

	}
}