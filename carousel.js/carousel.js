const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const imageList = ["1", "2", "3", "4"];
let index = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-left')) {
            index--;
            if (index < 0) {
                index = imageList.length - 1;
            }
            container.style.backgroundImage = `url("imgs/${imageList[index]}.jpeg")`;
        } else {
            index++;
            if (index === imageList.length) {
                index = 0;
            }
            container.style.backgroundImage = `url("imgs/${imageList[index]}.jpeg")`;
        }
    });
});
