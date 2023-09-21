function filterLP(evt) {
    let input = evt.target.value.toLowerCase();
    let x = document.querySelectorAll(".app");
    x.forEach((item) => {
        if (!item 
            .querySelector("h1")
            .innerHTML.toLocaleLowerCase()
            .includes(input)) 
        {
            item.classList.add("hidden");
        } 
        else 
        {
            item.classList.remove("hidden");
        }
    });
}