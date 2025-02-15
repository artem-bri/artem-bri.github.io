let p = document.querySelector('.preloader')


window.addEventListener('load', function (){  
    setInterval( () => {
        p.style.display = 'none'
    }, 2635);
  })
  let standarrow = document.querySelector('.standarrow')


  window.addEventListener('scroll', function (){  
   let height = window.innerHeight;
   if (window.scrollY > height){
    standarrow.style.display = 'block';
   }
   else{
    standarrow.style.display = 'none';
   }
  })
