import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from "../actions/ItemActions"

export const UseItem = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.listItem)
    const totalPage = useSelector((state) => state.items.totalPage)
    const activePage = useSelector((state) => state.items.activePage)
    const nameSearch = useSelector((state) => state.items.textSearch)
    const listSearch = useSelector((state) => state.items.listSearch)
    const listItemSearch = useSelector((state) => state.items.listItemSearch)
  
    const handleAddItem = (data) => dispatch(ItemAction.addRequest(data))
    const handleDeleteItem = (data) => dispatch(ItemAction.deleteRequest(data))
    const handleUpdateItem = (data) => dispatch(ItemAction.updateRequest(data))
    const handlePaginateItem = (data) => dispatch(ItemAction.paginateRequest(data))
    const handleSearchItem = (data) => dispatch(ItemAction.searchRequest(data))
    const handleDropdownItem = (data) => dispatch(ItemAction.dropdownRequest(data))
    const handleSearch2Item = (data) => dispatch(ItemAction.search2Request(data))
    const handleDeleteOneItem = (data) => dispatch(ItemAction.deleteOneRequest(data))
  
    return {
        items , 
        totalPage,
        activePage,
        nameSearch,
        listSearch,
        listItemSearch,
        handleAddItem,
        handleDeleteItem,
        handlePaginateItem,
        handleSearchItem,
        handleDeleteOneItem,
        handleUpdateItem,
        handleSearch2Item,
        handleDropdownItem
    } 
}