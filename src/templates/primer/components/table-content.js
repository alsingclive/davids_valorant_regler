const hiddenTableContentItem = document.querySelectorAll(".offset-table-content-item");
const revealTableContentBtn = document.getElementById("table-content-reveal-button");

revealTableContentBtn.addEventListener("click", revealListItems);

function revealListItems() {
    hiddenTableContentItem.forEach(listItem => {
        
        listItem.classList.remove("hidden");
    })
    revealTableContentBtn.classList.add("hidden");
}