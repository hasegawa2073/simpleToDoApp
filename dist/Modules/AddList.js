import { addButton, todoUl } from '../variables/variables.js';
import { FocusList } from './FocusList.js';
export const AddList = () => {
    console.log(addButton, todoUl);
    const todoLiHtml = `
  <li class="todo__li">
    <div class="todo__button-area">
      <button
        class="todo__button"
        role="done todo"
        aria-label="Todoを完了させる">
      </button>
    </div>
    <p class="todo__content">
      <span class="todo__text" contenteditable="true"></span>
    </p>
  </li>
  `;
    console.log(todoLiHtml);
    addButton?.addEventListener('click', () => {
        todoUl?.insertAdjacentHTML('beforeend', todoLiHtml);
        FocusList();
    });
};
