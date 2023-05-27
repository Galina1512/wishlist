import { createElement } from "./helper"

export const renderModal = ({
    title,
    description,
    btnSubmit,
    submitHandler,
}) => {
const modal = createElement('div', {
    className: 'modal',
});

const modalMain = createElement('div', {
    className: 'modal__main',
});

const modalTitle = createElement('h2', {
    className: 'modal__title',
    textContent: title,
});

const modalDescription = createElement('p', {
    className: 'modal__description',
    textContent: description,
});

const modalForm = createElement('form', {
    className: 'modal__form',
});

modalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itsOk = await  submitHandler(e);
    if (itsOk) {
        modal.remove();
    }
})


}