let menu = document.querySelectorAll('.menu')[0],
    menuLi = document.createElement('li'),
    menuItem = document.querySelectorAll('.menu-item');
    title = document.querySelectorAll('#title')[0],
    adv = document.getElementsByClassName('adv')[0],
    prompts = document.querySelector('#prompt');


menu.insertBefore(menuItem[2],menuItem[1]);

menuLi.classList.add('menu-item');
menuLi.textContent = 'Пятый элемент';
menu.appendChild(menuLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = "Мы продаем только подлинную технику Apple";
adv.remove();

let questionApple = prompt("Ваше отношение к технике apple?");
prompts.textContent = questionApple;

