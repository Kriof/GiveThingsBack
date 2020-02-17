import { FETCHED, FETCHING, changePage } from "../Actions/WhoWeHelp";
import C from "./constants";

const initState = 
  {
    pending: false,
    name: "initState",
    desc: "initStateDesc",
    items: [{
        name: "item",
        desc: "",
        tags: [],
       
    }],
    currentPageId: 1,
    itemsPerPage: 2
  }
;

export const fundations = (state = initState, action) => {
  switch (action.type) {
    case FETCHED:
      return ({
          ...state,
        pending: false,
        items: action.data
      });
    case FETCHING:
      return ({
        ...state,
        pending: true
      });
    case C.CHANGE_PAGE:
      return ({
        ...state,
        currentPageId: action.pageId
      });
    break;
    default:
      return state;

  }
};
