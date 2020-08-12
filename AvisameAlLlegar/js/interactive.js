

$(document).ready(function(){
    
        var inform = $("#rowinfo");
       var inform2= $("#rowinfo2");
        var video = $("#video1");
        var rowbotones1 = $("#botones");
        var rowbotones2 = $("#botones2");
		var mensajediv1 = $("#mensajediv1");
		var mensajediv2 = $("#mensajediv2");
        var mensajediv0 = $("#mensajediv0");
		var flagmensaje = 0;
            
         video.load(); 
    
      $("#play2").on("click", function() {inicio(1);});
    
    inicio(0);
    function inicio(x){
    video.currenttime = 0;
            video.hide();
            inform.hide();
           inform2.hide();
           rowbotones1.hide();
          rowbotones2.hide();
		   mensajediv1.hide();
		   mensajediv2.hide();
           mensajediv0.hide();
            flagmensaje=0;
    
        if(x==0){
          inform.show(1000);
            }
        else{
        video = $("#video1");
        inform.hide(1000); 
        video.delay( 800 ).fadeIn(3000);
        video.get(0).play();
            interaccion=0;
            segundainteraccion=0;
            i=0;
            op=0;
            op1int = 0;
            op2int=0;
            op3int=0;
            op4int=0;
            op5int=0;
        }
    
            $("#video2a").load().hide();
        $("#video2b").load().hide();
        $("#video3").hide(); 
        $("#video4a").hide(); 
        $("#video4b").hide(); 
        $("#video4c").hide(); 
        $("#video4d").hide(); 
    
    $("#play").on("click", function() {
       inform.hide(1000); 
        
        video.delay( 800 ).fadeIn(3000);
        video.get(0).play();
        
         });
        
    }
    
  video.on('ended',cambiarvideo);


    function cambiarvideo(){
            switch(op){
          case 0://NO HACER NADA 1
              video.hide();
              video = $("#video2a");
              video.show();
               $("#video3").load();
              op=3;
              video.get(0).play();
            video.on('ended',cambiarvideo);
              break;
              
          case 1: // ACELERAR EL PASO
              video.hide();
              video = $("#video2a");
              video.show();
               $("#video3").load();
              op=3;
              video.get(0).play();
            video.on('ended',cambiarvideo);
              break;
              
          case 2: // MIRAR ATRAS
              video.hide();
              video = $("#video2b");
              video.show();
               $("#video3").load();
              op=3;
              video.get(0).play();
            video.on('ended',cambiarvideo);
              break;
              
        case 3: // preinteraccion2
              video.hide()
              video = $("#video3");
              $("#video4a").load();
              $("#video4b").load();
              $("#video4c").load();
              $("#video4d").load();
              op=7;
             video.get(0).play();
            video.fadeIn(4500);
            video.on('ended',cambiarvideo);
              break;
              
                    
 //INTERACCION 2
       case 4: // coger el movil video4a
            segundainteraccion=1;
              video.hide();
              video = $("#video4a");
              video.show();
            video.get(0).play();
        video.on('ended',bucle);
              break;
                    
        case 5: // contestarle video4b
            segundainteraccion=1;
              video.hide();
              video = $("#video4b");
              video.show();
            video.get(0).play();
        video.on('ended',bucle);
              break;
                    
        case 6: // salir corriendo video4c
             segundainteraccion=1;
              video.hide();
              video = $("#video4c");
              video.show();
            video.get(0).play();
        video.on('ended',bucle);
              break;
                    
         case 7: // no hacer nada video4d
             segundainteraccion=1;
              video.hide();
              video = $("#video4d");
              video.show();   
            video.get(0).play();
        video.on('ended',bucle);
              break;
                    

             }
        
    };
    
    var i=0;
    var segundainteraccion = 0;
    var op1= $("#op1");
    var op2= $("#op2");
    var op3= $("#op3");
    var op4= $("#op4");
    var op5= $("#op5");
    var op=0;
    
    function bucle(){
        if( op3==""  && op4=="" && op5=="" ){
             inform2.show(6000);
            video.hide();
            video.pause();
        }
        if(op3==""){
             $("#op3").removeClass( "colinter" );  
           $("#op3").addClass( "colinter3" );  
        }
        if(op4==""){
            $("#op4").removeClass( "colinter" );  
            $("#op4").addClass( "colinter3" );  
        }
        if(op5==""){
             $("#op5").removeClass( "colinter" );  
            $("#op5").addClass( "colinter3" );  
        }
        
      op=3;
        cambiarvideo();
    }
    
    
    
    //SOLO HAY QUE CAMBIAR ESTO! LA VARIABLE SEGUNDO DICE EN QUE SEGUNDO MOSTRAR LA INTERACCIÓN
            var segundo1=92;
		    var segundo2 = 120; //esta es de la segunda interaccion
            var interaccion=0;
            var segundobucle = 114;
    
    
     $("#video1").on("play", function(){ 
         interaccion=0;
         video.on("timeupdate", function(event){
         
         if(interaccion == 0){
                
                 onTrackedVideoFrame(this.currentTime, this.duration);
                
                    
                if(this.currentTime>(segundo1-5)){
                    mensajediv0.show();
                    rowbotones1.hide();
                }
                 if (this.currentTime>segundo1){
                     rowbotones1.show();
                     mensajediv0.hide();

            }
                if(this.currentTime>(segundo1 + 5)){
                     rowbotones1.hide("slow");
                    interaccion=1;

                 }
             
             }
                
            });
                                       }); 
    
    
 $("#video3").on("play", function(){
     if(segundainteraccion==1){
     this.currentTime= segundobucle;}
     interaccion = 0;
     video.on("timeupdate", function(event){
         
         if(interaccion == 0){
                
                 onTrackedVideoFrame(this.currentTime, this.duration);
                
                    
                 if (this.currentTime>segundo2){
                     rowbotones2.show();
					 mensajediv1.hide();
					 mensajediv2.hide();
                     flagmensaje=1;
            }
			 
			 	if(this.currentTime>(segundo2-5) && this.currentTime<segundo2 && flagmensaje==0){
					mensajediv1.show();
				}
			 
			 	if(this.currentTime>(segundo2-6) && this.currentTime<segundo2 && flagmensaje==1){
					mensajediv2.show(1000);
				}
			 
			 
                if(this.currentTime>(segundo2 + 5)){
                     rowbotones2.hide("slow");
                    interaccion=1;

                 }
         }
                
            });
                                   }); 

    
    
    
    
    /*OPCIONES*/

var op1int = 0;
var op2int = 0;
var op3int = 0;
var op4int = 0;
var op5int = 0;
        
              op1.on("click", function() {
				  if (op1int==0 && op2int==0 ){ 
				  op1int=1;
				  op2int=2;
                  if (interaccion==0){
                    rowbotones1.hide(1000);
                  interaccion=1;
                    $("#op1").removeClass( "colinter" ); 
                    $("#op1").addClass( "colinter2" );  
                  op=1;
                  } }


        });
    
    
                op2.on("click", function() {
				if (op1int==0 && op2int==0 ){ 
				  op1int=1;
				  op2int=2;
                    if (interaccion==0){
                    rowbotones1.hide(1000);
                    interaccion=1;
                        $("#op2").removeClass( "colinter" );  
                        $("#op2").addClass( "colinter2" );  
                    op=2;
                    }}
             

        });

    
    
                op3.on("click", function() {
				if (op3int==0){ 
				  op3int=1;
                    if (interaccion==0){
                    rowbotones2.hide(1000);
                    interaccion=1;
                        $("#op3").removeClass( "colinter" );  
                        $("#op3").addClass( "colinter2" );  
                op=4;
                    op3="";
                    }}
        });

    
    
                op4.on("click", function() {
				if (op4int==0){ 
				 op4int=1;
                    if (interaccion==0){
                    rowbotones2.hide(1000);
                    interaccion=1;
                        $("#op4").removeClass( "colinter" );  
                        $("#op4").addClass( "colinter2" ); 
                 op=5;
                    op4="";
                    }}
        });
    
    
                op5.on("click", function() {
					if (op5int==0){ 
				 op5int=1;
                    if (interaccion==0){
                    rowbotones2.hide(1000);
                    interaccion=1;
                        $("#op5").removeClass( "colinter" );  
                        $("#op5").addClass( "colinter2" ); 
                  op=6;
                    op5="";
                        }}
        });
   
    
});





function onTrackedVideoFrame(currentTime, duration){
    $("#current").text(currentTime); 
}; 