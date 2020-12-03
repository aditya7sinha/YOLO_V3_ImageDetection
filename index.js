var forma=document.getElementById("#imge")
var requestOptions = {
  method: 'POST',
  body: forma,
  redirect: 'follow'
};

fetch("http://0.0.0.0:5000/detections", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// var ch=document.getElementsByClassName('column')
// ch.addEventListener('click',function(ch){

// })