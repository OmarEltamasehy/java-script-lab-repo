let next = document.getElementById("next");
let pre = document.getElementById("previous");
let play = document.getElementById("play");
let stop = document.getElementById("stop");

let image = document.getElementById("image");

let imageSourceArr = ["img/gray.png" , "img/orange.png" , "img/green.png" , "img/red.png"] ;
let counter = 0 ;

// for next button
function nextImage(){
    counter++
    if ( counter < imageSourceArr.length ){
        image.src = imageSourceArr[counter];
        
        console.log(counter);
        
    }
    else
    {
        counter = 0
    }

}
next.addEventListener('click' , nextImage)




// for previous button 
function previousImage(){
  // console.log(counter);
  counter--
    if ( counter >= 0 && counter < imageSourceArr.length ){
        image.src = imageSourceArr[counter];
        console.log(counter);   
    }
    else
    {
        counter = imageSourceArr.length -1 ;
        console.log("counter in else "+ counter);
        
    }

}
pre.addEventListener('click' , previousImage)




// for playing images as an video
function doPlay(){

    if ( counter < imageSourceArr.length ){
        let imageSource = imageSourceArr[counter];
        image.src = imageSource;
        counter ++ 
    }
    else{
        counter = 0
    }
  
}

let myInterval 
function pressPlay(){
    myInterval = setInterval(doPlay, 1000);
}
play.addEventListener('click' , pressPlay)



function pressStop(){
   clearInterval(myInterval)
   console.log("after clear "); 
   //play.removeEventListener('click' , pressPlay)
   console.log("after remove ");
}
stop.addEventListener('click' , pressStop)
