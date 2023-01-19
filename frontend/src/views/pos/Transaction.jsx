import React, { useEffect, useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { useBucket } from "../../context/AppContext";
import { defaultItems, formatIDR } from "./helper";
import { useModalState } from "../utils/hooks";
import { GetProductByNameOrBarcode } from "wails/go/repository/Repository";
import ModalSync from "./ModalSync";
import ModalProduct from "./Products/ModalProduct";
import { HiX } from "react-icons/hi";


export default function Transaction() {
    const { logout, user } = useBucket()
    const navigate = useNavigate()

    const inputRef = useRef()

    const [customer, setCustomer] = useState(null)
    const [items, setItems] = useState(() => defaultItems())

    const productModal = useModalState()
    const [input, setInput] = useState("")

    const handleInputOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleInputOnKey = (e) => {
        if (e.key === 'Enter') {
            GetProductByNameOrBarcode(input, input, 10, 0)
            .then((products) => {
                if (products.length === 1){
                    handleAddItem(products[0])
                } else {
                    toggleProductModal()
                }
            })
            .finally(() => setInput(""))
        }
    }

    const toggleProductModal = () => {
        productModal.setData({keyword: input})
        productModal.toggle()
    }
    
    const handleItemProductModalClick = (product) => {
        handleAddItem(product)
    }

    const handleAddItem = (product) => {
        const isExists = items.find(i => i.ID === product.ID)
        if(isExists) {
            setItems(items.map(item => {
                if (item.ID == product.ID) {
                    return {
                        ...item,
                        Quantity: item.Quantity + 1
                    }
                }
                return item
            }))
            return  
        }

        const Index = items.findIndex(i => i.ID === "")

        if (Index !== -1) {
            setItems(items.map((item, i) => {
                if (i === Index) {
                    return {
                        ID: product.ID,
                        Barcode: product.Barcode, 
                        Name: product.Name,
                        Price: product.Price,
                        UnitName: product.UnitName,
                        Quantity: 1
                    }
                }
                return item
            }))
        } else {
            setItems(items.concat({
                ID: product.ID,
                Barcode: product.Barcode, 
                Name: product.Name,
                Price: product.Price,
                UnitName: product.UnitName,
                Quantity: 1
            }))
        }
    }

    const handleAddQuantityItem = (product, e) => {
        setItems(items.map(item => {
            if(item.ID === product.ID) {
                return {
                    ...item,
                    Quantity: e.target.value
                }
            }
            return item
        }))
    }

    const handleEnterInput = (e) => {
        if(e.key === 'Enter') {
            inputRef.current.focus()
        }
    }

    const handleRemoveItem = (product) => {
        setItems(items.filter(item => item.ID !== product.ID))
    }
    
    const handleReset = () => {
        setItems(() => defaultItems())
    }

    const handleKeyPress = useCallback((event) => {
        if (event.key === 'F2') {
            productModal.toggle()
        }
        if (event.key === 'F4') {
            handleReset()
        }
        if (event.key === 'F9') {
            logout()
        }
    }, []);
   
    const total = items.reduce((mt, item) => {
        return mt + (+item.Quantity * +item.Price)
    }, 0)

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
            <div className="flex justify-between items-end">
                <div>
                    <div>
                        {(new Date()).toLocaleDateString()}
                    </div>
                    <div>
                        Kasir : {user?.EmployeeName}
                    </div>
                    <div>
                        Pelanggan :
                    </div>
                </div>
                <div className="w-1/2 flex justify-between items-end flex-row text-4xl font-bold">
                    <div>TOTAL: </div>
                    <div>{formatIDR(total)}</div>
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
                            <th scope="col" className="text-right">
                                Jumlah
                            </th>
                            {/* TODO LATER */}
                            {/* <th scope="col" className="pr-6 text-right">
                                Disc
                            </th>
                            <th scope="col" className="pr-6 text-right">
                                Disc (%)
                            </th> */}
                            <th scope="col" className="py-3 px-6 text-right">
                                Subtotal
                            </th>
                            <th></th>
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
                                    {item.Price !==  "" ? formatIDR(item.Price) : ""}
                                </td>
                                <td className="px-6">
                                    {item.UnitName}
                                </td>
                                <td className="py-2 text-right">
                                    <input 
                                        className="h-8 w-20 text-right bg-gray-800" 
                                        value={item.Quantity}
                                        onChange={e => handleAddQuantityItem(item, e)}
                                        onKeyDown={e => handleEnterInput(e)}
                                    />
                                </td>
                                {/* TODO LATER */}
                                {/* <td className="py-2">
                                    <input className="h-8 w-20 text-right bg-gray-800" />
                                </td>
                                <td className="py-2">
                                    <input className="h-8 w-20 text-right bg-gray-800" />
                                </td> */}
                                <td className="px-6 text-right">
                                    {item.ID !== "" ? formatIDR(item.Quantity * item.Price) : ""}
                                </td>
                                <td className="px-6 text-right text-red-600">
                                    {item.ID !== "" && (
                                        <HiX onClick={() => handleRemoveItem(item)}/>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-full my-2">
                <input
                    ref={inputRef}
                    className="w-full h-16 text-gray-900 text-5xl border-blue-600"
                    // autoFocus={true}
                    onChange={handleInputOnChange}
                    onKeyDown={handleInputOnKey}
                    value={input}
                />
            </div>
            <div className="flex space-x-2 justify-end">
                <Button size="xs" onClick={productModal.toggle}>
                    Cari Barang (f2)
                </Button>
                <Button size="xs">
                    Simpan (f5)
                </Button>
                <Button size="xs">
                    Pelanggan (f6)
                </Button>
                <Button size="xs" onClick={() => handleReset()}>
                    Kosongkan (f4)
                </Button>
                <Button size="xs" onClick={() => logout()}>
                    Logout (f9)
                </Button>
                
            </div>
            <ModalProduct 
                modalState={productModal}
                onItemClick={handleItemProductModalClick}
                keyword={input}
                inputRef={inputRef}
            />
            <ModalSync />
        </div>
    )
}