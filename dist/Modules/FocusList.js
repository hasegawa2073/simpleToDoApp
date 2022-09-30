export const FocusList = () => {
    const newTodoText = document.querySelector('.todo__li:last-child .todo__text');
    console.log(newTodoText);
    newTodoText?.focus();
};
