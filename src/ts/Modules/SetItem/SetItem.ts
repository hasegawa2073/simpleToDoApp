import { todoUl } from "../../variables/variables.js";
import { config, targetNode } from "../ClearItem/ClearItem.js";

const setItem = (): void => {
  const todoTexts = document.querySelectorAll<HTMLSpanElement>(".todo__text");
  todoTexts.forEach((text) => {
    const todoLi = text.parentElement?.parentElement;
    const todoText: string = text.textContent?.trim() as string;
    if (todoText !== "") {
      localStorage.setItem(`${todoText} ${todoLi?.style.top}`, todoText);
    }
  });
};
const observer = new MutationObserver(setItem);
export const SetItem = () => {
  observer.observe(targetNode, config);
  todoUl?.addEventListener("focusout", () => {
    setItem();
  });
};
