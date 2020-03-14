'use strict';
var count = 0;
const btn = document.getElementById('btn');
btn.onclick=()=>{
  count++;
  if(count>10){
    alert('お誕生日おめでとう。これからもよろしくお願いします。');
  }
};