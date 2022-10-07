import { addButton } from "../../variables/variables.js";

export const InteractionAddButton = () => {
  const buttonInteraction = (): void => {
    addButton?.classList.toggle("add__button--active");
  };
  const buttonReset = () => {
    addButton?.classList.remove("add__button--active");
  };
  addButton?.addEventListener(
    'touchstart',
    () => {
      buttonInteraction();
    },
    { passive: true }
  );
  addButton?.addEventListener(
    'touchend',
    () => {
      buttonReset();
    },
    { passive: true }
  );
  addButton?.addEventListener(
    'mousedown',
    () => {
      buttonInteraction();
    },
    { passive: true }
  );
  addButton?.addEventListener(
    'mouseup',
    () => {
      buttonReset();
    },
    { passive: true }
  );
  addButton?.addEventListener(
    'mouseleave',
    () => {
      buttonReset();
    },
    { passive: true }
  );
};
