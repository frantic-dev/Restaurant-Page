const content = document.querySelector('#content');
const body = document.querySelector('body');
let header = 0;

export default function addMenuOption(plateImg,plateName) {
    body.className = "menu";
    content.className = "menu_content";
    if (header % 6 === 0) {
        const menuHeader = document.createElement('h2');
        menuHeader.textContent = "Menu";
        content.appendChild(menuHeader);
    }
    header++;
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
    const caption = document.createElement('div');
    caption.textContent = plateName;
    caption.className = 'caption';
    menuOption.appendChild(caption);
}
