import React from "react";
import { forwardRef } from "react";
import { HiSearch } from "react-icons/hi";

const SearchInput = forwardRef((props, ref) => { 
    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <HiSearch className='text-base dark:text-white'/>
            </div>
            <input 
                ref={ref}
                type="text" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Search" 
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                value={props.value}
                autoComplete="off"
            />
        </div>
    )
})

export { SearchInput }
