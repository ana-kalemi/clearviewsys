

jQuery(document).ready(function () {
        
       adfunction.init();
});
let adscount=1;
var adfunction = {
        wrapper: jQuery(".add-wrapper"),
        timer: 8000,
        init: function () {
                
                setInterval(function () {
                        adfunction.changeSlide();
                }, adfunction.timer);
        },
        changeSlide: function () {
                var next = adfunction.wrapper.find(".pms-block.active").next();
                adfunction.wrapper.find(".pms-block").removeClass("active");
                
                
                if (next.length < 1) {
                         adfunction.wrapper.find(".pms-block").first().addClass("active");
                        
                   }     
               else {
                        next.addClass("active");
                        

                        adfunction.adsRotate();

                        
                }

        },

        adsRotate: function () {
                var imageTag= document.getElementById("ads");
                var path = ["../../Ads/InternPay.jpg","../../Ads/Ewire.jpg"]
				//var path = ["../Ads/eWire3.jpg","../Ads/InternPay2.jpg"]
                if(adscount == 1)
                {
                        //console.log("ads count 1 image 1");
                        document.getElementById("ads").src=path[0];
                        adscount++;
                }
                else if (adscount == 2){
                      
                             //   console.log(`ads count ${adscount} image2`);
                                document.getElementById("ads").src=path[1];
                        
                        adscount=1;
                }
                // else if(adscount == 3)
                // {
                //         document.getElementById("ads").src=path[2];
                        
                //         adscount=1;
                // }
           
        }
}