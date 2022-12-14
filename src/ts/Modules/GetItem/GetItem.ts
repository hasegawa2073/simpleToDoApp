import { todoUl } from "../../variables/variables.js";

export const GetItem = () => {
  const localStorageItemLength = localStorage.length - 1;
  for (let i = 0; i <= localStorageItemLength; i++) {
    const keyName = localStorage.key(i);
    const todoLiHtml = `
    <li class="todo__li">
      <div class="todo__button-area" role="button" aria-label="Todoを完了させる">
        <button
          class="todo__button"
          aria-label="Todoを完了させる">
        </button>
      </div>
      <p class="todo__content">
        <span class="todo__text" contenteditable="true">${localStorage.getItem(
          `${keyName}`
        )}</span>
      </p>
    </li>
    `;
    todoUl?.insertAdjacentHTML("afterbegin", todoLiHtml);
  }
};
