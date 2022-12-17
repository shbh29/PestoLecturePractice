document.querySelector(".MyTable").addEventListener("click", function(event){
    if (event.target.tagName.toLowerCase() == "td") {
        console.log(event.target.textContent)
    }
});