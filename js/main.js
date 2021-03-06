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


  function showLoader(){
  
    document.querySelectorAll('.pages ').forEach((el) => {
    
       el.addEventListener('click', function(e){

        var container = document.getElementsByClassName('main-container')[0];
        var canvas = document.getElementById('canvas');
          
        container.style = 'display:none';
        canvas.style = 'display:none';

        document.querySelectorAll('.dot').forEach((el)=> {
          el.style = 'display:block';
        })

        setTimeout(()=>{
          canvas.style = 'display:block';
          container.style = 'display:grid';

          document.querySelectorAll('.dot').forEach((el)=> {
            el.style = 'display:none';
          });

        }, 2000)

        e.preventDefault();
      })

})
  }

  showLoader();

 

  document.querySelectorAll('.pages ').forEach((el) => {
    
  
    el.addEventListener('click', function(e) {

    
    var con = document.getElementsByClassName('main-container')[0];
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () { 
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
        tagCloud();

      }, 100);

    })
    

    })


    

    /****************/
    /*TAGCLOUD*/
    /****************/

    function tagCloud(){

      var settings = {
        //height of sphere container
        height: 400,
        //width of sphere container
        width: 400,
        //radius of sphere
        radius: 150,
        //rotation speed
        speed: 1,
        //sphere rotations slower
        slower: 0.9,
        //delay between update position
        timer: 5,
        //dependence of a font size on axis Z
        fontMultiplier: 15,
        //tag css stylies on mouse over
        hoverStyle: {
          border : '1px solid #0b2e6f',
          color: '#0b2e6f'
        },
        //tag css stylies on mouse out
        mouseOutStyle: {
            border: 'none',
            color: 'red'
        }
        };
    
        (function(){
          $(document).ready(function(){
            $('#tagcloud').tagoSphere(settings);
        });
        })();

        
    }

    tagCloud();