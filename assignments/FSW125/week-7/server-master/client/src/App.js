import React, { useState, useEffect } from "react";
import axios from "axios";
import Bounty from "./components/Bounty.js";
import AddBountyForm from "./components/AddBountyForm.js";
import "./components/styles.css";

export default function App() {
  const [bounties, setBounties] = useState([]);

  function getBounties() {
    fetch("/bountyHunters/bounties")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBounties(data);
      })
      .catch(error => console.log(error.response.data.errMsg));
  }

  function addBounty(newBounty) {
    axios
      .post("/bountyHunters", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data]);
      })
      .catch(error => console.log(error.response.data.errMsg));
  }

  function deleteBounty(bountyId) {
    axios
      .delete(`/bountyHunters/${bountyId}`)
      .then(res => {
        setBounties(prevBounties =>
          prevBounties.filter(bounty => bounty.id !== bountyId)
        );
      })
      .catch(error => console.log(error.response.data.errMsg));
  }

  function editBounty(updates, bountyId) {
    console.log("editBounty", bountyId);
    axios
      .put(`/bountyHunters/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties =>
          prevBounties.filter(bounty => bounty._id !== bountyId)
        );
      })
      .catch(error => console.log(error.response.data.errMsg));
  }

  useEffect(() => {
    getBounties();
  }, []);

  return (
    <div>
      <div className="bounty-container">
        <AddBountyForm submit={addBounty} btnText="Add Bounty" />
        {bounties.map(bounty => (
          <Bounty
            {...bounty}
            key={bounty.firstName}
            deleteBounty={deleteBounty}
            editBounty={editBounty}
          />
        ))}
      </div>
    </div>
  );
}
