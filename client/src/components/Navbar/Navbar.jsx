import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Avatar from '../Avatar/Avatar'
import { useSelector,useDispatch } from 'react-redux'
import logo from '../../assests/logo.png'
import Search from '../../assests/magnifying-glass-solid.svg'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
    const dispatch = useDispatch()
    var User = useSelector((state)=>(state.currentUserReducer));
    useEffect(()=>{
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])
    return (
        <nav className='main-nav'>
            <div className="navbar">
                <Link to='/' className=' nav-logo'>
                    <img src={logo} alt="logo" width='200' height='55' />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Team</Link>
                <form >
                    <>
                        <input type="text" placeholder='Search...' />
                        <img src={Search} alt="search" className='search-icon' width='18' />
                    </>
                </form>
                {User == null ?
                    <Link to='/Auth' className='nav-item nav-link'>Log In</Link> :
                    <>
                        <Avatar backgroundColor='blue' px='10px' py='7px' borderRadius='50%'><Link to='/User' style={{ color: 'white', textDecoration: 'none' }}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                        <button className='nav-item nav-link'>LogOut</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar