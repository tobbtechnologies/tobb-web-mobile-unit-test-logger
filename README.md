# tobb-web-mobile-unit-test-logger

This is a framework for performing unit tests, logging and tracing code execution on web and mobile code.

Writing good quality code requires a Test Driven Development approach. It also requires logging and tracing code execution. Finally 
produced code must be clean code.

All the above triples the time for writing code and as a result the development and maintenance costs. 

This project tobb web mobile unit test logger is aimed at producing a framework that unit test code, logs and traces code execution and 
cleans the final code.

Example:

Look at this code below

	var x = 5; //a variable x has been assigned value 5.

Log, trace and unit test  as follows:

	tnull(x,'x'); //unit test feature cheching if variable x is null
	
	tequal(x,5, 'x'); //unit test feature checking if x is equal to 5
  
  Running the code produces
  
Total Passed : 1
Total FAIL : 0
-------------------------------
Fri Nov 10 2017 : x = 5 = PASS✔

The above only unit test code and can also trace and display execution when logging is turned on as show below

Total Passed : 2
Total FAIL : 0
-------------------------------
Fri Nov 10 2017 : x = PASS✔
Fri Nov 10 2017 : x = 5
Fri Nov 10 2017 : x = 5 = PASS✔

Installation:

git clone https://github.com/tobbtechnologies/tobb-web-mobile-unit-test-logger
