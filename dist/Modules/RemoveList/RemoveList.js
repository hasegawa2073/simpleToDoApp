import { todoUl } from "../../variables/variables.js";
import { returnTargetList } from "../DoneList/DoneList.js";
const removeList = (target) => {
    const targetList = returnTargetList(target);
    const targetButton = targetList?.querySelector(".todo__button");
    let timeoutID = undefined;
    timeoutID = setTimeout(() => {
        targetList?.remove();
    }, 2000);
    if (!targetButton?.classList.contains("todo__button--done")) {
        clearTimeout(timeoutID - 1);
        clearTimeout(timeoutID);
    }
};
export const RemoveList = () => {
    todoUl?.addEventListener("touchend", (e) => {
        const target = e.target;
        removeList(target);
    });
    todoUl?.addEventListener("mouseup", (e) => {
        const target = e.target;
        removeList(target);
    });
};
