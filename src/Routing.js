import React from 'react'

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Contactus from './Contactus';
import PlainMenu from './PlainMenu';
function Routing() {
  return (

<div>
<Routes>
          <Route exact path='/' element={< PlainMenu />}></Route>
         
          <Route exact path='/contact' element={< Contactus />}></Route>
   </Routes>
</div>

  )
}

export default Routing