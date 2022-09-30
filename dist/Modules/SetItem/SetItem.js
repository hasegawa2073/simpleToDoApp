import { todoUl } from "../../variables/variables.js";
export const SetItem = () => {
    todoUl?.addEventListener("focusout", (e) => {
        const target = e.target;
        const todoTexts = document.querySelectorAll(".todo__text");
        todoTexts.forEach((text) => {
            const item = text.textContent?.trim();
            if (item !== "") {
                localStorage.setItem(`${item} ${e.timeStamp} ${target.style.top}`, item);
            }
        });
    });
};
