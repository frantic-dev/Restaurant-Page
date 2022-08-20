const content = document.querySelector('#content');

export default function addMenu (img, name) {
    console.log(123)
    addMenuOption(img, name)
}
function addMenuOption(plateImg,plateName) {
    const myImage = new Image();
    myImage.src = plateImg;
    myImage.classList = "plate";
    myImage.id = plateName;
    myImage.alt = plateName;
    content.appendChild(myImage)
}
