const toggleTextBtn = document.getElementById("toggle-text-btn")
const threeDots = document.getElementById("three-dots")
const fullTextFragment = document.getElementById("full-text-fragment")


toggleTextBtn.addEventListener('click', () => {
    //Change value of toggle div
    
    if(toggleTextBtn.textContent === "Read More"){
        //Add hidden class to three-dots
        threeDots.classList.add('hidden')

        fullTextFragment.classList.remove('hidden')

        //Change value of div to "Read Less"
        toggleTextBtn.textContent = "Read Less"
    } else if(toggleTextBtn.textContent === "Read Less"){
        threeDots.classList.remove('hidden')

        fullTextFragment.classList.add('hidden')

        //Change value of div to "Read Less"
        toggleTextBtn.textContent = "Read More"

    }
})