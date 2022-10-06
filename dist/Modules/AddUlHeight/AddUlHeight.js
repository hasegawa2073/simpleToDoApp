import { todoLists, todoUl } from '../../variables/variables.js';
export const AddUlHeight = () => {
    const todoListsArray = todoLists
        ? Array.from(todoLists)
        : [];
    const heightArray = [];
    todoListsArray.forEach((list) => {
        heightArray.push(list.clientHeight);
    });
    const totalListHeight = heightArray.reduce((accu, curr) => {
        return accu + curr;
    }, 0);
    if (todoUl) {
        todoUl.style.height = `${totalListHeight}px`;
    }
};
const targetNode = todoUl;
const config = { childList: true };
const observer = new MutationObserver(AddUlHeight);
observer.observe(targetNode, config);
