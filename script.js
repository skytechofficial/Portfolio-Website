const circle = document.querySelector(".mini-circle");
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
function getTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Format time as hh:mm AM/PM
    return hours + ':' + minutes + ' ' + ampm;
}

console.log(getTime()); // Example output: "10:55 PM"

const date = new Date();
let Year = date.getFullYear();
let Time = date.getTime()
let year = document.querySelector(".year").innerHTML = `&copy; ${Year}`
let time = document.querySelector(".time").innerHTML = `${getTime()} EST`
let timeout;
const circleChaptaKaro = () => {
  let xScale = 1;
  let yScale = 1;
  let xPrevious = 0;
  let yPrevious = 0;
  window.addEventListener("mousemove", (dets) => {
    this.clearTimeout(timeout);
    let xdiff = dets.clientX - xPrevious;
    let ydiff = dets.clientY - yPrevious;
    xScale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yScale = gsap.utils.clamp(0.8, 1.2, ydiff);
    xPrevious = dets.clientX;
    yPrevious = dets.clientY;

    circleMouseFollower(xScale, yScale);
    let timer = setTimeout(() => {
      circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xScale},${yScale})`;
    }, 100);
  });
};
const firstPageAnime = () => {
  let tl = gsap.timeline();
  tl.from("nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.ease,
  })
    .to(".bounding-elem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -0.1,
      stagger: 0.2,
    })
    .from(".hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -0.1,
      ease: Expo.easeInOut,
    });
};
const circleMouseFollower = (xScale, yScale) => {
  window.addEventListener("mousemove", (dets) => {
    circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xScale},${yScale})`;
  });
};

const imageHoverEffect = () => {
document.querySelectorAll(".elem").forEach((elem) => {
  let rotate = 0;
  let diffrot = 0;

  elem.addEventListener("mousemove", (dets) => {
    let diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
    });
  });
  elem.addEventListener("mouseleave", (dets) => {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration:.5,
    });
  });
});
};

circleMouseFollower();
firstPageAnime();
circleChaptaKaro();
imageHoverEffect();
