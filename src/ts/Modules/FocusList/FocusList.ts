export const FocusList = () => {
  const newTodoText = document.querySelector<HTMLLIElement>(
    '.todo__li:last-child .todo__text'
  );
  newTodoText?.focus();
};
