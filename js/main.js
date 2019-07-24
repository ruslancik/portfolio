var element = document.querySelectorAll('.anime').forEach(function(el){
    el.addEventListener('mouseenter', function(e){
        e.target.classList.add('animated', 'rubberBand');
        e.target.style='color:#08fdd8';
        e.preventDefault();
    })
})

function removeAnime(){
    document.querySelectorAll('.anime').forEach(function(e){
        e.classList.remove('animated', 'rubberBand');
    })
}
removeAnime();