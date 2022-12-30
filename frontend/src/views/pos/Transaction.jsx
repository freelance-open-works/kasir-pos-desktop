import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { useBucket } from "../../context/AppContext";
import ModalSync from "./ModalSync";
import Modal from "../components/Modal";
import { defaultItems } from "./helper";
import { GetSearchProduct } from "wails/go/repository/Repository"
import ModalProduct from "./Products/ModalProduct";

export default function Transaction() {
    const { logout, user } = useBucket()
    const navigate = useNavigate()

    const [customer, setCustomer] = useState(null)
    const [items, setItems] = useState(() => defaultItems())
    const [tmpitems, setTmpItems] = useState(() => defaultItems())
    const [isOpen, SetOpen] = useState(false)
    const [search, SetSearh] = useState()
    const addItem = (e) => {
        console.log(e.target.value)
        SetSearh(e.target.value);
        // if (e.keyCode === 13) {
        //     GetSearchProduct(e.target.value).then((result)=>(setItems(result)))
        // }
        

        // const Index = items.findIndex(i => {
        //     console.log("I", i)
        //     return i.Barcode === ""
        // })
        // if (Index === -1) {
        //     setItems(items.concat({
        //         Barcode: e.target.value, 
        //         Name: e.target.value,
        //         Price: 0,
        //         UnitName: "",
        //     }))
        // } else {
        //     setItems(items.map((item, i) => {
        //         if (i === Index) {
        //             return {
        //                 ...item,
        //                 Barcode: e.target.value, 
        //                 Name: e.target.value
        //             }
        //         }
        //         return item
        //     }))
        // }
    }

    // enter
    const handleEnterOnInput = (e) => {
       
        if (e.key === 'Enter') {
            console.log("Search : "+search)
            GetSearchProduct(search).then((result) => {
                if (result.length===1){
                    setItems(result)
                }else{
                    toggle()
                }
            })
        }
    }
    
    const back = () => {
        navigate("/")
    }
    
    const handleKeyPress = useCallback((event) => {
        // console.log(`Key pressed: ${event.key}`);
        if (event.key === 'F2') {
            toggle()
        }
        if (event.key === 'F4') {
            setItems(() => defaultItems())
        }
        if (event.key === 'F9') {
            logout()
        }
    }, [isOpen,items]);
    const toggle = () => {
        console.log(isOpen)
        if (isOpen == true) {
             GetSearchProduct("").then((result) => {
                setTmpItems(result)
            })
        }
        SetOpen(!isOpen)
    }
   
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    useEffect(() => {
        if (user === null) {
            navigate("/")
        }
    }, [user])

    return (
        <div className="font-bold text-gray-50 bg-gray-900 min-h-screen py-1 px-4">
            <div className="text-2xl my-4">
                KasirAja POS
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <div>
                        Kasir : {user?.EmployeeName}
                    </div>
                    <div>
                        Pelanggan :
                    </div>
                </div>
                <div>
                    <div>{(new Date()).toLocaleDateString()}</div>
                </div>
            </div>
            <div className="flex w-full justify-center my-2 h-100 table-wrp">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-4">
                    <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Barcode
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nama
                            </th>
                            <th scope="col" className="py-3 px-6 text-right">
                                Harga
                            </th>
                            <th scope="col" className="py-3 px-6 text-left">
                                Satuan
                            </th>
                            <th scope="col" className="pr-6 text-right">
                                Qty
                            </th>
                            <th scope="col" className="pr-6 text-right">
                                Disc
                            </th>
                            <th scope="col" className="pr-6 text-right">
                                Disc (%)
                            </th>
                            <th scope="col" className="py-3 px-6 text-right">
                                Subtotal
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <td scope="row" className="py-2 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.Barcode}
                                </td>
                                <td className="px-6">
                                    {item.Name}
                                </td>
                                <td className="px-6 text-right">
                                    {item.Price}
                                </td>
                                <td className="px-6">
                                    {item.UnitName}
                                </td>
                                <td className="py-2">
                                    <input className="h-8 w-20 text-right bg-gray-800" />
                                </td>
                                <td className="py-2">
                                    <input className="h-8 w-20 text-right bg-gray-800" />
                                </td>
                                <td className="py-2">
                                    <input className="h-8 w-20 text-right bg-gray-800" />
                                </td>
                                <td className="px-6 text-right">

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-full my-2">
                <input
                    className="w-full h-16 text-gray-900 text-5xl border-blue-600"
                    autoFocus={true}
                    onChange={addItem}
                    onKeyDown={handleEnterOnInput}
                />
            </div>
            <div className="flex space-x-2 justify-end">
                <Button size="xs">
                    Cari Barang (f2)
                </Button>
                <Button size="xs">
                    Simpan (f5)
                </Button>
                <Button size="xs">
                    Pelanggan (f6)
                </Button>
                <Button size="xs" onClick={() => back()}>
                    Kosongkan (f4)
                </Button>
                <Button size="xs" onClick={() => logout()}>
                    Logout (f9)
                </Button>
                <ModalProduct isOpen={isOpen} toggle={toggle} title={"Cari Barang"} listproduct={tmpitems}/>
            </div>
            
            <ModalSync />
        </div>
    )
}