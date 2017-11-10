<?php
 	/****************************************************************************************
	*@Company:              Tobb Technologies (Pty) Ltd                  					*
	*@Year:                 2017-11-10                                           			*
	*@Deveopers:            Bernard Sibanda               				                    *
	*@Source code license:  GNU GENERAL PUBLIC LICENSE(Version 3, 29 June 2007)     		*
	*@website:              http://www.tobb.co.za                           				*
	*@emails:               besi@tobb.co.za               				                    *
	****************************************************************************************/

	//The purpose of this file is to remove logger and unit tester from a file
	//clean code
	
	$mixedFile = 'test.js';
	
	$cleanFile = 'clean-test.js';
		
	$fh = fopen($mixedFile,'r');
	
	$fw = fopen($cleanFile,'w');
	
	while ($line = fgets($fh)) 
	{
		
	  if((preg_match('/\btnull\b/i',$line))||(preg_match('/\btequal\b/i',$line)))
	  {
		//
	  }
	  else
	  {
		echo('...processing'.$line.'\n\r');
		  
		fwrite($fw,$line);  
	  }
	  	  	  
	}
	
	fclose($fh);
	
	fclose($fw);

?>