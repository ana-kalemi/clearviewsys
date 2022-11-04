 // ActionScript Document

package {


	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.net.FileFilter;
	import flash.net.FileReference;
	import fl.controls.DataGrid;
	import flash.utils.Timer;
	import flash.events.TimerEvent;
	import fl.data.DataProvider;
	import fl.controls.dataGridClasses.DataGridColumn;
	import fl.controls.ScrollBar; 
	import fl.controls.Label; 
	import flash.text.TextFieldAutoSize; 
	import flash.text.TextFormat; 

	import com.abdullah.model.*;
	import com.abdullah.datagrideffects.*;

	public class Main extends Sprite {


		private var gridData:ClearViewCurrencyModel;
		private var dataGrid:DataGrid;
		private var fColumn:DataGridColumn;
		private var mTimer:Timer;
		private var gridRowHeight:uint = 30;
		private var dgLength:uint;
		private var dgHolder:Object; 
		private var dgArray:Array; 
		private var xmlList:XML; 
		private var serialLabel:Label; 
		private var companyLabel:Label; 
		private var dateLabel:Label; 
		
		
		public function Main():void {


			gridData=new ClearViewCurrencyModel  ;
			gridData.addEventListener(Event.COMPLETE, completeXMLLoad);
			var delay:uint=600;
			//mTimer=new Timer(delay);
			createGrid();


		}



		private function createGrid() {

			dataGrid = new DataGrid();
			dataGrid.rowHeight = 20;
			// dataGrid.addColumn("isflagged");
			var temp:Object; 
			temp = DataGrid.getStyleDefinition(); 
		    
		  
		  for(var j in temp) { 
		   
		       trace(j); 
		   
		   
		   } 
			var tf:TextFormat = new TextFormat();
			tf.font = "Arial";
			tf.size = 12;
			tf.bold = true;
			tf.color = 0xCCCCCC
			dataGrid.setStyle("headerTextFormat", tf);
			
			
			
			var fColumn=new DataGridColumn('flag');
			fColumn.cellRenderer=com.abdullah.datagrideffects.LoaderCellRenderer;
			fColumn.headerText='Flag';
			fColumn.width=50;
			fColumn.resizable=false;
			dataGrid.addColumn(fColumn);
			fColumn.headerRenderer = ColumnBackgroundOriginal;
		  
		    

			var countryColumn = new DataGridColumn('country');
			countryColumn.headerText='Country';
			countryColumn.width=110;
			countryColumn.resizable=true;
			dataGrid.addColumn(countryColumn);
			countryColumn.headerRenderer = ColumnBackgroundOriginal;

			var isoColumn:DataGridColumn=new DataGridColumn("iso");
			isoColumn.headerText='ISO';
			isoColumn.width = 60
			isoColumn.resizable=true;
			dataGrid.addColumn(isoColumn);
			isoColumn.headerRenderer = ColumnBackgroundOriginal;

			var nameColumn:DataGridColumn=new DataGridColumn('name');
			nameColumn.resizable=true;
			nameColumn.headerText='Name';
			nameColumn.width = 80
			dataGrid.addColumn(nameColumn);
			nameColumn.headerRenderer = ColumnBackgroundOriginal;
		  

			var webuyColumn:DataGridColumn=new DataGridColumn('webuy');
			webuyColumn.resizable=false;
			webuyColumn.headerText='We Buy';
			webuyColumn.width = 92
			dataGrid.addColumn(webuyColumn);
			webuyColumn.headerRenderer = ColumnBackgroundBlue;
			

			var wesellColumn:DataGridColumn=new DataGridColumn('wesell');
			wesellColumn.resizable=true;
			wesellColumn.headerText='We Sell';
			wesellColumn.width = 92
			dataGrid.addColumn(wesellColumn);
			wesellColumn.headerRenderer = ColumnBackgroundOrange;

			var inbuyColumn:DataGridColumn=new DataGridColumn('invbuy');
			inbuyColumn.resizable=true;
			inbuyColumn.headerText='Inv Buy';
			wesellColumn.width = 82; 
			dataGrid.addColumn(inbuyColumn);
			inbuyColumn.headerRenderer = ColumnBackgroundBlue;


			var invsellColumn:DataGridColumn=new DataGridColumn('invsell');
			invsellColumn.resizable=true;
			invsellColumn.headerText='Inv Sell';
			invsellColumn.width = 82; 
			dataGrid.addColumn(invsellColumn);
			invsellColumn.headerRenderer = ColumnBackgroundOrange;


			dataGrid.width=650;
			dataGrid.height=800;
			//dataGrid.rowCount=10;
			dataGrid.rowHeight=gridRowHeight;
			dataGrid.move(10, 50);
			addChild(dataGrid);
			
			//serialLabel = new Label(); 
			companyLabel = new Label(); 
			dateLabel = new Label(); 
			
			//serialLabel.width = 150; 
			companyLabel.width = 160; 
			dateLabel.width = 500; 
			
			//serialLabel.autoSize = TextFieldAutoSize.CENTER; 
			//serialLabel.selectable = false;
			companyLabel.autoSize = TextFieldAutoSize.CENTER; 
			dateLabel.autoSize = TextFieldAutoSize.CENTER; 
			
			
			
			dateLabel.move((stage.stageWidth - 600), 30); 
			companyLabel.move((stage.stageWidth - 400), (dataGrid.height + 100));
		   // serialLabel.move((stage.stageWidth - 400), (companyLabel.x + 40)); 
			
			addChild(dateLabel); 
			addChild(companyLabel); 
			//addChild(serialLabel); 
			

			dataGrid.setStyle("cellRenderer", com.abdullah.datagrideffects.AlternateRowColors);
			dataGrid.setStyle("trackUpSkin", ScrollTrack_skin2);
			dataGrid.setStyle("thumbIcon", ScrollBar_thumbIcon2); 
		    dataGrid.setStyle("thumbUpSkin" , ScrollThumb_upSkin2);
			//dataGrid.setStyle("downArrowUpSkin", ScrollArrowDown_upSkin2);
			//dataGrid.setStyle("upArrowUpSkin", ScrollArrowUp_upSkin2); 
			gridData.provideXMLData();
			//mTimer.addEventListener(TimerEvent.TIMER, timerHandler); 
			


		}



		private function completeXMLLoad(ev:XMLCurrEvent):void {

            dgArray = new Array(); 
			dgArray = ev.dp as Array; 
			xmlList = ev.xmlList as XML; 
			setLabels(xmlList); 
			//trace(xmlList.length()); 
			populateData();
	
			 
			
		}
		
		private function setLabels(list:XML):void { 
		   
		   companyLabel.htmlText='<font color='+'"#0066CC"'+">"+'Powered By '+'<a href='+"'https://www.currencyxchanger.com'"+' target='+'"_blank">'+"Company Name"+'</a></font>';
		   dateLabel.htmlText ='<font color='+'"#FFCC33"'+">"/* +"Last Updated: "*/+list[0].TIMESTAMP+'</font>';
		 //  serialLabel.htmlText ='<font color='+'"#FFCC33"'+">"+"Product Key: "+ list[1]+'</font>'; 
								
		   
		   //trace(list.length()); 
		   
		   
		
		} 


		private function populateData():void { 
			   
			 var t_dp:DataProvider = new DataProvider(); 
		     for (var j:uint=0; j<dgArray.length; j++) { 
			 
			       t_dp.addItem(dgArray[j]);
			 
			 } 
			   
		    dataGrid.dataProvider = t_dp; 
			//mTimer.start();
		
		} 
		
		private function purgeData():void { 
		
				mTimer.stop();
				dataGrid.removeAll();
				
		
		} 
		
		
		
		private function scrollEvent(ev:Event):void {

			var dg:DataGrid=ev.target as DataGrid;

		}

		private function timerHandler(ev:Event):void {

			
			if (dataGrid.verticalScrollPosition < (dataGrid.maxVerticalScrollPosition+24)) {

				dataGrid.verticalScrollPosition++;
		
			    
			} else {
				
				dataGrid.verticalScrollPosition=0;
				purgeData(); 
				populateData();
								   
			}

			


		}


	}



}