import { addButton, todoUl } from "../../variables/variables.js";
import { FocusNewList } from '../FocusNewList/FocusNewList.js';
import { RemoveEmptyList } from '../RemoveEmptyList/RemoveEmptyList.js';

export const AddList = () => {
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
  addButton?.addEventListener('click', () => {
    todoUl?.insertAdjacentHTML('beforeend', todoLiHtml);
    FocusNewList();
    RemoveEmptyList();
  });
};
