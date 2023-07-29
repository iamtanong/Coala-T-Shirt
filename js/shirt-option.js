let next_step_btn = document.getElementById("next-step-btn");
let prev_step_btn = document.getElementById("prev-step-btn");

prev_step_btn.addEventListener("click", () => {
    show_part(1);
})
next_step_btn.addEventListener("click", () => {
    show_part(2);
})

let option_parts = document.querySelectorAll(".option-part");

function show_part(id) {
    option_parts.forEach(option_part => {
        option_part.classList.remove("current-part");
    })

    document.getElementById(`step-${id}`).classList.add("current-part");
}

{
    function show_section(id) {
        document.querySelectorAll('.form-section').forEach(e => {
            e.classList.remove('current-part');
        });

        document.querySelector('#part-' + id).classList.add('current-part');
    }

    function update_step(id) {
        document.querySelectorAll(".form-progress-step").forEach(e => {
            e.classList.remove("current-step")
        })


        document.querySelector("#step-" + id).classList.add("current-step")
    }

    function validationCurrentSection() {
        // let current_part = document.querySelector(".form.current")
    }

    if (localStorage.getItem("sign_mode")) {
    }
    else {
        localStorage.setItem("sign_mode", "mode0")
    }
    // switch_sign_mode(localStorage.getItem("sign_mode"))

    function switch_sign_click() {
        var sign_mode = localStorage.getItem("sign_mode")
        if (sign_mode == "mode0") {
            sign_mode = "mode1"
        }
        else {
            sign_mode = "mode0"
        }

        localStorage.setItem("sign_mode", sign_mode)
        switch_sign_mode(sign_mode)
    }

    function switch_sign_mode(mode) {
        let sign_up = document.getElementById("multi-part")
        let sign_in = document.getElementById("sign-in-form")
        let greeting = document.getElementById("greeting")
        let sign_in_btn = document.getElementById("sign-in-btn")

        if (mode == "mode0") {
            sign_in.classList.remove("sign-here")
            sign_up.classList.add("sign-here")
            greeting.innerText = "Welcome!"
            sign_in_btn.innerText = "Sign in"
        }
        else {
            sign_up.classList.remove("sign-here")
            sign_in.classList.add("sign-here")
            greeting.innerText = "Welcome Back!"
            sign_in_btn.innerText = "Sign up"
        }
    }
}
