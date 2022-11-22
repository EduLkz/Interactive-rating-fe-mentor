var rateValue = 0;
const rateButtons = document.getElementsByClassName("rating-button");

function setRateValue(value){
    rateValue = value;
    console.log(value);
    
    for (let index = 0; index < rateButtons.length; index++) {
        if(index == (value - 1)){
            rateButtons[value - 1].classList.add("highlight-rate");
            rateButtons[value - 1].classList.remove("rating-value");
        }else{
            rateButtons[index].classList.add("rating-value");
            rateButtons[index].classList.remove("highlight-rate");
        }
        
    }
}

function giveRating(){
    if(rateValue == 0){
        alert("You need to choose a value before submit");
        return;
    }
    const rateText = document.getElementById("rate-value");
    
    rateText.textContent = rateValue.toString();

    const ratingDiv = document.getElementById("rating-wrapper");
    const ratedDiv = document.getElementById("rated-wrapper");

    ratingDiv.className = "hidden";
    ratedDiv.className = "shown";
}