const logo = document.getElementById("logo");
logo.addEventListener("mouseover", function () {
    logo.style.color = "#fdfdfd";
});

logo.addEventListener("mouseout", function () {
    logo.style.color = "#010101";
});

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

const skillsGrid = document.querySelectorAll(".skills-grid");

skillsGrid.forEach(function (skillsGrid) {
  skillsGrid.addEventListener("mouseover", function () {
    skillsGrid.style.boxShadow = "5px 5px 5px 5px #9096f1";
  });

  skillsGrid.addEventListener("mouseout", function () {
    skillsGrid.style.boxShadow = "5px 5px 5px 3px #333333";
  });
});