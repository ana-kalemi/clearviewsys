﻿package com.abdullah.datagrideffects {     import fl.controls.dataGridClasses.HeaderRenderer;      public class ColumnBackgroundOriginal extends HeaderRenderer {                            public function ColumnBackgroundOriginal() { 									      super(); 						}                  								public static function getStyleDefinition():Object { 			 			 			 				 return HeaderRenderer.getStyleDefinition(); 			 			 			 			 			 }                 			 			 override protected function drawBackground():void { 			 															   setStyle("upSkin",HeaderRenderer_upSkin2); 					   super.drawBackground(); 			 } 			 			 override protected function drawLayout():void { 			    			      textField.wordWrap = true;				  textField.autoSize = "left";				  textField.width = this.width;				  textField.htmlText=this.label;				  super.drawLayout ();			 }       } } 