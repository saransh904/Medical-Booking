import { useContext, useEffect, useRef } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { authContext } from '../../context/AuthContext.jsx';

const navLinks =[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/doctors',
    display:'Find a Doctor'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]
const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user , role ,token} = useContext(authContext)


  const handelStickyHeader = () =>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    handelStickyHeader()

    return()=>window.removeEventListener('scroll',handelStickyHeader)
  })

  const toggleMenu = ()=>menuRef.current.classList.toggle('show__menu')

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className="flex items-center justify-between">
          {/*======== logo========*/}
          <div>
            <img src={logo} alt=""/>
          </div>



          {/*======== menu =======*/}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLinks.map((link,index)=><li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text[16px] leading-7 font-[600]' : 'text-textColor text[16px] leading-7 font-[600] hover:text-primaryColor'}>
                    {link.display}
                  </NavLink>
                </li>)
              }
            </ul>
          </div>



          {/*========== nav right =========*/}
          <div className='flex items-center gap-4'>




            {
              token && user ? (<div>
                <Link to={`${role === 'doctor' ? '/doctor/profile/me':'/users/profile/me'}`}>
                <figure className='w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor'>
                  <img src={user?.photo} className='w-full h-full rounded-full object-cover' alt=''/>
                </figure>

                
                </Link>
              </div>) :(
              <Link to='/login'>
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  Login
                </button>
              </Link>
              )}




              <span className='md:hidden' onClick={toggleMenu}>
                <BiMenuAltLeft className='w-6 h-6 cursor-pointer' />
              </span>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header


