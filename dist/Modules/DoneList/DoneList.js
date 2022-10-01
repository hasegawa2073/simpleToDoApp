import { todoUl } from '../../variables/variables.js';
export const DoneList = () => {
    const returnTargetList = (target) => {
        let targetList;
        if (target.parentElement?.parentElement?.classList.contains('todo__li')) {
            targetList = target.parentElement?.parentElement;
            return targetList;
        }
        if (target.parentElement?.classList.contains('todo__li')) {
            targetList = target.parentElement;
            return targetList;
        }
    };
    const doneList = (target) => {
        const targetList = returnTargetList(target);
        const targetButton = targetList?.querySelector('.todo__button');
        const targetText = targetList?.querySelector('.todo__text');
        targetButton?.classList.toggle('todo__button--done');
        targetText?.classList.toggle('todo__text--done');
    };
    todoUl?.addEventListener('touchend', (e) => {
        const target = e.target;
        if (target.classList.contains('todo__button-area')) {
            doneList(target);
        }
    });
    todoUl?.addEventListener('mouseup', (e) => {
        const target = e.target;
        if (target.classList.contains('todo__button')) {
            doneList(target);
        }
    });
};
