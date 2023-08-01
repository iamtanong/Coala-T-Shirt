let sign_in_btn = document.querySelector(".sign-in-btn");
let sign_up_btn = document.querySelector(".sign-up-btn");

let sign_in_form = document.querySelector(".sign-in-form")
let sign_up_form = document.querySelector(".sign-up-form")

let sign_in_mode = document.querySelector(".sign-in-mode")
let sign_up_mode = document.querySelector(".sign-up-mode")

sign_in_btn.addEventListener("click", () => {
    sign_up_form.classList.remove("current-form");
    sign_in_form.classList.add("current-form");

    sign_up_mode.classList.remove("current-mode")
    sign_in_mode.classList.add("current-mode")
})

sign_up_btn.addEventListener("click", () => {
    sign_in_form.classList.remove("current-form");
    sign_up_form.classList.add("current-form");

    sign_in_mode.classList.remove("current-mode")
    sign_up_mode.classList.add("current-mode")
})
