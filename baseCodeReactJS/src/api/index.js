import {Helpers} from '../utils';
import Api from './scheme'

export const itemApi = {
    addItem : Helpers.createApi(Api.ITEM.ADD_ITEM),
    deleteItem : Helpers.createApi(Api.ITEM.DELETE_ITEM),
    updateItem : Helpers.createApi(Api.ITEM.UPDATE_ITEM),
    paginateItem : Helpers.createApi(Api.ITEM.PAGINATE_ITEM),
    searchItem : Helpers.createApi(Api.ITEM.SEARCH_ITEM),
    deleteOneItem : Helpers.createApi(Api.ITEM.DELETE_ONE_ITEM),
    dropdownItem : Helpers.createApi(Api.ITEM.DROPDOWN_ITEM),
    search2Item : Helpers.createApi(Api.ITEM.SEARCH_2_ITEM),
}