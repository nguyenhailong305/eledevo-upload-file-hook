import React, { useEffect, useState } from "react";
import { UseItem } from "../hooks"
export default function Items() {
   
    const {
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
      
    } = UseItem();
    useEffect(() => {
        handlePaginateItem({activePage: 1})
    }, []);
   
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [fileImg , setFileImg ] = useState([])
    const [prevImg , setPrevImg] = useState([])
    const [idUpdate, setIdUpdate] = useState('')
    const [nameUpdate, setNameUpdate] = useState('')
    const [textSearch , setTextSearch] = useState('')
    const [checkSearch , setCheckSearch] = useState('')

    const handleAdd = (file) => {
        setFileImg(file)
        let arrImg = []
        for(let i = 0; i < file.length; i++){
            const url = URL.createObjectURL(file[i])
            arrImg.push(url)
        }
        setPrevImg(arrImg)

    }
  
    const handleClear = () => {
        const file = document.querySelector(".file")
        file.value = ""
        setName(''),setPrevImg([]),setTextSearch(''),setNameUpdate('')  
    }
  

    let paginate = []
    for(let i = 1; i <=totalPage; i++){
        let button = (
            <button key={i} onClick={() => {nameSearch ? handleSearchItem({
                activePage : i , textSearch : nameSearch
            }) : handlePaginateItem({activePage : i})}} style={{backgroundColor : activePage === i ? 'blue' : ' white'}}>{i}</button>
        )
        paginate.push(button)
    }
    let listData = []
    let searchDropDown = []
    let searchList = []
    {searchDropDown = listSearch.map((items , b) => {
        return (
            <tr key={b} onClick={() => { handleSearch2Item({id : items._id , activePage : 1  ,textSearch : textSearch})
            setCheckSearch(true) , setTextSearch('') }
            }>
                <td>{items._id}</td>
                <td style={{width: '250px'}}>{items.name}</td>
                <td>{items.img.map((img, i) =>{
                    return (
                        <div key={i}>
                            <img src={img} alt="anh loi" width="50" height="50"/>
                        </div>
                    )
                })}</td>
               
            </tr>
        )
    })}

    {searchList = listItemSearch.map((itemC , c) => {
        return (
            <tr key={c}>
                <td>{itemC._id}</td>
                <td>{itemC.name}</td>
                <td>{itemC.img.map((img, i) =>{
                    return (
                        <div key={i}>
                            <img src={img} alt="anh loi" width="90" height="90"/>
                        </div>
                    )
                })}</td>
               
            </tr>
        )
    })}

    {
        listData = items.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.img.map((img, a) =>{
                        return (
                            <span key={a}>
                                <img src={img} alt="anh loi" width="90" height="90"/>
                                <button onClick={() => handleDeleteOneItem({id : item._id , index : a})} style={{visibility : item.img.length < 2 ? 'hidden' : 'visible'}} >X</button>
                            </span>
                        )
                    })}</td>
                    <td>
                    <button onClick={() => {
                        setIdUpdate(item._id) ,
                        setNameUpdate(item.name) ,
                        setPrevImg(item.img)}} >EDIT</button>
                          <button onClick={() => handleDeleteItem({id : item._id})} >DELETE</button>
                    </td>
           
                </tr>
            )
        })
        
    }
    return (
        <div>
            {prevImg.map((item , a) => {
                return (
                    <div key={a}>
                        <img src={item} alt="anh loi" width="90" height="90"/>
                    </div>
                )
            })}
            <input multiple type="file" onChange={(e) => handleAdd(e.target.files)} className="file"/>
            <br />
            <input onChange={(e) => setName(e.target.value)} value={name}/>
            <button onClick={() =>{ if(name === "") {
                    alert("Vui lòng nhập tên")
            }else if ( fileImg.length === 0){
                   alert("Vui lòng nhập ảnh");         
            }else {
                 handleAddItem({name : name , img : fileImg})
            }  ; handleClear()  }}>ADD</button>
            <br />
            <input onChange={(e) => setNameUpdate(e.target.value)} value={nameUpdate}/>
            <button onClick={() => { if(nameUpdate === "") {
                    alert("Vui lòng nhập tên cần sửa")     
            }else {
                 handleUpdateItem({name : nameUpdate , img : fileImg , id : idUpdate})
            }; handleClear()  }  }>UPDATE</button>
            <br />
            <input onChange={(e) => { setTextSearch(e.target.value), handleDropdownItem({textSearch : e.target.value , activePage : 1}) }} style={{position: 'relative' ,width: '400px'}} value={textSearch}/>
            <button onClick={() => { if(textSearch === "") {
                    alert("Vui lòng nhập tên cần tìm")       
            }else {
                 handleSearchItem({textSearch : textSearch , activePage : 1 })
            }; handleClear()  } }>SEARCH</button>

            <div style={{ visibility: textSearch ? 'visible' : 'hidden', position: 'absolute', backgroundColor: 'white', width: '400px' }}>
                <table>
                    <tbody>
                    {searchDropDown}
                    </tbody>
                </table>
            </div>       
           <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>Ten</th>
                    <th>Anh</th>
                    <th>Hanh dong</th>
                </tr>
                </thead>
                
                <tbody>
                     {checkSearch === true ? searchList : listData} 
                </tbody>
                
           </table>
           {paginate}
          <div>
 
          </div>
        </div>
    )
}

