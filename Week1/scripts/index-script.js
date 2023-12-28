const linkAnimations = document.querySelectorAll(".anchorLink");

linkAnimations.forEach(function (linkAnimation) {
  linkAnimation.addEventListener("mouseover", function () {
    linkAnimation.style.color = "#fdfdfd";
    linkAnimation.style.backgroundColor = "#010101";
  });

  linkAnimation.addEventListener("mouseout", function () {
    linkAnimation.style.color = "#010101";
    linkAnimation.style.backgroundColor = "#ffc300";
  });
});

const resumeButton = document.getElementById("resume-button");

resumeButton.addEventListener("mouseover", function () {
    resumeButton.style.color = "#010101";
    resumeButton.style.backgroundColor = "#ffc300";
});

resumeButton.addEventListener("mouseout", function () {
    resumeButton.style.color = "#fdfdfd";
    resumeButton.style.backgroundColor = "#010101";
});