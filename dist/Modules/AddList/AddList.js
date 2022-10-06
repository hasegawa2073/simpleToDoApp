import { addButton, todoUl } from "../../variables/variables.js";
import { FocusNewList } from "../FocusNewList/FocusNewList.js";
import { RemoveEmptyList } from "../RemoveEmptyList/RemoveEmptyList.js";
export const AddList = () => {
    const todoLiHtml = `
  <li class="todo__li">
    <div class="todo__button-area" role="button" aria-label="Todoを完了させる">
      <button
        class="todo__button"
        aria-label="Todoを完了させる">
      </button>
    </div>
    <p class="todo__content">
      <span class="todo__text" contenteditable="true"></span>
    </p>
  </li>
  `;
    const addList = () => {
        todoUl?.insertAdjacentHTML("beforeend", todoLiHtml);
        FocusNewList();
        RemoveEmptyList();
    };
    addButton?.addEventListener("click", () => {
        addList();
    });
    addEventListener("keydown", (e) => {
        const target = e.target;
        if (target.classList.contains("todo__text"))
            return;
        if (e.code === "Enter") {
            e.preventDefault();
            addList();
        }
    });
};
