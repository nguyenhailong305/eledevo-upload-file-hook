const ItemController = require('../controller/index')

const routers = (app) => {
    app.post('/item' , ItemController.addItem)
    app.put('/item/:id', ItemController.updateItem)
    app.delete('/item/:id', ItemController.deleteItem)
    app.get('/item/paginate', ItemController.paginateItem)
    app.get('/item/search', ItemController.searchItem)
    app.delete('/item', ItemController.deleteOne)
    app.get('/item/searchDrop', ItemController.dropdownItem)
    app.get('/item/searchItem', ItemController.search2Item)
}

module.exports = routers