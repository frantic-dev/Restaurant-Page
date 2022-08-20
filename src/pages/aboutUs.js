const content = document.querySelector('#content');
export default function addAboutUs () {
    const head = document.createElement('h1');
    const img = document.createElement('img');
    const para = document.createElement('p');
    head.textContent = "Family Restaurant";
    img.setAttribute('src', 'https://108w864esodx40rbop37tsnk-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/Tupelo-Grand-Opening1.png');
    img.setAttribute('alt', 'image of a restaurant');
    para.textContent = "Our restaurant has been around for 5 years. And with welcoming and open arms we welcome everyone to come and visit. Enjoy the mountain breeze and the good view.";
    img.setAttribute('id','about-us-img')
    content.appendChild(head)
    content.appendChild(img)
    content.appendChild(para)
}
