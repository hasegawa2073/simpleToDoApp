import { body } from "../../variables/variables.js";
export const ScrollToBottom = () => {
    if (body === null)
        return;
    if (window.innerHeight / 2 < body.scrollHeight) {
        window.scrollTo({
            top: body.scrollHeight + window.innerHeight / 2,
            behavior: "smooth",
        });
    }
};
