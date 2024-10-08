import React, { useEffect, useState, useRef } from "react";
import Modal from "../../components/Modal";
import { GetProductByNameOrBarcode } from "wails/go/repository/Repository";
import Loading from "../../components/Loading";
import { SearchInput } from "../../components/Input";
import { useDebounce } from "../../utils/hooks";


export default function ModalProduct(props) {
    const inputRef = useRef()
    const { modalState, onItemClick } = props

    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const q = useDebounce(search, 300)
    const [products, setProducts] = useState([])

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            if(products.length >= 1) {
                onItemClick(products[0])
            }
            modalState.toggle()
            props.inputRef.current.focus()
        }
    }

    const handleItemClick = (product) => {
        onItemClick(product)
        modalState.toggle()
    }

    useEffect(() => {
        setLoading(true)
        GetProductByNameOrBarcode(q, "", 10, 0)
        .then(products => {
            setProducts(products)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [q])

    useEffect(() => {
        if (modalState.isOpen === true) {
            inputRef.current.focus()
            if (modalState.data !== null) {
                setLoading(true)
                setSearch(modalState.data.keyword)
                GetProductByNameOrBarcode(modalState.data.keyword, "", 10, 0)
                .then(products => {
                    setProducts(products)
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
            }
        }
        return () => {}
    }, [modalState])

    return (
        <Modal
            isOpen={modalState.isOpen}
            toggle={modalState.toggle}
        >
            <div className="pb-4 space-y-2">
                <div className="flex flex-col w-full items-center my-2 h-m-product">
                    <SearchInput 
                        ref={inputRef} 
                        onChange={handleSearchChange} 
                        onKeyDown={handleSearchKeyDown}
                        value={search}
                    />
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-4">
                        <thead className="text-xs top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
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
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item) => (
                                <tr 
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" 
                                    key={item.ID}
                                    onClick={() => handleItemClick(item)}
                                >
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <>PAGINATION</>
                    {loading && (
                        <Loading/>
                    )}
                </div>
            </div>
        </Modal>
    )
}