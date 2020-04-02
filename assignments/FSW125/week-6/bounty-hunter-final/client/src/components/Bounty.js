import React, { useState } from "react";
import AddBountyForm from "./AddBountyForm.js";

export default function Bounty(props) {
  const { firstName, lastName, living, bountyAmount, type, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="bounty">
      {!editToggle ? (
        <>
          <h3>FirstName: {props.FirstName}</h3>
          <h3>LastName: {props.LastName}</h3>
          <h3>Living: {props.Living}</h3>
          <h3>BountyAmount: {props.BountyAmount}</h3>
          <h3>Type: {props.Type}</h3>
          <button
            className="delete-btn"
            onClick={() => props.deleteBounty(_id)}
          >
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <AddBountyForm
            firstName={props.firstName}
            lastName={props.lastName}
            living={props.living}
            bountyAmount={props.bountyAmount}
            type={props.type}
            _id={props._id}
            btnText="Submit Edit"
            submit={props.editBounty}
          />
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}
