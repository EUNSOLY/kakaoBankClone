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
  let scroll = window.innerHeight + window.scrollY - 400;
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
