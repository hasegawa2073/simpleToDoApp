import { todoLists, todoUl } from "../../variables/variables.js";

const targetNode = todoUl as Node;
const config = { childList: true };
const arrangeList = (): void => {
  const todoListsArray = todoLists
    ? (Array.from(todoLists) as Array<HTMLLIElement>)
    : [];
  const heightArray: Array<number> = [];
  todoListsArray.forEach((list) => {
    heightArray.push(list.clientHeight);
  });
  const listTopArray: Array<number> = [];
  heightArray.reduce((accu, curr) => {
    listTopArray.push(accu);
    return accu + curr;
  }, 0);
  todoListsArray.forEach((list, i) => {
    list.style.left = "0px";
    list.style.top = `${listTopArray[i]}px`;
  });
};
const observer = new MutationObserver(arrangeList);

export const ArrangeList = () => {
  arrangeList();
  observer.observe(targetNode, config);
};
