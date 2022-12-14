import { todoLists, todoUl } from "../../variables/variables.js";
const coordinates = {
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    moveX: 0,
    moveY: 0,
};
const listPosition = {
    startLeft: 0,
    startTop: 0,
    currentLeft: 0,
    currentTop: 0,
};
// リストのleftを0に戻す処理
const resetListPosLeft = (todoListsArray) => {
    todoListsArray.forEach((list) => {
        list.style.left = "0px";
    });
};
// topの値順に並び替えたリストの"配列"を返す関数(Map経由で並べ替えてArrayに戻す)
export const sortTopOrderListsArray = (todoListsArray) => {
    const originListsMap = new Map();
    let topOrderListsMap = new Map();
    const topOrderListsArray = [];
    todoListsArray.forEach((list) => {
        originListsMap.set(list, parseInt(list.style.top));
    });
    topOrderListsMap = new Map([...originListsMap].sort((a, b) => {
        return a[1] - b[1];
    }));
    topOrderListsMap.forEach((top, list) => {
        topOrderListsArray.push(list);
    });
    return topOrderListsArray;
};
// 自分より上に位置する(topの値が小さい)リストの高さの合計をtopにそれぞれに割り当てる関数
const setListPosTop = () => {
    const todoListsArray = todoLists
        ? Array.from(todoLists)
        : [];
    const topOrderListsArray = sortTopOrderListsArray(todoListsArray);
    const listHeightArray = [];
    topOrderListsArray.forEach((list) => {
        listHeightArray.push(list.clientHeight);
        listHeightArray.reduce((accu, curr) => {
            list.style.top = `${accu}px`;
            return accu + curr;
        }, 0);
    });
};
const sortList = {
    start(e, list) {
        if (window.TouchEvent && e instanceof TouchEvent) {
            coordinates.startX = e.touches[0].clientX;
            coordinates.startY = e.touches[0].clientY;
        }
        if (window.MouseEvent && e instanceof MouseEvent) {
            coordinates.startX = e.clientX;
            coordinates.startY = e.clientY;
        }
        listPosition.startLeft = parseInt(list.style.left);
        listPosition.startTop = parseInt(list.style.top);
    },
    move(e, list) {
        if (window.TouchEvent && e instanceof TouchEvent) {
            coordinates.currentX = e.touches[0].clientX;
            coordinates.currentY = e.touches[0].clientY;
        }
        if (window.MouseEvent && e instanceof MouseEvent) {
            coordinates.currentX = e.clientX;
            coordinates.currentY = e.clientY;
        }
        coordinates.moveX = coordinates.currentX - coordinates.startX;
        coordinates.moveY = coordinates.currentY - coordinates.startY;
        listPosition.currentLeft = listPosition.startLeft + coordinates.moveX;
        listPosition.currentTop = listPosition.startTop + coordinates.moveY;
        if (list.classList.contains("todo__li--grabbing")) {
            setListPosTop();
            list.style.left = `${listPosition.currentLeft}px`;
            list.style.top = `${listPosition.currentTop}px`;
        }
    },
    end(todoListsArray) {
        resetListPosLeft(todoListsArray);
        setListPosTop();
    },
};
export const SortList = () => {
    const todoListsArray = todoLists
        ? Array.from(todoLists)
        : [];
    todoListsArray.forEach((list) => {
        list.addEventListener("touchstart", (e) => {
            sortList.start(e, list);
        }, { passive: true });
        list.addEventListener("touchmove", (e) => {
            sortList.move(e, list);
        }, { passive: true });
        list.addEventListener("touchend", () => {
            sortList.end(todoListsArray);
        }, { passive: true });
        list.addEventListener("mousedown", (e) => {
            sortList.start(e, list);
        }, { passive: true });
        list.addEventListener("mousemove", (e) => {
            sortList.move(e, list);
        }, { passive: true });
        list.addEventListener("mouseup", () => {
            sortList.end(todoListsArray);
        }, { passive: true });
    });
};
const targetNode = todoUl;
const config = { childList: true };
const observer = new MutationObserver(SortList);
observer.observe(targetNode, config);
