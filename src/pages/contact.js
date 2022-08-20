const content = document.querySelector('#content');

const form = document.createElement('form');
export default function addContact () {
    content.appendChild(form)
    createLabel("Your Name:", "name", "text");
    createLabel("Your Email:", "email", "email");
    createLabel("Your Message:", "message", "textarea");
    createLabel("", "", 'submit');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("bruh")
    })
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
};