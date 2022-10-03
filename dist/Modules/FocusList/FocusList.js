import { todoLists, todoUl } from "../../variables/variables.js";
import { returnTargetList } from "../DoneList/DoneList.js";
export const FocusList = () => {
    const todoListsArray = todoLists
        ? Array.from(todoLists)
        : [];
    todoListsArray.forEach((list) => {
        list.children[1].addEventListener("touchend", (e) => {
            const target = e.target;
            const targetList = returnTargetList(target);
            const targetNode = targetList?.querySelector(".todo__text")
                ?.firstChild;
            const targetText = targetList?.querySelector(".todo__text");
            const targetTextLength = targetText.textContent?.length;
            const selection = window.getSelection();
            const range = document.createRange();
            range.setStart(targetNode, targetTextLength);
            range.setEnd(targetNode, targetTextLength);
            selection?.removeAllRanges();
            selection?.addRange(range);
            if (target.classList.contains("todo__content") ||
                target.classList.contains("todo__text")) {
                targetText.focus();
            }
        });
    });
};
const targetNode = todoUl;
const config = { childList: true };
const observer = new MutationObserver(FocusList);
observer.observe(targetNode, config);
