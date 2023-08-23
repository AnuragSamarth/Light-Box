// Function to include html popup code.

function includepopupHTML() {
  let html =
    '<div id="vis-popup"><span id="close" onclick="closePopUp()"><img id="npop" src="/img/Cross img.jpg" alt="image not found"></span><img id="leftarrow" src="/img/arrow-pointing-to-the-left-inside-a-circle-outline_318-35631.webp" alt="image not found"><img id="rightarrow" src="/img/rightarrow.jpg" alt="image not found"><img id="mainpopimg" src="/img/wallpaperflare.com_wallpaper (10).jpg" alt="image not found"></div>';

  let popdiv = document.createElement("div");
  popdiv.innerHTML = html;
  document.body.insertBefore(popdiv, document.body.firstChild);
}

let img;
let current;

// Function to init plugin
function imagepopupInit(target) {
  //select all images with class target
  img = document.getElementsByClassName(target);

  // add event listner on all selected images
  for (let i = 0; i < img.length; i++) {
    //add pointer
    img[i].style.cursor = "pointer";

    //add event listner
    img[i].addEventListener("click", function () {
      document.getElementById("mainpopimg").src = this.src;
      document.getElementById("vis-popup").style.display = "block";
      checkArrow();
    });
  }

  includepopupHTML();

  //next button
  document.getElementById("rightarrow").addEventListener("click", function () {
    nextimg();
  });

  //prev button
  document.getElementById("leftarrow").addEventListener("click", function () {
    previmg();
  });
}

//close button

function closePopUp() {
  document.getElementById("mainpopimg").src = "";
  document.getElementById("vis-popup").style.display = "none";
}

//next image
function nextimg() {
  getCurrentImg();
  current++;
  document.getElementById("mainpopimg").src = img[current].src;
  checkArrow();
}
//prev image
function previmg() {
  getCurrentImg();
  current--;
  document.getElementById("mainpopimg").src = img[current].src;
  checkArrow();
}

function getCurrentImg() {
  for (let i = 0; i < img.length; i++) {
    if (img[i].src == document.getElementById("mainpopimg").src) {
      current = i;
    }
  }
}

function checkArrow() {
  getCurrentImg();
  if (current == "0") {
    document.getElementById("leftarrow").style.display = "none";
  } else if (current == img.length - 1) {
    document.getElementById("rightarrow").style.display = "none";
  } else {
    document.getElementById("leftarrow").style.display = "block";
    document.getElementById("rightarrow").style.display = "block";
  }
}
