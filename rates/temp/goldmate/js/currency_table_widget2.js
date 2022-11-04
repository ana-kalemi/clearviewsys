function refreshTable() {
	
	var table_header = "<table>"
	
	table_header +="<tr id=\"currency_widget_table_header\" ><td></td>"
	//table_header += "<td class=\"header\"></td>"
	table_header += "<td class=\"header\">Code</td>"
	//table_header += "<td class=\"header\">Currency</td>"
	//table_header += "<td class=\"headerbuy\">We Buy</td>"
	//table_header += "<td class=\"headersell\">We Sell</td>"
	table_header += "<td class=\"headerbuy\">We BUY</td>"
	table_header += "<td class=\"headersell\">We SELL</td>"
	table_header += "<td class=\"header\">Country</td>"
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
				
				for (var i=0; i < rate_array.length; i++) 
				{
					var r_country = rate_array[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
					var r_code = rate_array[i].getElementsByTagName("ISO")[0].childNodes[0].nodeValue;
					var r_name = rate_array[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
					var r_webuy = rate_array[i].getElementsByTagName("WEBUY")[0].childNodes[0].nodeValue;
					var r_wesell = rate_array[i].getElementsByTagName("WESELL")[0].childNodes[0].nodeValue;
					var r_invbuy = rate_array[i].getElementsByTagName("INVBUY")[0].childNodes[0].nodeValue;
					var r_invsell = rate_array[i].getElementsByTagName("INVSELL")[0].childNodes[0].nodeValue;
					var r_flagurl = rate_array[i].getElementsByTagName("FLAGURL")[0].childNodes[0].nodeValue;
					
					table_rows += "<tr><td><img src=\"../"+r_flagurl+"\"";
					
					table_rows += "/>"
					//</td><td class=\"country\">" + r_country 
					table_rows += "</td><td class=\"code\">" + r_code 
					//table_rows += "</td><td class=\"currency\">" + r_name 
					//table_rows += "</td><td class=\"buy\">" + r_webuy 
					//table_rows +="</td><td class=\"sell\">" + r_wesell
					table_rows += "</td><td class=\"buy\">" + r_invbuy ;
					table_rows +="</td><td class=\"sell\">" + r_invsell ;
					table_rows += "</td><td class=\"country\">" + r_country ;

					table_rows +="</td></tr>";
				
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