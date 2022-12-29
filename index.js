const navbarEl = document.querySelector(".navbar");
//i should have immediately thought to select the CSS not the element
const navbarEle = document.getElementById("navbar");
const blogEl = document.getElementById("blog");
const bottomContainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", (event) => {
  //consider if i want window or document events when choosing the DOM event.
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - blogEl.style.marginTop
  ) {
    navbarEle.classList.value = "navbar active";
    //navbarEle.classList.add("active");
    //navbarEl.classList.add("active");
    //navbarEle.className = "navbar active";
  } else {
    navbarEle.classList.value = "navbar";
    //navbarEle.classList.remove("active");
    //navbarEl.classList.remove("active");
    //navbarEle.className = "navbar";
  }
});
