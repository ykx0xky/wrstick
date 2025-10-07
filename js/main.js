// JavaScript Document

//***********************
// 郢ｧ�ｪ郢晢ｽｼ郢晏干繝ｫ郢晢ｽｳ郢ｧ�ｰ
//***********************
window.setTimeout(openingFadeout, 1000);
function openingFadeout(){
	openingContainer.classList.add('fadeout');
	setTimeout(function(){
		openingContainer.style.display = 'none';
		// main.classList.add('fadein');
		// main.style.display = 'block';
	}, 1000);
}

//***********************
// 郢晄亢繝｣郢晏干縺�ｹ晢ｿｽ�ｽ
//***********************
function modalMotion(){
	let modalContentsElm = document.getElementById('modal01');
	modalContentsElm.classList.add('js-active');
	modalContentsElm.classList.remove('js-close');
	// 郢ｧ�ｫ郢ｧ�ｦ郢晢ｽｳ郢晏現繝�郢ｧ�ｦ郢晢ｽｳ邵ｺ繧�ｽ�
	countDown();

	const modalEndElm = document.querySelectorAll('.js-modal__close');
	for (let i = 0; i < modalEndElm.length; i++){
		let FinishContentsElm = document.getElementById(modalEndElm[i].dataset.modal);
		modalEndElm[i].addEventListener('click', () => {
			FinishContentsElm.classList.remove('js-active');
			FinishContentsElm.classList.add('js-close');
		});
	}
}

var timer = 900;    // 髫ｪ�ｭ陞ｳ螢ｽ蜃ｾ鬮｢�ｽ(驕假ｿｽ)
var timeToCountDown = timer * 1000;
var startTime = Date.now();

function countDown() {
	var count = document.getElementById('countdownTime');
	setTimeout(function () {
	var timeLeft = timeToCountDown - (Date.now() - startTime);
	if (timeLeft < 0) {
		count.innerText = '00:00:00';
	} else {
		var d = new Date(timeLeft);
		var m = d.getMinutes();
		var s = d.getSeconds();
		var ms = d.getMilliseconds();
		m = ('0' + m).slice(-2);
		s = ('0' + s).slice(-2);
		ms = ('000' + ms).slice(-3).substr(0, 2);
		count.innerText = m + ':' + s + ':' + ms;
		countDown();
	}
	}, 10);
}

//***********************
//郢ｧ�ｹ郢ｧ�ｯ郢晢ｽｭ郢晢ｽｼ郢晢ｽｫ郢ｧ�ｪ郢晄じ縺倡ｹ晢ｽｼ郢晁��ｽ
//***********************
var flag = 0;
const floatElm = document.getElementById('float');
let float_fl = 0;
function observeScroll(topVal, rightVal, bottomVal, leftVal, thresholdVal, className){
	let callback = (entries, observer) => {
		entries.forEach(entry => {
			if(entry.target){
				if(entry.intersectionRatio > thresholdVal){
					if(className == 'scrlPopObj'){
						if (flag == 0) {
							modalMotion();
							flag = 1;
						}
					}
					if(className == 'scrlAnmObj'){
						floatElm.classList.add('is-in');
						float_fl++;
					};
				}else{
					if(className == 'scrlAnmObj'){
						floatElm.classList.remove('is-in');
						float_fl--;
					};
				}
			}
		});
	};
	const options = {
		root: null,
		rootMargin: topVal+'% '+rightVal+'% '+bottomVal+'% '+leftVal+'%',
		threshold: thresholdVal
	};
	const boxes = document.querySelectorAll('.'+className);
	const observer = new IntersectionObserver(callback, options);
	boxes.forEach(box => {
		observer.observe(box);
	});
}