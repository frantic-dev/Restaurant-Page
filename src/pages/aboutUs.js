const content = document.querySelector('#content');
export default function addContent () {
    const head = document.createElement('h1');
    const img = document.createElement('img');
    const para = document.createElement('p');
    head.textContent = "Family Restaurant";
    img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKpX93OKgLOEMnJ7SQX6A46oMasmVVBtFLA&usqp=CAU');
    img.setAttribute('alt', 'image of a restaurant');
    para.textContent = "Our restaurant has been around for 5 years. And with welcoming and open arms we welcome everyone to come and visit. Enjoy the mountain breeze and the good view.";
    content.appendChild(head)
    content.appendChild(img)
    content.appendChild(para)
}
