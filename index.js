var numOfDrumButtons= document.querySelectorAll(".drum").length;

for(var i =0; i<numOfDrumButtons;i++)
{

    //Detecting button press

        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;

        
        makesound(buttonInnerHTML);
        ButtonAnimation(buttonInnerHTML);
   
        }); 
    
    //Detecting keypress

        document.addEventListener("keypress",function(event){
            makesound(event.key);
            ButtonAnimation(event.key);
           
    });
}

    function makesound(key){
        switch (key) {
            case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
            case "s":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
            case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
            case "j":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
            case "k":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
            case "l":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                

                
            default:
                break;
    }
    
    
}
function ButtonAnimation(currentKey){
    var ActiveButton=document.querySelector("."+currentKey);
    //Button Animation
    ActiveButton.classList.add("pressed");

    setTimeout(function(){
        ActiveButton.classList.remove("pressed");},100);
}


