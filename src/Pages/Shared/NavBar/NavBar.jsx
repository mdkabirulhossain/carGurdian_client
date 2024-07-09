import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const NavBar = () => {
    const{users, LogOut} = useContext(AuthContext);
    const handleLogout = ()=>{
        LogOut()
        .then(()=>{
            alert("signOut successfully");
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const navItems = <>
        <li className="font-semibold"><Link to="/">Home</Link></li>
        <li className="font-semibold"><Link to="/about">About</Link></li>
        <li className="font-semibold"><Link to="#">Service</Link></li>
        <li className="font-semibold"><Link to="#">Blog</Link></li>
        <li className="font-semibold"><Link to="#">Contact</Link></li>
        
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CarGURDIAN</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            {
                users?.email? <>
                <button onClick={handleLogout} className="font-semibold m-4">Logout</button>
                   
                </> : <>
                <Link to='/login' className="font-semibold m-4">LogIn</Link>
                <Link to='/signup' className="font-semibold m-4">SignUp</Link>
                </>
            }

            <button className="btn btn-outline btn-warning font-semibold">Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;