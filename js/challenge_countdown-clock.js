const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const today = new Date();
  const xmas = new Date("2022-12-25");
  const distance = xmas.getTime() - today.getTime(); // getTime() 메서드는 1밀리초단위로 나타냄

  // distance = milliseconds 단위로 생성되었기 때문에 day hours min sec 로 변형시켜주어야 한다.
  const day = Math.trunc(distance / (1000 * 60 * 60 * 24)); // distance 를 day 단위로 나누기
  const hours = Math.trunc(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); // day 단위로 나눈 distance 의 나머지 값을 hour 단위로 나누기
  const minutes = Math.trunc((distance % (1000 * 60 * 60)) / (1000 * 60)); // hour 단위로 나눈 distance 의 나머지 값을 minute 단위로 나누기
  const seconds = Math.trunc((distance % (1000 * 60)) / 1000); // minute 단위로 나눈 distance 의 나머지 값을 second 로 나누기

  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
