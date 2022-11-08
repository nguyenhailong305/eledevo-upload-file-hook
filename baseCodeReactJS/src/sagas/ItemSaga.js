import { put, takeLatest  , select} from "@redux-saga/core/effects";
import { ItemAction } from "../actions/ItemActions";
import { itemApi } from "../api"
import { Items, LIMIT } from "../containers";

function* handleAddItem({payload}) {
    try {
        const formData = new FormData();
        formData.append('name' , payload.name)
        for(let i = 0; i < payload.img.length; i++) {
            formData.append('img' , payload.img[i])
            
        }
        yield itemApi.addItem(null, null, formData) //param , query , data
        yield put(ItemAction.addSuccess())
        const res = yield itemApi.paginateItem(null, {activePage : `${payload.activePage}&` , limit : LIMIT}, payload) //param , query , data
        yield put(ItemAction.paginateRequest({activePage : res.totalPage}))
        
    } catch (error) {
        yield put(ItemAction.addFailure({
            message: error.message
        }))
    }
}

function* handleDeleteItem({payload}) {
    
    try {
        const store = yield select((state) => state.items)
        yield itemApi.deleteItem({id : payload.id}, null, payload) //param , query , data
        yield put(ItemAction.deleteSuccess())
        if(store.textSearch) {
            if(store.listItem.length === 1 && store.activePage === 1 ){
                yield put(ItemAction.searchRequest({
                    textSearch : store.textSearch,
                    activePage : 1
                }))
            }else if (store.listItem.length <=1) {
                yield put(ItemAction.searchRequest({
                    textSearch : store.textSearch,
                    activePage : store.totalPage -=1
                }))
            }else {
                yield put(ItemAction.searchRequest({
                    textSearch : store.textSearch,
                    activePage : store.activePage
                }))
            }
        }else {
            if(store.listItem.length <= 1 && store.activePage === 1) {
                yield put(ItemAction.paginateRequest({activePage : 1}))
            }else if(store.listItem.length <= 1 ) {
                yield put(ItemAction.paginateRequest({activePage : store.activePage -=1}))
            }else {
                yield put(ItemAction.paginateRequest({activePage : store.activePage}))
            }
        }
        
    } catch (error) {
        yield put(ItemAction.deleteFailure({
            message: error.message
        }))
    }
}

function* handleUpdateItem({payload}) {
    try {
        const store = yield select((state) => state.items)
        const formData = new FormData();
        formData.append('name' , payload.name)
        for(let i = 0; i < payload.img.length; i++) {
            formData.append('img' , payload.img[i])
            
        }
        yield itemApi.updateItem({id : payload.id}, null , formData) //param , query , data
        console.log(payload , 'aaaaaaaaa');
        yield put(ItemAction.updateSuccess())
        yield put(ItemAction.paginateRequest({activePage : store.activePage}))
  
    } catch (error) {
        yield put(ItemAction.updateFailure({
            message: error.message
        }))
    }
}

function* handlePaginateItem({payload}) {
    try {
        const res = yield itemApi.paginateItem(null, {activePage : `${payload.activePage}&` , limit : LIMIT}, payload) //param , query , data
        if(res.totalPage === 0) {
            res.totalPage = 1
        }
        yield put(ItemAction.paginateSuccess({
            listData : res.listData,
            totalPage : res.totalPage,
            activePage : payload.activePage
        }))
    } catch (error) {
        yield put(ItemAction.paginateFailure({
            message: error.message
        }))
    }
}

function* handleSearchItem({payload}) {
    try {
        const res = yield itemApi.searchItem(null, {activePage : `${payload.activePage}&` ,textSearch :`${payload.textSearch}&`, limit : LIMIT}, payload) //param , query , data
        if(res.totalPage === 0) {
            res.totalPage = 1
        }
        yield put(ItemAction.searchSuccess({
            listData : res.listData,
            totalPage : res.totalPage,
            activePage : payload.activePage,
            textSearch : payload.textSearch
        }))
    } catch (error) {
        yield put(ItemAction.searchFailure({
            message: error.message
        }))
    }
}


function* handleDeleteOneItem({payload}) {
    try {
        yield itemApi.deleteOneItem(null, {id : `${payload.id}&` ,  index : payload.index }, payload) //param , query , data
        yield put(ItemAction.deleteOneSuccess())
        yield put(ItemAction.paginateRequest({activePage : 1}))

    } catch (error) {
        yield put(ItemAction.deleteOneFailure({
            message: error.message
        }))
    }
}

function* handleDropdownItem({payload}) {
    try {
        const res = yield itemApi.dropdownItem(null, {activePage : `${payload.activePage}&` , textSearch : `${payload.textSearch}&` , limit: LIMIT}, payload) //param , query , data
        yield put(ItemAction.dropdownSuccess({
            listSearch : res.listSearch
        }))

    } catch (error) {
        yield put(ItemAction.dropdownFailure({
            message: error.message
        }))
    }
}

function* handleSearch2Item({payload}) {
 
    try {
        const res = yield itemApi.search2Item(null  ,{id : `${payload.id}&` , activePage : `${payload.activePage}&` , textSearch : `${payload.textSearch}&`, limit: LIMIT  }, payload) //param , query , data
        yield put(ItemAction.search2Success({
            listItemSearch : [res.listItemSearch],
            totalPage : res.totalPage,
            activePage : payload.activePage,
            textSearch : payload.textSearch
        }))

    } catch (error) {
        yield put(ItemAction.search2Failure({
            message: error.message
        }))
    }
}


const itemSaga = [
    takeLatest(Items.actions.ADD_ITEMS_REQUEST, handleAddItem),
    takeLatest(Items.actions.DELETE_ITEMS_REQUEST, handleDeleteItem),
    takeLatest(Items.actions.UPDATE_ITEMS_REQUEST, handleUpdateItem),
    takeLatest(Items.actions.PAGINATE_ITEMS_REQUEST, handlePaginateItem),
    takeLatest(Items.actions.SEARCH_ITEMS_REQUEST, handleSearchItem),
    takeLatest(Items.actions.DELETE_ONE_REQUEST, handleDeleteOneItem),
    takeLatest(Items.actions.DROPDOWN_ITEMS_REQUEST, handleDropdownItem),
    takeLatest(Items.actions.SEARCH_ITEMS_2_REQUEST, handleSearch2Item),
   
]
export default itemSaga