import { SignupDTO } from './dto/signupDTO.js';
import { LoginDTO } from './dto/loginDTO.js';


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('active'));

            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });


    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();


            const formId = form.id;
            console.log(formId);

            const formData = new FormData(form);
            var dto = "";
            if (formId === 'signup-form') {
                dto = new SignupDTO(formData);
            } else {
                dto = new LoginDTO(formData);
            }
            alert(`${dto.email}`);
        });
    });
});
