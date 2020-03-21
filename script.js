
document.querySelector('nav div').addEventListener('click', function(e) {
    
    document.querySelectorAll('.link')[0].style.color = 'white';
    document.querySelectorAll('.link')[1].style.color = 'white';
    document.querySelectorAll('.link')[2].style.color = 'white';
    document.querySelectorAll('.link')[3].style.color = 'white';
    document.querySelectorAll('.link')[4].style.color = 'white';
        e.target.style.color = '#f06c64';
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

document.querySelectorAll('.phone').addEventListener('click', function(e){
    e.target.style.display = 'hidden';
});
