import { AddList } from "./Modules/AddList/AddList.js";
import { ClearItem } from "./Modules/ClearItem/ClearItem.js";
import { GetItem } from "./Modules/GetItem/GetItem.js";
import { SetItem } from "./Modules/SetItem/SetItem.js";

document.addEventListener("DOMContentLoaded", () => {
  GetItem();
  AddList();
  ClearItem();
  SetItem();
});
