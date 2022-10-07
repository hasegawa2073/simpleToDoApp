import { todoUl } from "../../variables/variables.js";
export const targetNode = todoUl;
export const config = { childList: true };
const clearItem = () => {
    localStorage.clear();
};
const observer = new MutationObserver(clearItem);
export const ClearItem = () => {
    observer.observe(targetNode, config);
    todoUl?.addEventListener("focusout", () => {
        clearItem();
    });
};
