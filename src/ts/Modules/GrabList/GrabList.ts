import { todoLists, todoUl } from "../../variables/variables.js";
import { returnTargetList } from "../DoneList/DoneList.js";

let timeoutID: number;
const grabList = (target: HTMLElement) => {
  const targetList = returnTargetList(target);
  timeoutID = setTimeout(() => {
    targetList?.classList.add("todo__li--grabbing");
  }, 200);
};
const releaseList = (target: HTMLElement) => {
  const targetList = returnTargetList(target);
  clearTimeout(timeoutID - 1);
  clearTimeout(timeoutID);
  targetList?.classList.remove("todo__li--grabbing");
};
const isGrabbableArea = (target: HTMLElement) => {
  return target.classList.contains("todo__content");
};
export const GrabList = () => {
  const todoListsArray = todoLists
    ? (Array.from(todoLists) as Array<HTMLLIElement>)
    : [];
  todoListsArray.forEach((list) => {
    list.addEventListener("touchstart", (e) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      if (isGrabbableArea(target)) {
        grabList(target);
      }
    });
    list.addEventListener("touchend", (e) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      if (isGrabbableArea(target)) {
        releaseList(target);
      }
      setTimeout(() => {
        releaseList(target);
      }, 100);
    });
    list.addEventListener("mousedown", (e) => {
      const target = e.target as HTMLElement;
      if (isGrabbableArea(target)) {
        grabList(target);
      }
    });
    list.addEventListener("mouseup", (e) => {
      const target = e.target as HTMLElement;
      if (isGrabbableArea(target)) {
        releaseList(target);
      }
      setTimeout(() => {
        releaseList(target);
      }, 100);
    });
    list.addEventListener("mouseleave", (e) => {
      const target = e.target as HTMLElement;
      if (isGrabbableArea(target)) {
        releaseList(target);
      }
    });
  });
};
const targetNode = todoUl as Node;
const config = { childList: true };
const observer = new MutationObserver(GrabList);
observer.observe(targetNode, config);
