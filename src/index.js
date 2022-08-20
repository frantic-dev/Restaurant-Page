import addContent from './pages/aboutUs';
import './styles/index.scss';

const aboutUsBtn = document.querySelector('#about-us-btn');
addContent();
let contentChildren = content.children;
// let contentArray = [...contentChildren]
aboutUsBtn.addEventListener('click', () => {
    [...contentChildren].forEach(child => child.remove())
    addContent();
})