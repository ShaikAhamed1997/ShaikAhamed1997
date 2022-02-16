import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
          <ul className="">
              <li>
                <Link to="/">Home</Link>
              </li>
            
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
    </div>
  )
}

export default Header