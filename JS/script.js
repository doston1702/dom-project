console.warn("Не обращайте внимание на ошибки, это из-за шрифтов");

let color_btn = document.querySelector('.choose-color').children        //Выбираю две кнопки через их родителя
let image_box = document.querySelector('.image-box').children       //Выбираю два image через их родителя
let blue_btn = document.querySelector('.blue-btn')          //Первая кнопка
let grey_btn = document.querySelector('.grey-btn')          //Вторая кнопка
let product_color = document.querySelector('.product-color')

blue_btn.onclick = ()=>{
    for (let item of color_btn) {
        item.classList.toggle('blue-btn')
        item.classList.toggle('grey-btn')
    }
    for (let item of image_box) {
        item.classList.toggle('d-none')
    }
    if (product_color.innerHTML == "White") {
        product_color.innerHTML = "Space Grey"
    } else if (product_color.innerHTML == "Space Grey") {
        product_color.innerHTML = "White"
    }
}
grey_btn.onclick = ()=>{
    for (let item of color_btn) {
        item.classList.toggle('blue-btn')
        item.classList.toggle('grey-btn')
    }
    for (let item of image_box) {
        item.classList.toggle('d-none')
    }
    if (product_color.innerHTML == "White") {
        product_color.innerHTML = "Space Grey"
    } else if (product_color.innerHTML == "Space Grey") {
        product_color.innerHTML = "White"
    }
}

//Тут анимация нижних кнопок(изменение денег при нажатии на кнопок)
let m_price = document.querySelector('.product-price').lastElementChild     //Выбрал деньги в html чтобы в дальнейшем их изменить
let first_price = parseFloat(m_price.innerHTML.replace(/,/gi, ''))         //А тут значение денег в виде js чисел(для математических действий)
let btn1 = document.querySelector('#btn-1')     //Выбрал первую кнопку
let btn2 = document.querySelector('#btn-2')     //Выбрал вторую кнопку и деньги
let b2_money = parseFloat(btn2.lastElementChild.lastElementChild.innerHTML.replace(/,/gi, ''))
let btn3 = document.querySelector('#btn-3')     //Выбрал третью кнопку и деньги
let b3_money = parseFloat(btn3.lastElementChild.lastElementChild.innerHTML.replace(/,/gi, ''))
let btn4 = document.querySelector('#btn-4')     //Выбрал четвёртую кнопку и деньги
let b4_money = parseFloat(btn4.lastElementChild.lastElementChild.innerHTML.replace(/,/gi, ''))

btn1.onclick = ()=>{
    btn1.classList.add('active-memory')
    btn2.classList.remove('active-memory')
    btn3.classList.remove('active-memory')
    btn4.classList.remove('active-memory')
    m_price.innerHTML = (first_price).toString().replace(/1/, '1,')
}
btn2.onclick = ()=>{
    btn1.classList.remove('active-memory')
    btn2.classList.add('active-memory')
    btn3.classList.remove('active-memory')
    btn4.classList.remove('active-memory')
    m_price.innerHTML = (first_price + b2_money).toString().replace(/2/, '2,')
}
btn3.onclick = ()=>{
    btn1.classList.remove('active-memory')
    btn2.classList.remove('active-memory')
    btn3.classList.add('active-memory')
    btn4.classList.remove('active-memory')
    m_price.innerHTML = (first_price + b3_money).toString().replace(/2/, '2,')
}
btn4.onclick = ()=>{
    btn1.classList.remove('active-memory')
    btn2.classList.remove('active-memory')
    btn3.classList.remove('active-memory')
    btn4.classList.add('active-memory')
    m_price.innerHTML = (first_price + b4_money).toString().replace(/3/, '3,')
}

//Тут я поработал с модальным окном
let price = document.querySelector('.product-price')
let podskazka = document.querySelector('.buy-win')
let modal_win = document.querySelector('.modal-win')
let cross = document.querySelector('.modal-cross')

price.onmouseover = ()=>{
    setTimeout(() => {
        podskazka.classList.add('active')
        podskazka.classList.remove('not-active')
    }, 700);
}
price.onmouseout = ()=>{
    setTimeout(() => {
        podskazka.classList.remove('active')
        podskazka.classList.add('not-active')
    }, 700);
}

price.ondblclick = ()=>{
    modal_win.classList.add('active')
    modal_win.classList.remove('not-active')
    podskazka.classList.add('not-active')
}
cross.onclick = ()=>{
    modal_win.classList.remove('active')
    modal_win.classList.add('not-active')
}