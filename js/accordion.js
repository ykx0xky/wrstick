function accordionMotion(){
	const accordElms = document.querySelectorAll('.js-accordion__btn'); //闔会ｽ｣隰ｨ�ｰaccordElms邵ｺ�ｫclass="js-accordion__btn"郢ｧ蜑�ｽｻ�｣陷茨ｽ･
	for (let i = 0; i < accordElms.length; i++){ //陞溽判辟喨郢ｧ�ｽ0邵ｺ荵晢ｽ�1邵ｺ螢ｹ笆ｽ陷会ｿｽ驍ょ干ﾂ竏･ccordElms邵ｺ�ｮ鬮滂ｽｷ邵ｺ霈披�邵ｺ�ｪ郢ｧ荵昶穐邵ｺ�ｧ陷会ｿｽ驍ょ干��驍ｯ螢ｹ��郢ｧ�ｽ
		let contentsInnElm = document.getElementById(accordElms[i].dataset.accord); //闔会ｽ｣隰ｨ�ｰcontentsInnElm邵ｺ�ｫaccordElms邵ｺ�ｮdata-accord="accordxx"郢ｧ蜑�ｽｻ�｣陷茨ｽ･
		let contentsPrtElm = contentsInnElm.parentNode; //闔会ｽ｣隰ｨ�ｰcontentsPrtElm邵ｺ�ｫcontentsInnElm邵ｺ�ｮ髫包ｽｪ髫補悪�ｴ�ｽclass="accordion__item accordion__item--01"郢ｧ蜑�ｽｻ�｣陷茨ｽ･
		accordElms[i].addEventListener('click', () => { //accordElms郢ｧ蛛ｵ縺醍ｹ晢ｽｪ郢晢ｿｽ縺醍ｸｺ蜉ｱ笳�ｹｧ�ｽ
			accordElms[i].classList.toggle('js-active'); //accordElms邵ｺ�ｫclass="js-active"邵ｺ謔滓ｧ邵ｺ�ｾ郢ｧ蠕娯ｻ邵ｺ�ｽ�檎ｸｺ�ｰ陷台ｼ∝求
			contentsPrtElm.classList.toggle('js-open'); //contentsPrtElm邵ｺ�ｫclass="js-open"邵ｺ謔滓ｧ邵ｺ�ｾ郢ｧ蠕娯ｻ邵ｺ�ｽ�檎ｸｺ�ｰ陷台ｼ∝求
			contentsPrtElm.classList.toggle('js-close'); //contentsPrtElm邵ｺ�ｫclass="js-close"邵ｺ謔滓ｧ邵ｺ�ｾ郢ｧ蠕娯ｻ邵ｺ�ｽ�檎ｸｺ�ｰ陷台ｼ∝求
			if( contentsPrtElm.classList.contains('js-open') == true ){ //contentsPrtElm邵ｺ�ｫclass="js-open"邵ｺ謔滓ｧ邵ｺ�ｾ郢ｧ蠕娯ｻ邵ｺ�ｽ�檎ｸｺ�ｰ
				let contentH = contentsInnElm.clientHeight; //闔会ｽ｣隰ｨ�ｰcontentH邵ｺ�ｫcontentsInnElm邵ｺ�ｮ髯ｦ�ｨ驕会ｽｺ陜捺ｺ假ｿｽ鬯ｮ蛟･��ｹｧ蜑�ｽｻ�｣陷茨ｽ･
				contentsPrtElm.style.height = contentH+'px'; //contentsPrtElm邵ｺ�ｮheight郢ｧ蝗｣ontentH px邵ｺ�ｫ陞溽判蟲ｩ邵ｺ蜷ｶ��
			} else {
				contentsPrtElm.style.height = 0; //邵ｺ譏ｴ竕ｧ邵ｺ�ｧ邵ｺ�ｪ邵ｺ莉｣�檎ｸｺ�ｰ鬯ｮ蛟･��ｹｧ�ｽ0邵ｺ�ｫ邵ｺ蜷ｶ��
			}
		});
	}
}// JavaScript Document