function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const init = () => {
    const avatar = document.querySelector('#avatar');
    const coin = document.querySelector('#coin');

    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;
    const coinOffset = coin.width;

    moveCoin(maxWidth, maxHeight, coinOffset)

    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50, maxHeight, avatar.height)
        }
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50, maxHeight, avatar.height)
        }
        if(e.key === 'ArrowLeft' || e.key === 'Left'){
            moveHorizontal(avatar, -50, maxWidth, avatar.width)
            avatar.style.transform = 'scale(-1,1)'
        }
        if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveHorizontal(avatar, 50, maxWidth, avatar.width)
            avatar.style.transform = 'scale(1,1)'
        }
        
        if(isTouching(avatar, coin)){
            moveCoin(maxWidth, maxHeight, coinOffset)
        }
    });
};

const moveVertical = (element, amount, winHeight, offset) => {
  const currTop = extractPos(element.style.top);
  if(currTop + amount < winHeight - offset && currTop + amount >= 0){
      element.style.top = `${currTop + amount}px`;
  }
};

const moveHorizontal = (element, amount, winWidth, offset) => {
  const currLeft = extractPos(element.style.left);
  if(currLeft + amount < winWidth - offset && currLeft + amount >= 0 ){
      element.style.left = `${currLeft + amount}px`;
  }
};

const extractPos = (position) => {
  if (!position) return 100;
  return parseInt(position.slice(0, -2));
};

const moveCoin = (winWidth, winHeight, offset) => {
    const x = Math.floor(Math.random() * (winWidth - offset));
    const y = Math.floor(Math.random() * (winHeight - offset));
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
};

init();
