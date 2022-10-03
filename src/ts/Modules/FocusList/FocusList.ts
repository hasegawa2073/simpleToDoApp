import { todoLists, todoUl } from "../../variables/variables.js";
import { returnTargetList } from "../DoneList/DoneList.js";

export const FocusList = () => {
  const todoListsArray = todoLists
    ? (Array.from(todoLists) as Array<HTMLLIElement>)
    : [];
  todoListsArray.forEach((list) => {
    list.children[1].addEventListener("touchend", (e) => {
      const target = e.target as HTMLElement;
      const targetList = returnTargetList(target);
      const targetNode = targetList?.querySelector(".todo__text")
        ?.firstChild as Node;
      const targetText = targetList?.querySelector(
        ".todo__text"
      ) as HTMLElement;
      const targetTextLength = targetText.textContent?.length as number;
      const selection = window.getSelection();
      const range = document.createRange();
      range.setStart(targetNode, targetTextLength);
      range.setEnd(targetNode, targetTextLength);
      selection?.removeAllRanges();
      selection?.addRange(range);
      if (
        target.classList.contains("todo__content") ||
        target.classList.contains("todo__text")
      ) {
        targetText.focus();
      }
    });
  });
};
const targetNode = todoUl as Node;
const config = { childList: true };
const observer = new MutationObserver(FocusList);
observer.observe(targetNode, config);
