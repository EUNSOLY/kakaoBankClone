const hd = document.querySelector(".hd");
const hamBtn = document.querySelector(".hamBtn");
const gnb = document.querySelector(".gnb_wrap");

hamBtn.addEventListener("click", (e) => {
  let target = e.target;
  target.classList.toggle("on");
  gnb.classList.toggle("on");
  hd.classList.toggle("on");
});
