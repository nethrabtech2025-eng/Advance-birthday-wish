const surpriseBtn = document.getElementById("surpriseBtn");

const surprise = document.getElementById("surprise");


surpriseBtn.addEventListener("click", function () {

    surprise.classList.add("show");

    surpriseBtn.style.display = "none";

});