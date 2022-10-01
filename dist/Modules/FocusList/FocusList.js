import { todoUl } from "../../variables/variables.js";
import { returnTargetList } from "../DoneList/DoneList.js";
export const FocusList = () => {
    todoUl?.addEventListener("touchend", (e) => {
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
};
