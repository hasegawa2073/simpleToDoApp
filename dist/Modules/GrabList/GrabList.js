import { todoLists, todoUl } from '../../variables/variables.js';
import { returnTargetList } from '../DoneList/DoneList.js';
const grabList = (target) => {
    const targetList = returnTargetList(target);
    setTimeout(() => {
        targetList?.classList.add('todo__li--grabbing');
    }, 200);
};
const releaseList = (target) => {
    const targetList = returnTargetList(target);
    targetList?.classList.remove('todo__li--grabbing');
};
export const GrabList = () => {
    const todoListsArray = todoLists
        ? Array.from(todoLists)
        : [];
    todoListsArray.forEach((list) => {
        list.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const target = e.target;
            grabList(target);
        });
        list.addEventListener('touchend', (e) => {
            const target = e.target;
            releaseList(target);
        });
        list.addEventListener('mousedown', (e) => {
            const target = e.target;
            grabList(target);
        });
        list.addEventListener('mouseup', (e) => {
            const target = e.target;
            releaseList(target);
        });
    });
};
const targetNode = todoUl;
const config = { childList: true };
const observer = new MutationObserver(GrabList);
observer.observe(targetNode, config);
