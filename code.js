document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type   : 'loop',
        drag   : 'free',
        heightRatio: 0.5,    
        fixedWidth: 300,      
        fixedHeight: 100, 
        autoplay: true,  
        interval: 1000,      
        arrows: false,   
        pagination: false, 
        cover: true,        
        focus: 'center',   
        isNavigation: false,  
        pauseOnHover: true,
    }).mount();
});