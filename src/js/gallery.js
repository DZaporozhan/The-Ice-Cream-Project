const item = document.querySelectorAll('.gallery__item');
console.log(item); 

item.forEach(myFunction);
function myFunction(item) {
    item.addEventListener('mouseenter', function (ev) {
        ev.currentTarget.classList.add('active');
    });
    item.addEventListener('mouseleave', function (ev) {
        ev.currentTarget.classList.remove('active');
 });
};