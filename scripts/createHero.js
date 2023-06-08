import { createElement } from "./helper.js";

export const createHero = () => {
    const section = createElement ('section', {
        className: 'hero',
    });

    const container = createElement('div', {
        className: 'container hero__container',

    });

    section.append(container);

    const title = createElement('h1', {
        className: 'hero__title',
        innerHTML: '<span>Wish</span><span>List</span>',
    });

    const description = createElement('p', {
        className: 'hero__description',
        innerHTML: 'Никогда не&nbsp;поздно поставить новую цель или обрести новую мечту... '
    });

    const listSteps = createElement('ol', {
        className: 'hero__steps steps',
    });

    container.append(title, description, listSteps);

    const stepOne = createElement('li', {
        className: 'steps__item',
        textContent: 'создайте список желаний',
    });
    const stepTwo = createElement('li', {
        className: 'steps__item',
        innerHTML: 'Поделитесь ссылкой с&nbsp;друзьями',
    });
    const stepThre = createElement('li', {
        className: 'steps__item',
        textContent: 'Получите желанный подарок',
    });

    listSteps.append(stepOne, stepTwo, stepThre);

    return(section);
};

