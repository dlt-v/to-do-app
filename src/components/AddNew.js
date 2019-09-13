import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const AddNew = () => {
  return (
    <Link to="/add_task" className="add-new" title="Add a new task">
      <MdAddCircleOutline />
    </Link>
  );
};

export default AddNew;
