const content = document.querySelector('#content');
const body = document.querySelector('body');
body.className = "about_us"
content.className = "about_us_content"
const head = document.createElement('h1');
const img = document.createElement('img');
const para = document.createElement('p');

export default function addAboutUs () {
    head.textContent = "Restaurant";
    // img.setAttribute('src', 'https://www.greenqueen.com.hk/wp-content/uploads/2022/03/pexels-cottonbro-4252146-scaled.jpg');
    // img.setAttribute('alt', 'image of a restaurant');
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum odio quis neque ultricies eleifend eget at augue. Quisque condimentum elit erat, et lobortis dolor condimentum a. Duis sed tristique nisl, in consequat libero.";
    // img.setAttribute('id','about-us-img')
    content.appendChild(head)
    content.appendChild(img)
    content.appendChild(para)
}
