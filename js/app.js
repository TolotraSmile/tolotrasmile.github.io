var box = document.getElementsByClassName('box')[0];
console.log(box);
setTimeout(function () {
    box.classList.add('fader');
}, 2000);