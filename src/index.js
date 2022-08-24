import addAboutUs from './pages/home';
import './styles/index.scss';
import Burger from './images/burger.jpg';
import './styles/menu.scss'
import addMenuOption from './pages/Menu';
import Taco from './images/shrimp-taco.jpg';
import spaghetti from './images/spaghetti.png';
import steak from './images/steak.png';
import lava from './images/lava-cake.png';
import cookiesParfait from './images/cookies&cream-parfait.png';
import addContact from './pages/contact';
import './styles/contact.scss';

const homeBtn = document.querySelector('#home-btn');
addAboutUs();
let contentChildren = content.children;
homeBtn.addEventListener('click', () => {
    [...contentChildren].forEach(child => child.remove())
    addAboutUs();
});

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', () =>{
    [...contentChildren].forEach(child => child.remove())
    addMenuOption(Burger, "burger");
    addMenuOption(Taco, 'Shrimp Taco');
    addMenuOption(spaghetti, "Spaghetti");
    addMenuOption(steak, "Steak");
    addMenuOption(lava, 'Lava Cake');
    addMenuOption(cookiesParfait, "Cookies And Cream Parfait")
});

const contactBtn = document.querySelector('#contact-btn');

contactBtn.addEventListener('click', ()=> {
    [...contentChildren].forEach(child => child.remove())
    addContact();
})
