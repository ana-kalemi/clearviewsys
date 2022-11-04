// ActionScript Document
package com.abdullah.model
{
	import flash.events.Event;
	import fl.data.DataProvider;
	
	
	

	public class XMLCurrEvent extends Event { 
	       
		   	public static const COMPLETE:String = 'complete'; 
			public var dp:Array; 
	        public var xmlList:XML; 
	
	      public function XMLCurrEvent(type:String,dp:Array ,xmlList:XML, bubbles:Boolean=false, cancelable:Boolean=false) { 
		     
			  super(type, bubbles, cancelable); 
		      this.dp = dp; 
		      this.xmlList = xmlList; 
		  
		  
		  } 
	
	
	
	
	} 


} 