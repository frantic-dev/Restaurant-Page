const content = document.querySelector('#content');
const body = document.querySelector('body');


const form = document.createElement('form');
export default function addContact () {
    content.className = "contact_content";
    body.className = "contact";
    content.appendChild(form);
    if (form.children.length === 0) {
        createLabel("Your Name:", "name", "text");
        createLabel("Your Email:", "email", "email");
        createLabel("Your Message:", "message", "textarea");
        createLabel("", "submit-btn", 'submit');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })}
    addMap();
} 
function createLabel (labelContent, labelFor, inputType) {
    const label = document.createElement('label');
    label.textContent = labelContent;
    label.setAttribute('for', labelFor);
    form.appendChild(label); 
    let type;
    if (inputType !== "textarea") type = "input";
    else type = "textarea";
    const input = document.createElement(type);
    input.setAttribute('placeholder', `Enter your ${labelFor}` ) ;
    input.setAttribute('type', inputType);
    input.setAttribute('id', labelFor);
    form.appendChild(input);
    input.required = true;
};
function addMap() {
    let mapDiv = document.createElement('div');
    mapDiv.id = "map";
    mapDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.7122980883705!2d-118.25255968491061!3d33.94852708063434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sma!4v1661685470126!5m2!1sen!2sma" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    content.appendChild(mapDiv);
}