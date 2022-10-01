import { AddList } from "./Modules/AddList/AddList.js";
import { ClearItem } from "./Modules/ClearItem/ClearItem.js";
import { DoneList } from "./Modules/DoneList/DoneList.js";
import { GetItem } from "./Modules/GetItem/GetItem.js";
import { RemoveList } from "./Modules/RemoveList/RemoveList.js";
import { SetItem } from "./Modules/SetItem/SetItem.js";
document.addEventListener("DOMContentLoaded", () => {
    GetItem();
    AddList();
    DoneList();
    RemoveList();
    ClearItem();
    SetItem();
});
