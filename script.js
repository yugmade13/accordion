const contents = document.querySelectorAll('.content');

contents.forEach((item, index) => {
    const question = item.querySelector('.question');

    question.addEventListener('click', function() {
        item.classList.toggle('open');

        const description = item.querySelector('.description');

        if(item.classList.contains('open')) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector('i').classList.replace('bxs-chevron-down', 'bxs-chevron-up');

        }else {
            description.style.height = '0';
            item.querySelector('i').classList.replace('bxs-chevron-up', 'bxs-chevron-down');
        }

        removeOpen(index);
    });
});

function removeOpen(index) {
    contents.forEach((item, i) => {
        if(index != i) {
            item.classList.remove('open');
            
            const description = item.querySelector('.description');
            
            description.style.height = '0';
            item.querySelector('i').classList.replace('bxs-chevron-up', 'bxs-chevron-down');
        }
    });
}