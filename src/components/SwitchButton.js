import React from 'react'
import { Link } from 'react-router-dom';

export default function SwitchButton({ onMain, text }) {
  return (
    
    <div className="switch-button">
      <Link to={onMain ? "/finished" : "/"} className="switch-button__button">
        {`Switch to ${text}`}
      </Link>
    </div>
  )
}
