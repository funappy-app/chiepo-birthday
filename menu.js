'use strict';
var count = 0;
const btn = document.getElementById('btn');
const img = document.getElementById('image');
var degree = 0;
btn.onclick=()=>{
  setInterval(()=>{
    degree = degree + 6;
    img.style.transform = 'rotate(' + degree + 'deg)';
  },100);
  count++;
  if(count>10){
    alert('お誕生日おめでとう。これからもよろしくお願いします。');
  }
};