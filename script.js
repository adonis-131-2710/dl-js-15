const faqItems = document.querySelectorAll('.item');

faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const icon = item.querySelector('.icon i');

    question.addEventListener('click', () => {
        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-x');
        } else {
            icon.classList.remove('fa-x');
            icon.classList.add('fa-angle-down');
        }
    });
});
