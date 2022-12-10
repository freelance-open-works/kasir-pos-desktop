import axios from "axios";
import React, { useState, useMemo, useContext, useEffect } from "react"
import { GetBaseUrl } from "../../wailsjs/go/main/App";

const AxiosInstance = axios.create()
const AppContext = React.createContext()

function AppProvider(props) {
    const [user, setUser] = useState(null)
    const [bucket, setBucket] = useState(null)

    const value = useMemo(
        () => ({
            user,
            setUser,
            bucket,
            setBucket,
        }),
        [bucket, setBucket, user, setUser]
    )

    useEffect(() => {
        GetBaseUrl()
        .then(url => {
            setBucket({
                BASE_URL: url
            })
            AxiosInstance.defaults.baseURL = url
            // debug
            console.log(url)
        })
    }, [])

    return (
        <div creator={'Aji Kamaludin (aji19kamaludin)'}>
            <AppContext.Provider value={value} {...props} />
        </div>
    )
}

function useBucket() {
    const appContext = useContext(AppContext)

    if (!appContext) {
        throw Error('useBucket must be used within AppProvider')
    }

    const {
        bucket,
        setBucket,
        user, 
        setUser
    } = appContext

    const changeBucket = (value = {}) => {
        setBucket({
            ...bucket,
            ...value
        })
    }

    const logout = () => {
        setUser(null)
    }

    return {
        bucket,
        user,
        setUser,
        logout,
        changeBucket
    }
}

export { AppProvider, useBucket, AxiosInstance as Axios }