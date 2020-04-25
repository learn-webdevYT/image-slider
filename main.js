var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg", "img/5.jpeg", "img/6.jpeg", "img/7.jpeg"];

var i = 0;

//next btn
next.addEventListener('click', function(){
   i++;
   if(i > arr.length - 1){
        i = 0;
   }
   document.getElementById('image').src = arr[i];
})

//prev btn
prev.addEventListener('click', function(){
    i--;
    if(i < 0){
        i = arr.length - 1;
    }
    document.getElementById('image').src = arr[i];
})


