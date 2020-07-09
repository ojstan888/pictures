
const showMoreStyles = (trigger, wrapper) => {
    const cards = document.querySelectorAll('.items');
    const btn = document.querySelector(trigger);
    let onShow = false;

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        if(!onShow) {
            cards.forEach(card => {
                card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
                card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            });
            btn.innerHTML = 'Скрыть';
            onShow = true;
        } else {
            cards.forEach(card => {
                card.classList.add('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
                card.classList.remove('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            });
            btn.innerHTML = 'Показать больше стилей';
            onShow = false;
        }
    });


};

export default showMoreStyles;






















