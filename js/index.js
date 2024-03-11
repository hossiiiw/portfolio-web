let mainContainer = document.querySelector(".main-container");
let bottomContainer = document.querySelector(".bottom-container");

// clock element
const hourElem = document.querySelector("#hour");
const minuteElem = document.querySelector("#minute");
const secondElem = document.querySelector("#seconds");
// theme btn
const themeBtn = document.querySelector(".theme-btn");

// navbar list
const navbarItem = document.querySelectorAll(".items");

// social media icons
const icons = document.querySelectorAll(".icon");
const socialInfoModalBox = document.querySelector(".social-card");
const socialIconInfo = document.querySelector(".social-info");
// hire me form
const hireFormModal = document.querySelector("#form-ui");
const hireFormExit = document.querySelector(".exit");
const hireFormNameInput = document.querySelector("#name");
const hireFormPhoneNumberInput = document.querySelector("#phone-number");
const hireFormEmailInput = document.querySelector("#email");
const hireFormSubmitBtn = document.querySelector("#submit-button");
const hireBtn = document.querySelector(".hire-me");
let userInformation = [];

//Scroll Btn
let scrollBtn = document.querySelector(".scroll-btn");
// ---------clock------------
function time() {
  let clock = new Date();
  let hour = clock.getHours();
  let minute = clock.getMinutes();
  let second = clock.getSeconds();
  if (second < 10) {
    secondElem.innerHTML = "0" + second;
  } else {
    secondElem.innerHTML = second;
  }

  if (minute < 10) {
    minuteElem.innerHTML = "0" + minute;
  } else {
    minuteElem.innerHTML = minute;
  }

  if (hour < 10) {
    hourElem.innerHTML = "0" + hour;
  } else {
    hourElem.innerHTML = hour;
  }
}
setInterval(time, 1000);

// -----------change theme-------
let flag = "dark";
themeBtn.addEventListener("click", changeThemeBtn);
function changeThemeBtn() {
  if (flag === "dark") {
    themeBtn.src = "image/icons/month.png";
    document.documentElement.style.setProperty("--mybgcolor", "#fefefe");
    document.documentElement.style.setProperty("--fontColor", "#212121");
    flag = "light";
    setThemeLocalStorage(flag);
  } else {
    themeBtn.src = "image/icons/sun.png";
    document.documentElement.style.setProperty("--mybgcolor", "#212121");
    document.documentElement.style.setProperty("--fontColor", "#fefefe");
    flag = "dark";
    setThemeLocalStorage(flag);
  }
}

// social media event
icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    let dataSetValue = event.target.dataset.info;
    socialInfoModalBox.style.display = "block";
    if (dataSetValue === "linkedin") {
      socialIconInfo.href =
        "https://www.linkedin.com/in/hossein-imani-98a40b1a5/";
      socialIconInfo.innerHTML = "Linkedin";
    } else if (dataSetValue === "instagram") {
      socialIconInfo.href = "https://www.instagram.com/hossiiiw/";
      socialIconInfo.innerHTML = "Instagram";
    } else if (dataSetValue === "github") {
      socialIconInfo.href = "https://github.com/hossiiiw";
      socialIconInfo.innerHTML = "Github";
    } else if (dataSetValue === "telegram") {
      socialIconInfo.href = "https://t.me/Hossiiw";
      socialIconInfo.innerHTML = "Telegram";
    }
  });
  hidden();
});
function hidden() {
  setInterval(() => {
    socialInfoModalBox.style.display = "none";
  }, 5000);
}

// --------------hire me ----------------

hireBtn.addEventListener("click", displayBlock);

function displayBlock(event) {
  event.preventDefault();
  hireFormModal.style.display = "block";
  mainContainer.style.filter = "blur(10px)";
  bottomContainer.style.filter = "blur(10px)";
}

// add to list
hireFormSubmitBtn.addEventListener("click", addUserInfo);
function addUserInfo() {
  event.preventDefault();
  let userName = hireFormNameInput.value;
  let userEmail = hireFormEmailInput.value;
  let userPhonNumber = hireFormPhoneNumberInput.value;
  if (userPhonNumber.length >= 11) {
    let newInfo = {
      id: userInformation.length + 1,
      name: userName,
      email: userEmail,
      number: userPhonNumber,
    };
    userInformation.push(newInfo);
    setUserInfoLocalStorage(userInformation);
    hireFormModal.style.display = "none";
    mainContainer.style.filter = "blur(0)";
    bottomContainer.style.filter = "blur(0)";
  }
}
hireFormExit.addEventListener("click", displayNone);
function displayNone() {
  hireFormModal.style.display = "none";
  mainContainer.style.filter = "blur(0)";
  bottomContainer.style.filter = "blur(0)";
}

// set in localStorage
function setUserInfoLocalStorage(userInfo) {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

// active navbar item
navbarItem.forEach((item) => {
  item.addEventListener("click", () => {
    let preActiveItem = document.querySelector("li.active");
    preActiveItem.classList.remove("active");
    item.classList.add("active");
  });
});
// window title action to user
window.addEventListener("blur", () => {
  document.title = "come back :/";
});

window.addEventListener("focus", () => {
  document.title = "stay here :)";
});

setInterval(() => {
  document.title = "Portfolio";
}, 4000);
let testNum = /^09\d{9}$/;
let example = "09338709245";
if (testNum.test(example)) {
  console.log(example);
} else {
  console.log("not true");
}

//scroll btn function
scrollBtn.addEventListener("click", scrollTop);
function scrollTop() {
  window.scroll(0, 0);
}
