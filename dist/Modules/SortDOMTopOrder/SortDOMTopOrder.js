import { todoLists, todoUl } from "../../variables/variables.js";
import { sortTopOrderListsArray } from "../SortList/SortList.js";
export const SortDOMTopOrder = () => {
  // 並び順とDOMの順番を揃える処理
  const sortDOMTopOrder = () => {
    const todoListsArray = todoLists ? Array.from(todoLists) : [];
    const topOrderListsArray = sortTopOrderListsArray(todoListsArray);
    topOrderListsArray.forEach((list) => {
      todoUl?.appendChild(list);
    });
  };
  todoUl?.addEventListener("focusout", () => {
    sortDOMTopOrder();
  });
};
