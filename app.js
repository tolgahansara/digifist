function test(){
    console.log("clicked")
}

const imageChange = document.getElementById('imageChange');

function changePurple(){
    imageChange.src =  "./assets/purplehoodie.png" 
}
function changeGreen(){
    imageChange.src = "./assets/card-1.png"
 
}

console.log(imageChange);
