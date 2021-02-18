const status = document.querySelector('h2'),
  btn = document.querySelector('#btn'),
  quan = document.querySelector('.quan');
let timer,
  x = 5;

window.onselectstart

btn.addEventListener('click', () => {
  let quanScore = parseInt(quan.textContent);
  quanScore++;
  quan.textContent = quanScore;
});

btn.onkeydown = function (e) {
  if (e.keyCode == 32 || e.keyCode == 13) {
    e.stopPropagation();
    return false
  }
};

function countDown() {
  status.innerHTML = x;
  x--;
  if (status.innerHTML = x) {
    btn.onclick = null;
  }

  if (x < 0) {
    clearTimeout(timer);
    status.innerHTML = "Game over";
    btn.disabled = true;
  }
  else {
    timer = setTimeout(countDown, 1000);
  }
};

btn.onclick = countDown;