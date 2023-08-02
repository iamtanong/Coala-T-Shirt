let select_lists = document.querySelectorAll(".select-list");
let my_account = document.querySelector(".my-account")
let purchase_history = document.querySelector(".purchase-history")

select_lists.forEach((select_list, index) => {
    select_list.addEventListener("click", () => {
        select_lists.forEach(e => {
            e.classList.remove("current-list");
        })
        select_list.classList.add("current-list");

        document.querySelectorAll(".current-content").forEach(e => {
            e.classList.remove("current-content");
        })

        if (index === 0) {
            my_account.classList.add("current-content");
        }
        else if (index === 1) {
            purchase_history.classList.add("current-content");
        }
    })
})