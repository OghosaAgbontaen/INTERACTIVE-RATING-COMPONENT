let selectedRating = 0; 

function selectRating(rating) {
    selectedRating = rating; 
    let buttons = document.querySelectorAll("#rating button");

    
    buttons.forEach(btn => btn.style.backgroundColor = "hsl(213, 19%, 25%)");

    
    buttons[rating - 1].style.backgroundColor = "hsl(25, 97%, 53%)";
}

function submitRating() {
    if (selectedRating === 0) {
        alert("Please select a rating before submitting!");
        return window.location.href = "index.html";
    }

    localStorage.setItem("userRating", selectedRating); 
    window.location.href = "thank-you-page.html"; 
}
