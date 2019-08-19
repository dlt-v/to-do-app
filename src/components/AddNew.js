import React from 'react'
import { MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
const AddNew = ({ consoleLog }) => {
  return (
    <Link to="/add_task" className="add-new" onClick={consoleLog}>
      <MdAddCircleOutline />
    </Link>
  )
}

export default AddNew;
