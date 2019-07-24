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

