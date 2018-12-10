let prev = document.getElementById("previous");
let next = document.getElementById("next");
let currentimg = document.getElementById("currentimg");
let img1 = document.getElementById("1img");
let img2 = document.getElementById("2img");
let img3 = document.getElementById("3img");
let arr = [`${img1.src}`,`${img2.src}`,`${img3.src}`];

prev.addEventListener("click", function() {
    for(let i = 0; i < arr.length; i++ ) {
        if(currentimg.src === arr[0]){return;}

        if(currentimg.src === arr[i]){
            currentimg.src = arr[i-1];
            select();
            return;
        }
    }
});

next.addEventListener("click",function() {
    
    for(let i = 0; i < arr.length; i++ ) {
        if(currentimg.src === arr[2]){return;}

        if(currentimg.src === arr[i]){
            currentimg.src = arr[i+1];
            select();
            return;
        }
    }
});

function select() {
    for(let i = 0; i < arr.length; i++ ) {
        let el =  document.getElementById(`${i+1}img`);
        if(currentimg.src === arr[i]){            
            el.style.backgroundColor = "rgb(128, 128, 128, 1)";
            el.style.border = "3px solid #00FF00";
        }
        else{
            el.style.backgroundColor = "rgb(0, 0, 0, 0)";
            el.style.border = "1px  black";
        }
    }
}

select();

