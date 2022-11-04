function refreshTable() {
	
	var table_header = "<table>";
	
	table_header +="<tr id=\"currency_widget_table_header\" ><td></td>";
	table_header += "<td class=\"header\">Code</td>";
	table_header += "<td class=\"headerbuy\">We Buy</td>";
	table_header += "<td class=\"headersell\">We Sell</td>";
	table_header +="<td></td>";
	table_header += "<td class=\"header\">Code</td>";
	table_header += "<td class=\"headerbuy\">We Buy</td>";
	table_header += "<td class=\"headersell\">We Sell</td>";
	table_header += "</tr>";
	
	
	var table_rows = "";
	var	table_footer = "</table>";
  
	new Ajax.Request('rateswithcss.xml',
		{
    		method:'get',
    		onSuccess: function(transport) {
	   			var response = transport.responseText || "no response text";

				//	load xml parser
				try {
				// code for IE
	  				var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	  				xmlDoc.async="false";
	  				xmlDoc.loadXML(response);
	  			} catch(e) {
					// code for Mozilla, Firefox, Opera, etc.
	  				try {
	  					var parser=new DOMParser();
	  					var xmlDoc=parser.parseFromString(response,"text/xml");
	  				} catch(e) {
	  					alert(e.message);
	  					return;
					}
	  			}
				
				var time = xmlDoc.getElementsByTagName("TIMESTAMP")[0].childNodes[0].nodeValue;
				
				//	parse xml
				var rate_array = xmlDoc.getElementsByTagName("RATE");
				
				for (var i=0; i < rate_array.length-1; i++) 
				{
					var r_code1 	= rate_array[i].getElementsByTagName("ISO")[0].childNodes[0].nodeValue;
					var r_webuy1 	= rate_array[i].getElementsByTagName("WEBUY")[0].childNodes[0].nodeValue;
					var r_wesell1 	= rate_array[i].getElementsByTagName("WESELL")[0].childNodes[0].nodeValue;
					var r_flagurl1 	= rate_array[i].getElementsByTagName("FLAGURL")[0].childNodes[0].nodeValue;
						
					var r_code2 	= rate_array[i+1].getElementsByTagName("ISO")[0].childNodes[0].nodeValue;
					var r_webuy2 	= rate_array[i+1].getElementsByTagName("WEBUY")[0].childNodes[0].nodeValue;
					var r_wesell2 	= rate_array[i+1].getElementsByTagName("WESELL")[0].childNodes[0].nodeValue;
					var r_flagurl2 	= rate_array[i+1].getElementsByTagName("FLAGURL")[0].childNodes[0].nodeValue;
				
										
							table_rows += "<tr><td class=\"flag\"><img src=\"../"+r_flagurl1+"\"";
							table_rows += "/>"
							table_rows += "</td><td class=\"code\">" + r_code1 
							table_rows += "</td><td class=\"buy\">" + r_webuy1 
							table_rows +="</td><td class=\"sell\">" + r_wesell1

							table_rows += "</td><td class=\"flag\"><img src=\"../"+r_flagurl2+"\"";
							table_rows += "/>"
							table_rows += "</td><td class=\"code\">" + r_code2
							table_rows += "</td><td class=\"buy\">" + r_webuy2 
							table_rows +="</td><td class=\"sell\">" + r_wesell2
						
							table_rows +="</td></tr>";
					i++;
				
				}
				
				$('currency_table').update( table_header + table_rows + table_footer+time);
	    	},

    		onFailure: function() {
				$('currency_table').update("<p>Currency XML Rates cannot be parsed/displayed properly</p>");
			}
		}
	);
}

function beginDisplayCurrencyTable() {
	refreshTable();
	//	NOTE: the unit is second.
	new PeriodicalExecuter(refreshTable, 10);
}

document.observe('dom:loaded', beginDisplayCurrencyTable);