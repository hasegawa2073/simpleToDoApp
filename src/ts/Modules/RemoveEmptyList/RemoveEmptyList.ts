import { todoLists } from "../../variables/variables.js";

export const RemoveEmptyList = () => {
  const todoListsArray = todoLists ? Array.from(todoLists) : [];
  todoListsArray.forEach((list) => {
    list.addEventListener("focusout", (e) => {
      const target = e.target as HTMLSpanElement;
      if (target.textContent === "") {
        list.remove();
      }
    });
  });
};
