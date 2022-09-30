import { todoUl } from '../../variables/variables.js';

export const ClearItem = () => {
  todoUl?.addEventListener('focusout', () => {
    localStorage.clear();
  });
};
