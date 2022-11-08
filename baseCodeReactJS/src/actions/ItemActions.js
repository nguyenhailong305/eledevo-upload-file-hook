import { createAction } from '@reduxjs/toolkit'
import {Items} from '../containers' 

export const ItemAction = {
    addRequest : createAction(Items.actions.ADD_ITEMS_REQUEST),
    addSuccess : createAction(Items.actions.ADD_ITEMS_SUCCESS),
    addFailure : createAction(Items.actions.ADD_ITEMS_FAILURE),

    deleteRequest : createAction(Items.actions.DELETE_ITEMS_REQUEST),
    deleteSuccess : createAction(Items.actions.DELETE_ITEMS_SUCCESS),
    deleteFailure : createAction(Items.actions.DELETE_ITEMS_FAILURE),

    updateRequest : createAction(Items.actions.UPDATE_ITEMS_REQUEST),
    updateSuccess : createAction(Items.actions.UPDATE_ITEMS_SUCCESS),
    updateFailure : createAction(Items.actions.UPDATE_ITEMS_FAILURE),

    paginateRequest : createAction(Items.actions.PAGINATE_ITEMS_REQUEST),
    paginateSuccess : createAction(Items.actions.PAGINATE_ITEMS_SUCCESS),
    paginateFailure : createAction(Items.actions.PAGINATE_ITEMS_FAILURE),

    searchRequest : createAction(Items.actions.SEARCH_ITEMS_REQUEST),
    searchSuccess : createAction(Items.actions.SEARCH_ITEMS_SUCCESS),
    searchFailure : createAction(Items.actions.SEARCH_ITEMS_FAILURE),

    deleteOneRequest : createAction(Items.actions.DELETE_ONE_REQUEST),
    deleteOneSuccess : createAction(Items.actions.DELETE_ONE_SUCCESS),
    deleteOneFailure : createAction(Items.actions.DELETE_ONE_FAILURE),

    dropdownRequest : createAction(Items.actions.DROPDOWN_ITEMS_REQUEST),
    dropdownSuccess : createAction(Items.actions.DROPDOWN_ITEMS_SUCCESS),
    dropdownFailure : createAction(Items.actions.DROPDOWN_ITEMS_FAILURE),

    search2Request : createAction(Items.actions.SEARCH_ITEMS_2_REQUEST),
    search2Success : createAction(Items.actions.SEARCH_ITEMS_2_SUCCESS),
    search2Failure : createAction(Items.actions.SEARCH_ITEMS_2_FAILURE),
}
