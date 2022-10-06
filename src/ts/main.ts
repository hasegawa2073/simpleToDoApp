import { AddList } from "./Modules/AddList/AddList.js";
import { AddUlHeight } from "./Modules/AddUlHeight/AddUlHeight.js";
import { ArrangeList } from "./Modules/ArrangeList/ArrangeList.js";
import { ClearItem } from "./Modules/ClearItem/ClearItem.js";
import { DoneList } from "./Modules/DoneList/DoneList.js";
import { FocusList } from "./Modules/FocusList/FocusList.js";
import { GetItem } from "./Modules/GetItem/GetItem.js";
import { GrabList } from "./Modules/GrabList/GrabList.js";
import { InteractionAddButton } from "./Modules/InteractionAddButton/InteractionAddButton.js";
import { RemoveList } from "./Modules/RemoveList/RemoveList.js";
import { SetItem } from "./Modules/SetItem/SetItem.js";
import { SortDOMTopOrder } from "./Modules/SortDOMTopOrder/SortDOMTopOrder.js";
import { SortList } from "./Modules/SortList/SortList.js";

document.addEventListener("DOMContentLoaded", () => {
  GetItem();
  AddUlHeight();
  AddList();
  InteractionAddButton();
  ArrangeList();
  GrabList();
  SortList();
  SortDOMTopOrder();
  FocusList();
  DoneList();
  RemoveList();
  ClearItem();
  SetItem();
});
