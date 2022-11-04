function refreshTable() {
	var table_header = "<table><tr id=\"currency_widget_table_header\" ><td></td><td class=\"header\">Country</td><td class=\"header\">Currency</td><td class=\"header\">Code</td><td class=\"headerbuy\">We Buy</td><td class=\"headersell\">We Sell</td><td class=\"headerbuy\">Inverse Buy</td><td class=\"headersell\">Inverse Sell</td></tr>";
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
				for (var i=0; i < rate_array.length; i++) {
					var r_country = rate_array[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
					var r_code = rate_array[i].getElementsByTagName("ISO")[0].childNodes[0].nodeValue;
					var r_name = rate_array[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
					var r_webuy = rate_array[i].getElementsByTagName("WEBUY")[0].childNodes[0].nodeValue;
					var r_wesell = rate_array[i].getElementsByTagName("WESELL")[0].childNodes[0].nodeValue;
					var r_invbuy = rate_array[i].getElementsByTagName("INVBUY")[0].childNodes[0].nodeValue;
					var r_invsell = rate_array[i].getElementsByTagName("INVSELL")[0].childNodes[0].nodeValue;
					var r_flagurl = rate_array[i].getElementsByTagName("FLAGURL")[0].childNodes[0].nodeValue;
					if (i%2 == 0) {
						table_rows += "<tr class=\"row_even\"><td><img src=\""+r_flagurl+"\" /></td><td class=\"country\">" + r_country + "</td><td class=\"currency\">" + r_name + "</td><td class=\"currency\">" + r_code + "</td><td class=\"buy\">" + r_webuy + "</td><td class=\"sell\">" + r_wesell + "</td><td class=\"inversebuy\">" + r_invbuy + "</td><td class=\"sell\">" + r_invsell + "</td></tr>";
					} else {
						table_rows += "<tr class=\"row_odd\"><td><img src=\""+r_flagurl+"\" /></td><td class=\"country\">" + r_country + "</td><td class=\"currency\">" + r_name + "</td><td class=\"currency\">" + r_code + "</td><td class=\"buy\">" + r_webuy + "</td><td class=\"sell\">" + r_wesell + "</td><td class=\"inversebuy\">" + r_invbuy + "</td><td class=\"sell\">" + r_invsell + "</td></tr>";
					}
				}
				
				$('currency_table').update(time + table_header + table_rows + table_footer);
	    	},

    		onFailure: function() {
				$('currency_table').update("<p>Error connecting to the server.</p>");
			}
		}
	);
}

function beginDisplayCurrencyTable() {
	refreshTable();
	//	NOTE: the unit is second.
	new PeriodicalExecuter(refreshTable, 60);
}

document.observe('dom:loaded', beginDisplayCurrencyTable);