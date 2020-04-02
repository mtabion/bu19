import React, { useState } from "react";

export default function AddBountyForm(props) {
  const initInputs = {
    FirstName: props.FirstName || "",
    LastName: props.LastName || "",
    Living: props.Living || "",
    BountyAmount: props.BountyAmount || "",
    Type: props.Type || ""
  };
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("inputs:", inputs);
    props.submit(inputs, props._id);
    setInputs(initInputs);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="FirstName"
        value={inputs.FirstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="LastName"
        value={inputs.LastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="Living"
        value={inputs.Living}
        onChange={handleChange}
        placeholder="Living"
      />
      <input
        type="text"
        name="BountyAmount"
        value={inputs.BountyAmount}
        onChange={handleChange}
        placeholder="Bounty Amount"
      />
      <input
        type="text"
        name="Type"
        value={inputs.Type}
        onChange={handleChange}
        placeholder="Type"
      />

      <button>{props.btnText}</button>
    </form>
  );
}
