const hd = document.querySelector(".hd");
const hamBtn = document.querySelector(".hamBtn");
const gnb = document.querySelector(".gnb_wrap");

hamBtn.addEventListener("click", (e) => {
  let target = e.target;
  target.classList.toggle("on");
  gnb.classList.toggle("on");
  hd.classList.toggle("on");
});

function scrollEvent() {
  const ImgCon = document.querySelector(".fixedContent.section2");
  let scroll = window.innerHeight + window.scrollY;
  const Img = document.querySelector(
    ".fixedContent.section2 .contentRight img"
  );
  let ImgHeight = ImgCon.offsetTop;
  if (ImgHeight < scroll) {
    Img.classList.add("on");
  }
}
function scrollEventBootom() {
  const ImgCon = document.querySelector(".contentWrap.section5");
  const Img = document.querySelector(".contentWrap.section5 .contentLeft img");
  let scroll = window.innerHeight + window.scrollY;
  let ImgHeight = ImgCon.offsetTop;

  if (ImgHeight < scroll) {
    Img.classList.add("on");
  }
}
function scrollEventStar() {
  const section = document.querySelector(".section6");
  let scroll = window.innerHeight + window.scrollY;
  let sectionHeight = section.offsetTop;
  if (sectionHeight < scroll) {
    section.classList.add("night");
  } else {
    section.classList.remove("night");
  }
}
window.addEventListener("scroll", function () {
  scrollEvent();
  scrollEventBootom();
  scrollEventStar();
});

// 슬라이드 구현

// DOM 변수에 담기
const slideCon = document.querySelector(".slideList");
const slide = document.querySelectorAll(".slideCard");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

// Card 개별 DOM 변수담기
let list1 = document.querySelector(".slideCard:nth-of-type(1)");
let list2 = document.querySelector(".slideCard:nth-of-type(2)");
let list3 = document.querySelector(".slideCard:nth-of-type(3)");
let list4 = document.querySelector(".slideCard:nth-of-type(4)");

// 초기값
let currentIndex = 0;
let slideCount = slide.length;
let slideWidth = slide[0].offsetWidth;

// 이전 버튼 클릭 시

const prevBtnFun = () => {
  list1 = document.querySelector(".slideCard:nth-of-type(1)");
  list2 = document.querySelector(".slideCard:nth-of-type(2)");
  list3 = document.querySelector(".slideCard:nth-of-type(3)");
  list4 = document.querySelector(".slideCard:nth-of-type(4)");
  list2.style.cssText = `transform:scale(1.1); z-index:1; `;
  list3.style.cssText = `transform:scale(1); z-index:0; `;

  slideCon.style.cssText = `margin-left: -${slideWidth}px; transition:0.3s`;
  list2.style.cssText = `transform:scale(1); z-index:0; transition:0.5s`;
  list3.style.cssText = `transform:scale(1.1); z-index:1; transition: transform 0.5s, z-index 0s`;

  setTimeout(() => {
    slideCon.appendChild(slideCon.firstElementChild);
    slideCon.style.cssText = `margin-left:0px;`;
  }, 0);
};
const nextBtnFun = () => {
  slideCon.prepend(slideCon.lastElementChild);
  list1 = document.querySelector(".slideCard:nth-of-type(1)");
  list2 = document.querySelector(".slideCard:nth-of-type(2)");
  list3 = document.querySelector(".slideCard:nth-of-type(3)");
  list4 = document.querySelector(".slideCard:nth-of-type(4)");
  list2.style.cssText = `transform:scale(1.1); z-index:1; transition: transform 0.5s, z-index 0s`;
  list3.style.cssText = `transform:scale(1); z-index:0;  transition: transform 0.3s, z-index 0s`;
  slideCon.style.cssText = `margin-left: -${slideWidth}px; transition:0`;

  setTimeout(() => {
    slideCon.style.cssText = `margin-left:0px;`;
  }, 0);
};

prevBtn.addEventListener("click", prevBtnFun);
nextBtn.addEventListener("click", nextBtnFun);
