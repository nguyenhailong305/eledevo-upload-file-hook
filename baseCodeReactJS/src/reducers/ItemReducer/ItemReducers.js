import { Items } from "../../containers";

const { actions } = Items;
const DEFAULT_STATE = {
  listItem: [],
  isFetching: false,
  isError: false,
  message: "",
  totalPage: 1,
  activePage: 1,
  listSearch : [],
  listItemSearch : []
};
export default function HrReducer(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case actions.ADD_ITEMS_REQUEST:
    case actions.DELETE_ITEMS_REQUEST:
    case actions.UPDATE_ITEMS_REQUEST:
    case actions.PAGINATE_ITEMS_REQUEST:
    case actions.SEARCH_ITEMS_REQUEST:
    case actions.DROPDOWN_ITEMS_REQUEST:
    case actions.SEARCH_ITEMS_2_REQUEST:
    case actions.DELETE_ONE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };
    case actions.ADD_ITEMS_SUCCESS:
    case actions.UPDATE_ITEMS_SUCCESS:
    case actions.DELETE_ITEMS_SUCCESS:
    case actions.DELETE_ONE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

      case actions.PAGINATE_ITEMS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          listItem : payload.listData,
          totalPage : payload.totalPage,
          activePage : payload.activePage
        };

        case actions.SEARCH_ITEMS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          listItem : payload.listData,
          totalPage : payload.totalPage,
          activePage : payload.activePage,
          textSearch : payload.textSearch
        };
        case actions.DROPDOWN_ITEMS_SUCCESS:
          return {
            ...state,
            isFetching: false,
            listSearch : payload.listSearch,
            textSearch : payload.textSearch,
       
          };
        case actions.SEARCH_ITEMS_2_SUCCESS:
          return {
            ...state,
            isFetching: false,
            listItemSearch : payload.listItemSearch,
            totalPage : payload.totalPage,
            activePage : payload.activePage,
            textSearch : payload.textSearch
          };
    case actions.ADD_ITEMS_FAILURE:
    case actions.UPDATE_ITEMS_FAILURE:
    case actions.DELETE_ITEMS_FAILURE:
    case actions.PAGINATE_ITEMS_FAILURE:
    case actions.SEARCH_ITEMS_FAILURE:
    case actions.SEARCH_ITEMS_2_FAILURE:
    case actions.DROPDOWN_ITEMS_FAILURE:
    case actions.DELETE_ONE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };
    default:
      return state;
  }
}
