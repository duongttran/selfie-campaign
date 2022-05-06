let submitBtn = document.getElementById("submitBtn");

let checkBox = document.getElementById("checkbox");

let trialBox = document.getElementsByClassName("trial-block")[0]

function tickBox() {
    console.log("heyeerera")

    if (checkBox.checked === true) {
        submitBtn.classList.remove("disabled")
    } else {
        submitBtn.classList.add("disabled")
        submitBtn.disabled = true;

    }
}

function submitSelfie() {
    if (confirm("are u sure to submit?") == true) {
        trialBox.style.display = "none"
        console.log("confirm giup minh")
    }
}