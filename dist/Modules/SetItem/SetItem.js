import { todoUl } from "../../variables/variables.js";
import { config, targetNode } from '../ClearItem/ClearItem.js';
const setItem = () => {
    const todoTexts = document.querySelectorAll('.todo__text');
    todoTexts.forEach((text) => {
        const todoLi = text.parentElement?.parentElement;
        const todoText = text.textContent?.trim();
        if (todoText !== '') {
            localStorage.setItem(`${todoText} ${todoLi?.style.top}`, todoText);
        }
    });
};
const observer = new MutationObserver(setItem);
export const SetItem = () => {
    observer.observe(targetNode, config);
    todoUl?.addEventListener('focusout', () => {
        setItem();
    });
};
