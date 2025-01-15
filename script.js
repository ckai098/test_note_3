document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // 处理联系表单提交
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('消息已发送！');
        contactForm.reset();
    });
}); 