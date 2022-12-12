import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { useBucket } from "../../context/AppContext";
import ModalSync from "./ModalSync";

export default function Transaction() {
    const { logout, user } = useBucket()
    const navigate = useNavigate()

    const back = () => {
        navigate("/")
    }

    const handleKeyPress = useCallback((event) => {
        console.log(`Key pressed: ${event.key}`);
    }, []);

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
        <div className="font-bold text-gray-50 bg-gray-900 min-h-screen p-1">
            <div className="text-2xl my-4">
                KasirAja POS
            </div>
            <div className="flex justify-between">
                <div>Pelanggan</div>
                <div>09-12-2022</div>
            </div>
            <div className="flex w-full justify-center my-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-4">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Kode
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nama
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Harga Beli
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Harga Jual
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Kategori
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Satuan Stok
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
                                <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    CODE001
                                </td>
                                <td className="py-4 px-6">
                                    P-10
                                </td>
                                <td className="py-4 px-6">
                                    10.000
                                </td>
                                <td className="py-4 px-6">
                                    9.000
                                </td>
                                <td className="py-4 px-6">
                                    CateHeho
                                </td>
                                <td className="py-4 px-6">
                                    PCS
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex space-x-2">
                <Button size="xs">
                    Cari Barang (f3)
                </Button>
                <Button size="xs">
                    Proses (f4)
                </Button>
                <Button size="xs" onClick={() => back()}>
                    Back (f4)
                </Button>
                <Button size="xs" onClick={() => logout()}>
                    Logout (f10)
                </Button>
            </div>
            
            <ModalSync/>
        </div>
    )
}