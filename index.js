let powerBtn1 = document.getElementById("power-btn1");
let powerBtn2 = document.getElementById("power-btn2");
let phoneOn = document.getElementById("phone-off");
let Unlock = document.getElementById("Unlock-iphone");
let page = document.getElementById("page1");
let pageMenu = document.getElementById("menu-page");
let unLockPage = document.getElementById("unlock");
let display = document.getElementById("display");



powerBtn1.addEventListener("click", () => {
  phoneOn.style.display = "none";
  powerBtn1.style.display = "none";
  powerBtn2.style.display = "block";
});
powerBtn2.addEventListener("click", () => {
  phoneOn.style.display = "block";
  powerBtn1.style.display = "block";
  powerBtn2.style.display = "none";
});

phoneOn.addEventListener("click", () => {
  phoneOn.style.display = "none";
})

Unlock.addEventListener("click", () => {
  page.style.display = "none";
  unLockPage.style.display = "block";
});

let btn = document.querySelectorAll("#btn");

btn.forEach((b) => {
  b.addEventListener("click", (e) => {
    console.log("clicked");
    console.log(e.target.innerText);
    display.innerText += e.target.innerText;

    let password = 222444;

    if (display.innerText == password) {
      pageMenu.style.display = "block";
      unLockPage.style.display = "none";
    } else {
      setTimeout(() => {
        display.innerText = "Inccorect Password";
      }, 10000);
    }
  });
});
