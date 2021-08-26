const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const features = $$('.menu__feature');
const menu = $$('.user__menu');

features.forEach(value=> {
    value.onclick = () => {
        features.forEach(item => {
            item.classList.remove('feature-active');
        })
        value.classList.add('feature-active');
    }
});

menu.forEach(value => {
    value.onclick = () => {
        menu.forEach(item => {
            item.classList.remove('menu-active');
        })
        value.classList.add('menu-active');
    }
})




