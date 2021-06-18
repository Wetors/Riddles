let arr = [{riddle: 'Летает без крыльев, плачет без глаз.', answer: 'туча', img: 'cloud.png', re: true},
          {riddle: 'В Полотняной стране По реке Простыне Плывет пароход То назад, то вперед, А за ним такая гладь — Ни морщинки не видать.', answer: 'утюг', img: 'iron.png', re: true},
          {riddle: 'Речка спятила с ума — По домам пошла сама.', answer: 'водопровод', img: 'waterSupply.png', re: true},
          {riddle: 'Ах, не трогайте меня: Обожгу и без огня!', answer: 'крапива', img: 'nettle.png', re: true},
          {riddle: 'Я шариком пушистым белею в поле чистом, а дунул ветерок — остался стебелек.', answer: 'одуванчик', img: 'dandelion.png', re: true},
          {riddle: 'Встал пятнистый Великан,Как большой подъёмный кран!', answer: 'жираф', img: 'giraffe.png', re: true},
          {riddle: 'Мужички без топоровРубят избу без углов.', answer: 'муравей', img: 'ant.png', re: true},
          {riddle: 'Кто на ёлке, на суку Счёт ведёт: "ку-ку, ку-ку"?', answer: 'кукушка', img: 'cuckoo.png', re: true},
          {riddle: 'Как колючий колобок В этом домике зверёк Его в руки не возьмёшь Потому что это — ...', answer: 'ёж', img: 'hedgehog.png', re: true},
          {riddle: 'Четыре ноги, пятый хвост, шестая грива.', answer: 'лошадь', img: 'horse.png', re: true}
];

let elem = document.querySelector('#tx');
let see;
let im = document.querySelector('img');
let life = 3;
let check = true;
let word;
let num;
let val;
let elem1 = document.querySelector('#par');
let vin = 0;

// Проверяет ответ
elem.addEventListener('keydown', function(e){
    console.log(e.keyCode);
    if(e.keyCode === 13){
       see = elem.value;
           if(see === word){
              im.src = 'image/' + imag;
              check = false;
              arr[num].re = false;
              vin++;
           }
       if(check){
           life--;
           chik()
       }
       winner()
       check = true;
       console.log(life);
       end()
       elem.value = '';
    }
    
})

let add;
let imag
function restart(){
    num = Math.floor(Math.random() * 9) + 1
    if(arr[num].re == false){
       restart();
    }
    word = arr[num].answer;
    val = arr[num].riddle;
    imag = arr[num].img;
    add = document.createTextNode(val);
    console.log(word);
    elem1.appendChild(add);  
}

function chik(){
    let hearts = document.getElementsByClassName('hearts')
    hearts[life].src = 'image/heart2.png';
    console.log(hearts);
}


let c = 0;
let h = 0;

let img1 = document.getElementsByTagName('img')[4];

img1.onmouseover = function(e){
    e.target.src = 'image/pngwing.com.png';
    console.log(c++);
}

img1.onmouseout = function(e){
    e.target.src = 'image/pngwing.com3.png';
    console.log(h++);
}

img1.addEventListener('click', function(e){
    elem1.removeChild(add);
    im.src = 'kisspng-t-shirt-hoodie-question-mark-question-mark-5ac33a72180f20.1355673715227439220986.png';
    restart();
})

function end(){
    if(life <= 0){
        document.write('');
        let but = document.createElement('h1');
        let txt = document.createTextNode('End Game');
        but.appendChild(txt);
        document.appendChild(but);
    }
}

function winner(){
    if(vin === 10){
        document.write('Winner');
    } 
}

restart()































