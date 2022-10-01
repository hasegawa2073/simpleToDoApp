import { todoUl } from "../../variables/variables.js";

export const targetNode = todoUl as Node;
export const config = { childList: true };
const clearItem = (): void => {
  localStorage.clear();
};
const observer = new MutationObserver(clearItem);
export const ClearItem = () => {
  observer.observe(targetNode, config);
  todoUl?.addEventListener('focusout', () => {
    clearItem();
  });
};
