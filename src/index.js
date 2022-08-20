import addContent from './pages/aboutUs';
import './styles/index.scss';
import addMenu from './pages/Menu';
import Burger from './images/burger.jpg';
import './styles/menu.scss'

const aboutUsBtn = document.querySelector('#about-us-btn');
addContent();
let contentChildren = content.children;
aboutUsBtn.addEventListener('click', () => {
    [...contentChildren].forEach(child => child.remove())
    addContent();
});

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', () =>{
    [...contentChildren].forEach(child => child.remove())
    addMenu(Burger, "burger");
})
