const content = document.querySelector('#content');
const body = document.querySelector('body');
const head = document.createElement('h1');
const img = document.createElement('img');
const para = document.createElement('p');
const button = document.createElement('button');

export default function addAboutUs () {
    body.className = "home"
    content.className = "home_content"
    head.textContent = "Restaurant";
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum odio quis neque ultricies eleifend eget at augue. Quisque condimentum elit erat, et lobortis dolor condimentum a. Duis sed tristique nisl, in consequat libero.";
    button.textContent = 'go to Menu';
    content.appendChild(head);
    content.appendChild(para);
    content.appendChild(button);
}
