const progress = document.querySelector("#progress");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const circles = document.querySelectorAll(".circle")

let i = 1;

// Next Button 
nextBtn.addEventListener("click",() => {
    i++;
    if (i > circles.length){
        i = circles.length;
    }
    change()
})
// Prev Button
prevBtn.addEventListener("click",() => {
    i--;
    if ( i < 1){
        i = 1;
    }
    change()
})


function change(){
    circles.forEach((circle, index) => {

        // FOR BORDER CHANGE
        if ( index < i){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }

        // FOR LINE CHANGES
        const actives = document.querySelectorAll(".active")
        
        // calculation
        const progressWidth = (actives.length -1) /(circles.length - 1) * 100 + "%"
        progress.style.width = progressWidth;


        // FOR BUTTONS DISIABLE AND ENABLE
        if ( i === 1){
            prevBtn.disabled = true;
        }
        else if( i === circles.length){
            nextBtn.disabled = true;
        }
        else{
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    })
}