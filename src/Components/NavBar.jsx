import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';

export default function NavBar() {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const navmenu = [
    { href: "skill", name: "About" },
    { href: "project", name: "Portfolio" },
    { href: "Contact", name: "Contact" },
  ]

  return (
    <nav className='text-white flex items-center justify-between py-6 px-6 relative'
      style={{
        background: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
        color: 'white',
        padding: '1rem'
      }}
    >
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-6'>
        {navmenu.map((item, index) => (
          <li key={index}>
            <Link to={item.href} smooth={true} duration={500}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden z-50' onClick={toggleMenu}>
        {open ? <RxCross2 size={28} /> : <FaBars size={28} />}
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-3/4 bg-gray-900 text-white p-6 z-40 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-center justify-center gap-8 mt-20 text-xl">
          {navmenu.map((item, key) => (
            <li key={key}>
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                onClick={toggleMenu} // close menu on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </nav>
  )
}
