const content = document.querySelector('#content');
const body = document.querySelector('body');

export default function addMenuOption(plateImg,plateName) {
    body.className = "menu";
    content.className = "menu_content";
    const menuOption = document.createElement('div');
    menuOption.classList.add("menu-option");
    menuOption.setAttribute('id',plateName)
    content.appendChild(menuOption);
    const myImage = new Image();
    myImage.src = plateImg;
    myImage.classList = "plate";
    myImage.id = plateName;
    myImage.alt = `A picture of ${plateName}`;
    menuOption.appendChild(myImage);
    const caption = document.createElement('figcaption');
    caption.textContent = plateName;
    menuOption.appendChild(caption);
}
