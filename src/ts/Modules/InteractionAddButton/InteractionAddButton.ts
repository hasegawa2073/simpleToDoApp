import { addButton } from "../../variables/variables.js";

export const InteractionAddButton = () => {
  const buttonInteraction = (): void => {
    addButton?.classList.toggle("add__button--active");
  };
  const buttonReset = () => {
    addButton?.classList.remove("add__button--active");
  };
  addButton?.addEventListener("touchstart", () => {
    buttonInteraction();
  });
  addButton?.addEventListener("touchend", () => {
    buttonReset();
  });
  addButton?.addEventListener("mousedown", () => {
    buttonInteraction();
  });
  addButton?.addEventListener("mouseup", () => {
    buttonReset();
  });
  addButton?.addEventListener("mouseleave", () => {
    buttonReset();
  });
};
