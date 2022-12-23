const openEye = document.querySelector(".open");
const closeEye = document.querySelector(".close");
const button = document.querySelector("button");


button.addEventListener('click', () => {
    if (closeEye.classList.contains("active")){
        closeEye.classList.remove("active");
        openEye.classList.add("active");
    }
    else{
        openEye.classList.remove("active");
        closeEye.classList.add("active");
    }
})