let submitBtn = document.getElementById("submitBtn");
let checkBox = document.getElementById("checkbox");
let trialBox = document.getElementsByClassName("trial-block")[0]
let hideBox = document.getElementsByClassName("hideBox")[0]
hideBox.style.display = "none";


function tickBox() {
    console.log("tickkkkk the boxxxxx")

    if (checkBox.checked === true) {
        submitBtn.classList.remove("disabled")
    } else {
        submitBtn.classList.add("disabled")
        submitBtn.disabled = true;
    }

}

function submitSelfie() {
    if (confirm("Are you sure you want to submit?") == true) {
        trialBox.style.display = "none"
        console.log("confirm giup minh")
        hideBox.style.display = "block"
    }
}