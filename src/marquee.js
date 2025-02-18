function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
  
    if (selector === '.marquee--right') {
    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
        }

        else {
            setInterval(function () {
                firstElement.style.marginLeft = `${i}px`;
                if (i > firstElement.clientWidth) {
                  i = 0;
                }
                i = i + speed;
              }, 0);
        }
  }
  
  //after window is completed load
  //1 class selector for marquee
  //2 marquee speed 0.2

  setTimeout(() => {
    window.addEventListener('load', Marquee('.marquee--right', 0.2))

  }, 100)

  setTimeout(() => {
    window.addEventListener('load', Marquee('.marquee--left', 0.2))

  }, 100)
  