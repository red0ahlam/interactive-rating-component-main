
const star_number = document.querySelectorAll('.star-number');
const submit_btn = document.querySelector('.submit-button');
const thank_you_component = document.querySelector('.thank-you-component');
const selected = document.getElementById("selected");
const error = document.querySelector('.error');

function pressed(e) {
    for (let i = 0; i < star_number.length; i++) {
        if (star_number[i] == e.target) {
            star_number[i].setAttribute("aria-pressed", "true");
            selected.innerHTML = i+1;
        } else {
            star_number[i].setAttribute("aria-pressed", "false");
        }
    }
}

function checkPressed() {
    for (let i = 0; i < star_number.length; i++) {
        if (star_number[i].getAttribute("aria-pressed") == 'true') {
            return true;
        }
    }
    return false;
}

for (let i = 0; i < star_number.length; i++) {
    star_number[i].addEventListener("click", pressed);
}

submit_btn.addEventListener("click", () => {
    
      if (checkPressed()) {
        thank_you_component.classList.remove("display");
    } else {
        error.classList.remove("display");
    }
})
