function fd() {
    const g4box = document.querySelector('.game-4__box')
    const g4conteiner = document.querySelector('.game-4__conteiner')
    const g4 = document.querySelector('.b')
    const g43 = document.querySelector('.a')
    const g433 = document.querySelector('.g')
    let adaptive = 270
    if(Number(window.innerWidth) + 0 <= 833 ){
        adaptive = 500
        console.log(window.innerWidth);
    }
    if(Number(window.innerWidth) + 0 <= 610) {
        adaptive = 270 
        console.log(window.innerWidth);
    }
    g4conteiner.style.width = adaptive +'px'
            g4conteiner.addEventListener('click',event => {



                console.log(event);
        let a
        let b
        if (!window.screenLeft && adaptive >= 720 ) {
            a = event.screenLeft = event.screenX;
             b = event.screenTop = event.screenY;
          g4box.style.left = a - 615 + 'px'
          g4box.style.top = b - 790 + 'px'
          console.log(a,b)
        }
        
      else if (!window.screenLeft && adaptive >= 500 ) {
            a = event.screenLeft = event.screenX;
             b = event.screenTop = event.screenY;
          
          g4box.style.left = a - 425 + 'px'
          g4box.style.top = b - 750 + 'px'
          console.log(a,b)
      }

      else if (!window.screenLeft && adaptive >= 270 ) {
        a = event.screenLeft = event.screenX;
         b = event.screenTop = event.screenY;
        g433.textContent = a + ' ' + b
      g4box.style.left = a - +g4.value + 'px'
      g4box.style.top = b - +g43.value + 'px'
      console.log(a,b)
  }
        })
    }


fd()