import {getResuorce} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {

    const btn = document.querySelector(trigger);


    // это подтягивание данных из верстки 

    /* cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.remove();

    }); */

    // это подтягивание данных из БД
    
    btn.addEventListener('click', () => {
        getResuorce('http://localhost:3000/styles')
            .then(res => createCards(res))
            .then(setTimeout(() => {
                btn.remove();
            }, 100))
            .catch(error => console.log(error));

    });
    function createCards(response) {
        let i = 0;
        response.forEach(item => {
            if(i <= 3) {
                i++;
                    let card = document.createElement('div');
                    card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        
                    card.innerHTML = `
                    <div class=styles-block>
                        <img src='${item.src}' alt='style'>
                        <h4>${item.title}</h4>
                        <a href="${item.link}">Подробнее</a>
                    </div>
                    `; 
                    document.querySelector(wrapper).appendChild(card);
                console.log(i);
            }
        });
    }
};

export default showMoreStyles;






















