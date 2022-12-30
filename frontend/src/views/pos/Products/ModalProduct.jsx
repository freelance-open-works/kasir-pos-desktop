import React from "react";
import { HiX } from "react-icons/hi";

export default function ModalProduct({ isOpen, toggle = () => { }, listproduct, title = "",maxW = '2'}) {
    return (
        <div className={`${isOpen ? "" : "hidden "} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full justify-center items-center flex bg-opacity-50 dark:bg-opacity-90 bg-gray-900 dark:bg-gray-900`}>
            <div className={`relative w-full max-w-${maxW}xl h-full md:h-auto`}>
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 text-base dark:text-gray-400">
                    <div className="flex items-start justify-between rounded-t dark:border-gray-600 p-2">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white py-2 pl-2">{title}</h3>
                        <button aria-label="Close" className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" type="button" onClick={toggle}>
                            <HiX className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="px-4 pb-4 space-y-2">
                        <div className="flex w-full justify-center my-2 h-100 table-wrp">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-4">
                                <thead className="text-xs top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                    {listproduct.map((item, index) => (
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
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}