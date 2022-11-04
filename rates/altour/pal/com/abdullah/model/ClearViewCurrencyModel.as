// ActionScript Document
package com.abdullah.model { 

 import fl.controls.DataGrid; 
 import fl.data.DataProvider; 
 import flash.events.EventDispatcher; 
 import flash.events.Event; 
 import flash.net.*;


public class ClearViewCurrencyModel extends EventDispatcher { 


 
 
       private var dp:DataProvider;  
       private static var _url:String = 'rateswithcss.xml'; 
	   private var urlLdr:URLLoader; 
	   private var urlReq:URLRequest; 
	   
	   [Event(name="complete", type="flash.events.Event")]
 
        public function ClearViewCurrencyModel() { 
		
		
		   dp = new DataProvider(); 
		
		 } 




     public function providObjectData():DataProvider{ 
	 
	    
	  
	 
	     dp.addItem({data:"./media/AUS.jpg", currency:'Aus Currency'});
		 dp.addItem({data:"./media/AUT.jpg", currency:'Austrian'});
		 dp.addItem({data:"./media/BRA.jpg", currency:'Britain'});
		 dp.addItem({data:"./media/CAN.jpg", currency:'Canadian'});
		 dp.addItem({data:"./media/ITA.jpg", currency:'Italian'});
		 dp.addItem({label:"Item f", data:5});
		 dp.addItem({label:"Item g", data:6});
		 dp.addItem({label:"Item h", data:7});
		 dp.addItem({label:"Item i", data:8});
		 dp.addItem({label:"Item j", data:9});
		 
		 return dp; 
	 
	    
	 }
    
	
	public function getDataLength():uint { 
	
	      return dp.length; 
	
	
	} 
	
	public function provideXMLData():void { 
	
	
	      urlReq = new URLRequest(_url); 
		  urlLdr = new URLLoader; 
		  urlLdr.addEventListener(Event.COMPLETE, completeHandler); 
		  urlLdr.load(urlReq); 
		  
	
	} 
	
	
	private function completeHandler(ev:Event):void { 
	
            var tLdr:URLLoader = ev.currentTarget as URLLoader; 
			XML.ignoreComments = true;
			XML.ignoreProcessingInstructions = true;
			var XMLDp:XML = new XML(tLdr.data);
			var t:XML = XMLDp;
			//trace(t.length())
			
			 
			
			var t_dp = new Array();
			for(var j:uint = 1; j< XMLDp.children().length(); j++) { 
				  
				  t_dp.push({
							 data:XMLDp.children()[j].FLAGURL.toString(),
							 country:"<font color='#CCCCCC'>"+XMLDp.children()[j].COUNTRY.toString()+"</font>",
							 iso:"<font color='#CCFF00'>"+XMLDp.children()[j].ISO.toString()+"</font>",
							 name:"<font color='#CCFF00'>"+XMLDp.children()[j].NAME.toString()+"</font>",
							 webuy:"<font color='#FFCC33'>"+XMLDp.children()[j].WEBUY.toString()+"</font>",
							 wesell:"<font color='#6699FF'>"+ XMLDp.children()[j].WESELL.toString()+"</font>",
							 invbuy:"<font color='#FFCC33'>"+XMLDp.children()[j].INVBUY.toString()+"</font>",
							 invsell:"<font color='#6699FF'>"+XMLDp.children()[j].INVSELL.toString()+"</font>"
							 }); 
			
			} 
			//trace(XMLDp.children().length()); 
			
			dispatchEvent(new XMLCurrEvent(XMLCurrEvent.COMPLETE,t_dp, t));
	
	
	} 
  } 

}