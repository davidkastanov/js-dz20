// Завдання 1

// Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури (наприклад, вліво / вправо)

const getUl = document.querySelector('.gallery')

// const scrollValue = 320;

window.addEventListener('keydown', (event) => {
    console.log(event.code);
    if(event.code === 'ArrowRight') {
        getUl.scrollBy({left: 320, behavior: "smooth"})
    } else if (event.code === 'ArrowLeft') {
        getUl.scrollBy({left:-320, behavior: "smooth"})
    }
})


// Завдання 2

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.



// Кожен створений div:



// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px


// Створи функцію destroyBoxes(), яка очищає div#boxes.


const inputEl = document.querySelector('input');

const renderBtnEl = document.querySelector('[data-action="render"]');

const destroyBtnEl = document.querySelector('[data-action="destroy"]');

const boxesEl = document.querySelector('#boxes');

// console.log(inputEl);
// console.log(renderBtnEl);
// console.log(destroyBtnEl);
// console.log(boxesEl);

function randomRGB() {
    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r}, ${g}, ${b})`;
}

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.
function createBoxes(amount) {
    let sizeBox = 30;
    const box = [];
    for (let i = 1; i <= amount; i += 1) {
        const boxEl = document.createElement('div');
        boxEl.style.backgroundColor = randomRGB();
        boxEl.style.width = sizeBox + 'px';
        boxEl.style.height = sizeBox + 'px';
        box.push(boxEl);
        sizeBox += 10;
    }
    boxesEl.append(...box);

}

renderBtnEl.addEventListener('click', () => {
    const value = Number(inputEl.value);
    if (value > 0) {
        boxesEl.innerHTML = '';
        createBoxes(value);
        inputEl.value = '';
    }
})

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    boxesEl.innerHTML = '';
    inputEl.value = '';
}


