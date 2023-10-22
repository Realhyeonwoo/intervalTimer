const zeroFormat = (num) => {
  return num < 10 ? `0${num}` : num;
};

window.onload = function () {
  const nowTime = document.getElementById('nowTime');

  setInterval(() => {
    let dateStr = '';
    dateStr += zeroFormat(new Date().getFullYear());
    dateStr += '-';
    dateStr += (new Date().getMonth() + 1).toString().padStart(2, '0');
    dateStr += '-';
    dateStr += new Date().getDate().toString().padStart(2, '0');
    dateStr += ' ';
    dateStr += new Date().getHours().toString().padStart(2, '0');
    dateStr += ':';
    dateStr += new Date().getMinutes().toString().padStart(2, '0');
    dateStr += ':';
    // dateStr += zeroFormat(new Date().getSeconds());
    dateStr += new Date().getSeconds().toString().padStart(2, '0');

    nowTime.innerText = dateStr;
  }, 1000);

  let TIME = 30 * 60; // 30분
  let backgroundColor = 'white';
  let speedText = 0;
  const timer = document.getElementById('timer');
  const startBtn = document.getElementById('btn_start');
  const stopBtn = document.getElementById('btn_stop');
  const resetBtn = document.getElementById('btn_reset');

  let timerInterval;

  /*
  3min - 4~5
  5min - 6~7
  2min - 8~9
  2min - 6~7
  1min - 10~13
  3min - 6~7
  2min - 8~9
  2min - 6~7
  1min - 10~13
  2min - 6~7
  1min - 10~13
  3min - 4~5
  
  */
  startBtn.addEventListener('click', function () {
    timerInterval = setInterval(() => {
      TIME--;
      if (TIME === -1) {
        clearInterval(timerInterval);
        TIME = 1 * 10;
        backgroundColor = 'white';
        speedText = 0;
        startBtn.classList.remove('hidden');
        stopBtn.classList.add('hidden');
      } else if ((30 - 3) * 60 <= TIME) {
        console.log('30 - 3');
        speedText = 5;
      } else if ((30 - 8) * 60 <= TIME) {
        console.log('30 - 8');
        speedText = 7;
      } else if ((30 - 10) * 60 <= TIME) {
        console.log('30 - 10');
        speedText = 9;
      } else if ((30 - 12) * 60 <= TIME) {
        console.log('30 - 12');
        speedText = 7;
      } else if ((30 - 13) * 60 <= TIME) {
        console.log('30 - 13');
        speedText = 12;
      } else if ((30 - 16) * 60 <= TIME) {
        console.log('30 - 16');
        speedText = 7;
      } else if ((30 - 18) * 60 <= TIME) {
        console.log('30 - 18');
        speedText = 9;
      } else if ((30 - 20) * 60 <= TIME) {
        console.log('30 - 20');
        speedText = 7;
      } else if ((30 - 21) * 60 <= TIME) {
        console.log('30 - 21');
        speedText = 12;
      } else if ((30 - 23) * 60 <= TIME) {
        console.log('30 - 23');
        speedText = 7;
      } else if ((30 - 24) * 60 <= TIME) {
        console.log('30 - 24');
        speedText = 12;
      } else {
        console.log('30 - 27');
        speedText = 5;
      }

      switch (speedText) {
        case 5:
          backgroundColor = 'blue';
          break;
        case 7:
          backgroundColor = 'green';
          break;
        case 99:
          backgroundColor = 'orange';
          break;
        case 12:
          backgroundColor = 'red';
          break;
        default:
          backgroundColor = 'white';
          speedText = 5;
      }
      document.querySelector('.speed_info').style.background = backgroundColor;
      document.querySelector('#timer').style.color = backgroundColor;
      document.querySelector('.timer').style.outlineColor = backgroundColor;
      document.querySelector('#speedNum').innerText = speedText;
      timer.innerText = `${Math.floor(TIME / 60)
        .toString()
        .padStart(2, '0')}:${(TIME - Math.floor(TIME / 60) * 60)
        .toString()
        .padStart(2, 0)}`;
    }, 1000);
    startBtn.classList.toggle('hidden');
    stopBtn.classList.toggle('hidden');
  });

  stopBtn.addEventListener('click', function () {
    console.log('hi2');
    clearInterval(timerInterval);
    startBtn.classList.toggle('hidden');
    stopBtn.classList.toggle('hidden');
  });

  resetBtn.addEventListener('click', function () {
    console.log('hi3');
    TIME = 30 * 60;
    clearInterval(timerInterval);
    timerInterval = undefined;
    timer.innerText = `${Math.floor(TIME / 60)
      .toString()
      .padStart(2, '0')}:${(TIME - Math.floor(TIME / 60) * 60)
      .toString()
      .padStart(2, 0)}`;
    startBtn.classList.remove('hidden');
    stopBtn.classList.add('hidden');
  });
};
