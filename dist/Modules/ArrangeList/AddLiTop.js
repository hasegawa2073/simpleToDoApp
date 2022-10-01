import { todoLists, todoUl } from '../../variables/variables.js';
const targetNode = todoUl;
const config = { childList: true };
const addLiTop = () => {
    const todoListsArray = todoLists
        ? Array.from(todoLists)
        : [];
    const heightArray = [];
    todoListsArray.forEach((list) => {
        heightArray.push(list.clientHeight);
    });
    const listTopArray = [];
    heightArray.reduce((accu, curr) => {
        listTopArray.push(accu);
        return accu + curr;
    }, 0);
    todoListsArray.forEach((list, i) => {
        list.style.left = '0px';
        list.style.top = `${listTopArray[i]}px`;
    });
};
const observer = new MutationObserver(addLiTop);
export const AddLiTop = () => {
    addLiTop();
    observer.observe(targetNode, config);
};
