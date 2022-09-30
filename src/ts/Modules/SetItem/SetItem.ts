import { todoUl } from '../../variables/variables.js';

export const SetItem = () => {
  todoUl?.addEventListener('focusout', (e) => {
    const target = e.target as HTMLSpanElement;
    const todoTexts = document.querySelectorAll<HTMLSpanElement>('.todo__text');
    todoTexts.forEach((text) => {
      const item: string = text.textContent?.trim() as string;
      if (item !== '') {
        localStorage.setItem(
          `${item} ${e.timeStamp} ${target.style.top}`,
          item
        );
      }
    });
  });
};
