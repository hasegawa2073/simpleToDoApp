import { todoLists, todoUl } from "../../variables/variables.js";
import { sortTopOrderListsArray } from "../SortList/SortList.js";
export const SortDOMTopOrder = (): void => {
  // 並び順とDOMの順番を揃える処理
  const sortDOMTopOrder = (): void => {
    const todoListsArray = todoLists
      ? (Array.from(todoLists) as Array<HTMLLIElement>)
      : [];
    const topOrderListsArray = sortTopOrderListsArray(todoListsArray);
    topOrderListsArray.forEach((list) => {
      todoUl?.appendChild(list);
    });
  };
  todoUl?.addEventListener("focusout", () => {
    sortDOMTopOrder();
  });
};
