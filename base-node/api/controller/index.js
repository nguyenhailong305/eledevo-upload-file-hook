const Models = require('../model/index')
const fs = require('fs')

exports.addItem = async (req, res, next) => {
    try {
        const fileImg = req.files
        const arrImg = []
        for(let i = 0; i < fileImg.length; i++) {
            const url = `http://localhost:3001/${fileImg[i].filename}`
            arrImg.push(url)
        }
        await Models.create({name : req.body.name , img : arrImg , time : Date.now()})
        res.send({})
    } catch (error) {
        res.send(error)
    }
}

exports.updateItem = async (req, res, next) => {
    try {
        const fileImg = req.files
        const arrImg = []
        for(let i = 0; i < fileImg.length; i++) {
            const url = `http://localhost:3001/${fileImg[i].filename}`
            arrImg.push(url)
        }
        if(fileImg.length === 0 ) {
            await Models.findByIdAndUpdate(req.params.id , {name : req.body.name })
        }else {
            const data = await Models.findByIdAndUpdate(req.params.id , {name : req.body.name , img : arrImg })
            for(let i = 0; i < data.img.length; i++) {
                fs.unlinkSync(`media/${data.img[i].slice(22)}`)
            }
        }
       
        res.send({})
    } catch (error) {
        res.send(error)
    }
}

exports.deleteItem = async (req, res, next) => {
    try {
           const data  = await Models.findByIdAndDelete(req.params.id)
            for(let i = 0; i < data.img.length; i++) {
                fs.unlinkSync(`media/${data.img[i].slice(22)}`)
        }
        res.send({})
    } catch (error) {
        res.send(error);
    }
}


exports.paginateItem = async (req , res , next) => {
    try {
        const limit = +req.query.limit
        const activePage = +req.query.activePage
        const skip = (activePage - 1)*limit
        const totalRecord = await Models.countDocuments({})
        const totalPage = Math.ceil(totalRecord / limit)
        const listData = await Models.find({}).skip(skip).limit(limit)
        res.send({listData , totalPage})
    } catch (error) {
        res.send(error)
    }
}
exports.searchItem = async (req, res, next) => {
    try {
        const name = req.query.textSearch
        const limit = +req.query.limit
        const activePage = +req.query.activePage
        const skip = (activePage - 1)*limit
        const totalRecord = await Models.countDocuments({name : {$regex : name , $options : 'i'}})
        const totalPage = Math.ceil(totalRecord / limit)
        const listData = await Models.find({name : {$regex : name , $options : 'i'}}).skip(skip).limit(limit)
        res.send({listData , totalPage })
    } catch (error) {
        res.send(error);
    }
}

exports.deleteOne = async (req, res, next) => {
    try {
        const index = req.query.index
        const data = await Models.findById(req.query.id)
        fs.unlinkSync(`media/${data.img[index].slice(22)}`)
        await data.img.splice(index, 1)
        await Models.findByIdAndUpdate(req.query.id , {img : data.img})
        res.send({})
    } catch (error) {
        res.send(error);
    }
}


exports.dropdownItem = async (req, res, next) => {
    try {
        let name = req.query.textSearch
        const listSearch = await Models.find({name : {$regex : name , $options : 'i'}})
        res.send({listSearch})
    } catch (error) {
        res.send(error);
    }
}

exports.search2Item = async (req, res, next) => {
    try {
        const id = req.query.id
        const name = req.query.textSearch 
        const limit = +req.query.limit
        const activePage = +req.query.activePage
        const skip = (activePage - 1)*limit
        const totalRecord = await Models.countDocuments({name : {$regex : name , $options : 'i'}})
        const totalPage = Math.ceil(totalRecord / limit) 
        await Models.find({name : {$regex : name , $options : 'i'}}).skip(skip).limit(limit)
        const listItemSearch = await Models.findById(id)
        res.send({listItemSearch , totalPage})
    } catch (error) {   
        res.send(error);
    }
}