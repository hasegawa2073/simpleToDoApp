import { todoLists, todoUl } from "../../variables/variables.js";
import { returnTargetList } from "../DoneList/DoneList.js";

const grabList = (target: HTMLElement) => {
  const targetList = returnTargetList(target);
  setTimeout(() => {
    targetList?.classList.add("todo__li--grabbing");
  }, 200);
};
const releaseList = (target: HTMLElement) => {
  const targetList = returnTargetList(target);
  targetList?.classList.remove("todo__li--grabbing");
};
export const GrabList = () => {
  const todoListsArray = todoLists
    ? (Array.from(todoLists) as Array<HTMLLIElement>)
    : [];
  todoListsArray.forEach((list) => {
    list.addEventListener("touchstart", (e) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      grabList(target);
    });
    list.addEventListener("touchend", (e) => {
      const target = e.target as HTMLElement;
      releaseList(target);
    });
    list.addEventListener("mousedown", (e) => {
      const target = e.target as HTMLElement;
      grabList(target);
    });
    list.addEventListener("mouseup", (e) => {
      const target = e.target as HTMLElement;
      releaseList(target);
    });
  });
};
const targetNode = todoUl as Node;
const config = { childList: true };
const observer = new MutationObserver(GrabList);
observer.observe(targetNode, config);
