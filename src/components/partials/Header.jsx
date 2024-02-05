import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'

const Header = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    useEffect(() => {
        const getProfile = async () => {
            const response = await axios.get('http://localhost:3000/profile', {
                withCredentials: true,
            })
            if (response.status === 200) {
                setUserInfo(response?.data?.user)
            }
        }
        getProfile()

    }, [])

    const userName = userInfo?.name
    const logout = async () => {
        const response = await axios.get('http://localhost:3000/logout', {
            withCredentials: true,
        })
        if (response.status === 200) {
            setUserInfo(null)
        }
    }
    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-10">
            <div className="mx-auto p-8 max-w-screen-2xl">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 text-gray-700">
                        <Icon icon="material-symbols:wifi" className="w-8 h-8 text-blue-500" />
                        <Link to="/" className="font-bold text-2xl">echo</Link>
                    </div>
                    <nav className="flex gap-4 text-lg font-semibold items-center">
                        {userName ? (
                            <>
                                <button className='flex flex-row items-center'>
                                    <Icon icon="gridicons:add-outline" className="w-8 h-8" />
                                </button>
                                <Link to="/profile">
                                    {userName}
                                </Link>
                                <Icon icon="tabler:logout" className="w-8 h-8" onClick={logout} />
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    Login
                                </Link>
                                <Link to="/register">Register</Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header