function animation(){

  var element = document.querySelectorAll('.anime').forEach(function(el){
    el.addEventListener('mouseover', function(e){
        e.target.classList.add('animated', 'rubberBand');
        e.target.style='color:#08fdd8';
  
        setTimeout(() => {
            e.target.classList.remove('animated', 'rubberBand')
        }, 1000);
  
        e.preventDefault();
     })
  })
  
  var element = document.querySelectorAll('.anime').forEach(function(el){
    el.addEventListener('mouseout', function(e){
        e.target.style='color:#fff';
        e.preventDefault();
    })  
  })
}

animation();





/*
// ASYNC Page loader
var content = document.getElementsByClassName('main-container')[0];

async function load_home() {
    let url = 'about.html'
  
    content.innerHTML = await (await fetch(url)).text();
} */
/*
  function load_home (e) {
    (e || window.event).preventDefault();
    var con = document.getElementsByClassName('main-container')[0];
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function (e) { 
      if (xhr.readyState == 4 && xhr.status == 200) {
        con.innerHTML = xhr.responseText;
      }
    }
  
    xhr.open("GET", "about.html", true);
    xhr.setRequestHeader('Content-type', 'text/html');
    xhr.send();

    setTimeout(() => {
        document.getElementById('container').style = 'background:red' //deneme add loader here
    }, 1000);
  }
  */

 

  document.querySelectorAll('.pages ').forEach((el) => {
    
    el.addEventListener('click', function(e) {

    var con = document.getElementsByClassName('main-container')[0];
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function (e) { 
      if (xhr.readyState == 4 && xhr.status == 200) {
        con.innerHTML = xhr.responseText;
      }
    }
  
    xhr.open("GET", e.target.href, true);
    xhr.setRequestHeader('Content-type', 'text/html');
    xhr.send('data=test');

      e.preventDefault()
      
      setTimeout(() => {
        animation();
      }, 100);

    })
    

    })