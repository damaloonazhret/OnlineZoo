// let doc = document;
// let index = 1;

// let Slider = function () {
// 	this.box = doc.querySelector('.pets-top');
// 	this.slidesBox = doc.querySelector('.pets-bottom__row-1');
// 	this.slidess = doc.querySelectorAll('.pets-bottom__card');
// 	this.btns = doc.querySelectorAll('.btnses');
// 	this.size = (this.box.clientWidth + 40);

// 	this.position();
// 	this.carousel();
// };

// Slider.prototype.position = function () {
// 	let size = this.size;
// 	this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px';
// };

// Slider.prototype.carousel = function () {
// 	let i, max = this.btns.length,
// 		that = this;

// 	for (i = 0; i < max; i += 1) {
// 		that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
// 	}
// };

// Slider.prev = function (box) {
// 	box.slidesBox.style.transition = "transform .9s ease-in-out";
// 	let size = box.size;
// 	index <= 0 ? false : index--;
// 	box.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
// 	box.jump2();
// };

// Slider.next = function (box) {
// 	box.slidesBox.style.transition = "transform .9s ease-in-out";
// 	let max = box.slidess.length; // 22
// 	let size = box.size; // 1440
// 	index >= max - 16 ? false : index++;
// 	box.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
// 	box.jump2();
// };

// Slider.prototype.jump2 = function () {
// 	let that = this;
// 	let size = this.size;
// 	this.slidesBox.addEventListener('transitionend', function () {
// 		// that.slidess[index].id === "firstClone" ? index = 0 : index;
// 		// slidesBoxe[10].id === "firstClone" ? index = 1 : index;
// 		console.log(that.slidess.length);
// 		that.slidess[index].id === "firstClone" ? index = 1 : index;
// 		that.slidess[index].id === "lastClone" ? index = that.slidess.length - 17 : index;
// 		that.slidesBox.style.transition = "none";
// 		console.log(index);
// 		that.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
// 	});
// };
    
// new Slider();