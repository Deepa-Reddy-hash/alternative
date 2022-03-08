
function carimage(selector)
{
  const self = {
    element: document.querySelector(selector),

    img : () =>{
        self.element.style.display = $('.postentry img').attr('src' , './assets/ezgif-5-a6aac247e7.gif');
    }
   
  }

  return self
}


