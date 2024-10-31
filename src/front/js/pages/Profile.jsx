import React, { useContext } from "react"
import { Context } from "../store/appContext"
import { Navigate } from "react-router-dom"

const Profile = () => {

    const { store } = useContext(Context)
    const { user } = store

    return (
        <div className="text-center mt-5">
            {
                store.token ?
                    <>
                        <h1>Hola soy tu perfil</h1>
                    </>
                    :
                    <Navigate to="/login" />
            }

        </div>
    )
}

export default Profile