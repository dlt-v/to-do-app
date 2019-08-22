import React from 'react'
import { Link } from 'react-router-dom';

export default function SwitchButton({ onMain, text }) {
  return (
    
    <Link to={onMain ? "/finished" : "/"} className="switch-button">
      <div className="switch-button__button">
        {`Switch to ${text}`}
      </div>
    </Link>
  )
}
