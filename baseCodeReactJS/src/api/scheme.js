import {API_METHOD as METHOD , BASE_URL} from "../containers"
const API_SCHEME = {
    ITEM : {
        ADD_ITEM : {
            url : `${BASE_URL}/item`,
            method : METHOD.POST
        },
        DELETE_ITEM : {
            url : `${BASE_URL}/item/:id`,
            method : METHOD.DELETE
        },
        UPDATE_ITEM : {
            url : `${BASE_URL}/item/:id`,
            method : METHOD.PUT
        },
        PAGINATE_ITEM : {
            url : `${BASE_URL}/item/paginate`,
            method : METHOD.GET
        },
        SEARCH_ITEM : {
            url : `${BASE_URL}/item/search`,
            method : METHOD.GET
        },
        DELETE_ONE_ITEM : {
            url : `${BASE_URL}/item`,
            method : METHOD.DELETE
        },
        DROPDOWN_ITEM : {
            url : `${BASE_URL}/item/searchDrop`,
            method : METHOD.GET
        },
        SEARCH_2_ITEM : {
            url : `${BASE_URL}/item/searchItem`,
            method : METHOD.GET
        },
    }
}

export default API_SCHEME