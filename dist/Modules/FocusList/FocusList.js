export const FocusList = () => {
    const newTodoText = document.querySelector('.todo__li:last-child .todo__text');
    newTodoText?.focus();
};
