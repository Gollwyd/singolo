document.addEventListener('scroll', onScroll);


function onScroll (event) {
    let curs = window.scrollY;
    let links = document.querySelectorAll('.link');
    let divs = document.querySelectorAll('.scroll');

    divs.forEach((el)=> {
        if(el.offsetTop-80 <= curs && (el.offsetTop + el.offsetHeight) > curs) {
            links.forEach(a => {
                a.classList.remove('active');
                if(el.getAttribute('id') == a.getAttribute('href').substring(1)) {
                    a.classList.add('active'); console.log('done');
                }

            });
        }





    });
}



document.querySelector('nav div').addEventListener('click', function(e) {
    
   
    e.preventDefault();
      

});

document.querySelectorAll('.link')[0].addEventListener('click', function(e) {
    window.scrollTo(0, 0);
   
});
document.querySelectorAll('.link')[1].addEventListener('click', function(e) {
    window.scrollTo(0, 640);
});
document.querySelectorAll('.link')[2].addEventListener('click', function(e) {
    window.scrollTo(0, 1140);
});
document.querySelectorAll('.link')[3].addEventListener('click', function(e) {
    window.scrollTo(0, 2000);
});
document.querySelectorAll('.link')[4].addEventListener('click', function(e) {
    window.scrollTo(0, 2720);
});






// А теперь слайдер

let items = document.querySelectorAll('.items-container .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}
function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

// вкл выкл телефонов
let scR = 0;
document.querySelector('.right-phone').addEventListener('click', function(e){
    if(scR%2==0){
        document.querySelector('.screen-r').style.display = 'none';
        
    }else{
        document.querySelector('.screen-r').style.display = 'block';
    }
    ++scR;
});

let scL = 0;
document.querySelector('.phone').addEventListener('click', function(e){
    if(scL%2==0){
        document.querySelector('.screen-l').style.display = 'none';
        
    }else{
        document.querySelector('.screen-l').style.display = 'block';
    }
    ++scL;
});

// табы
let tags = document.querySelectorAll('.tags a');
tags[0].style.color = 'white';
document.querySelector('.tags').addEventListener('click', function(e) {
    
    tags[0].style.color = '#767e9e';
    tags[1].style.color = '#767e9e';
    tags[2].style.color = '#767e9e';
    tags[3].style.color = '#767e9e';
    
        e.target.style.color = 'white';
    //e.preventDefault();
      

});



tags[0].addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.images').style.gridTemplateAreas = ' "a b c d" "e f h i" "j k l m" ';




});
tags[1].addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.images').style.gridTemplateAreas = ' "b a c d" "h i f e" "j k m l" ';

});
tags[2].addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.images').style.gridTemplateAreas = ' "b d c a" "h i f e" "j k l m" ';


});
tags[3].addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.images').style.gridTemplateAreas = ' "b a c d" "h i e f" "j l m k" ';


});

// граница

let previousBorder = document.querySelector('.images');
document.querySelector('.images').addEventListener('click', function(e){
    if (e.target != document.querySelector('.images')) {
    e.target.classList.add('border');
    previousBorder.classList.remove('border');
    previousBorder = e.target;
    }
});

//Get a quote

document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault();
    let sub = document.querySelectorAll('.val')[2].value;
    let des = document.querySelectorAll('.val')[3].value;
    if (sub == "") sub = "Без темы";
    if (des == "") des = "Без описания";
    document.querySelector('.okno').style.display = 'block';
    document.querySelector('#sub').innerText = sub;
    document.querySelector('#des').innerText = des;
});

document.querySelector('#ok').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.okno').style.display = 'none';
    
    document.querySelectorAll('.val').forEach(e => {
        e.value = "";
    });
});

