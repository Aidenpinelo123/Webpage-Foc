var inputOneIsOn = false; 
var inputTwoIsOn = false;


function toggleImage() {
   var img1 = "Imgs/buttonoff.png";
   var img2 = "Imgs/buttonon.png";
  
   
   var imgElement = document.getElementById('toggleImage');


   imgElement.src = (imgElement.src === img1)? img2 : img1;
   
   
}

  
function toggleImage2() {
   var img1 = "Imgs/buttonoff.png";
   var img2 = "Imgs/buttonon.png";
  
   
   var imgElement = document.getElementById('toggleImage2');


   imgElement.src = (imgElement.src === img1)? img2 : img1;
   
   
}

    function toggleInputOne() { 
            inputOneIsOn = !inputOneIsOn; 
            
        } 

    function toggleInputTwo() { 
            inputTwoIsOn = !inputTwoIsOn; 
              
           
        } 



function and(){
    var a = inputOneIsOn;
    var b = inputTwoIsOn;
    
	  
            console.log('Input one is on: ', 
                                inputOneIsOn); 
								
	        console.log('Input two is on: ', 
                                inputTwoIsOn); 
	
    
    if(inputOneIsOn&&inputTwoIsOn)
        document.getElementById('andGate').src='Imgs/and2on.png';
    else if (!inputOneIsOn && inputTwoIsOn) 
        document.getElementById('andGate').src='Imgs/andoffon.PNG';
	else if (inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='Imgs/andonoff.PNG';
	else if (!inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='Imgs/and2off.PNG';
	}
