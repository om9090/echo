import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-10">
            <div className="mx-auto p-8 max-w-screen-2xl">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 text-gray-700">
                        <Icon icon="material-symbols:wifi" className="w-8 h-8 text-blue-500" />
                        <Link to="/" className="font-bold text-2xl">echo</Link>
                    </div>
                    <nav className="flex gap-4 text-lg font-semibold">
                        <Link to="/login">
                            Login
                        </Link>
                        <Link to="/register">Register</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header