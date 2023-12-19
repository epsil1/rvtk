import React, { useState } from 'react'
import { TbSchool } from "react-icons/tb";

export default function Header() {
  let [college, collegeopen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>RVTK</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>О колледже</li>
            </ul>
            <TbSchool onClick={() => collegeopen(college = !college)} className= "college"/>
        
            {college && (
                <div className='college'>
                </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
