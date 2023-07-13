const container = document.querySelector('.container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

console.log(prevBtn);
console.log(nextBtn);

let value = 0;
let time;

prevBtn.addEventListener('click', () => {
    value = value + 60;
    clearTimeout(time);
    update();
});
nextBtn.addEventListener('click', () => {
    value = value - 60;
    clearTimeout(time);
    update();
});

function update() {
    container.style.transform = `perspective(1000px) rotateY(${value}deg)`;
    time = setTimeout(() => {
        value = value - 60;
        update();
    }, 4000)
};

update();