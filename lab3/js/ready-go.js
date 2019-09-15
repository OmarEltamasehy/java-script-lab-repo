let image_1 = document.getElementById("firstImage");
let image_2 = document.getElementById("seconedImage");
let image_3 = document.getElementById("thirdImage");

let message = document.getElementsByClassName("message")[0];

let counter = 0 ;
function getReady(){
    counter ++ ;
    if (counter == 1){
        image_1.src = "img/red.png" ;
        image_3.src = "img/gray.png" ;
        message.innerHTML = "stop"
    }
    else if (counter == 2){
        image_2.src = "img/orange.png" ;
        image_1.src = "img/gray.png" ;
        message.innerHTML = "be ready"
    }
    else if (counter == 3){
        image_3.src = "img/green.png" ;
        image_1.src = "img/gray.png" ;
        image_2.src = "img/gray.png" ;
        message.innerHTML = "Go"
        counter = 0;

    }
    else{
        image_1.src = "img/gray.png" ;
        image_2.src = "img/gray.png" ;
        image_3.src = "img/gray.png" ;

        message.innerHTML = "there is a problem"
    }

}

setInterval(getReady, 3000);