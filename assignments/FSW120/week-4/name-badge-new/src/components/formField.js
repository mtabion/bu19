import React, { useState } from "react";

const FormField = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    about: "",
    isSubmited: false
  });
  //   const [badgeList, setBadgeList] = useState([]);

  //   let badges = [...prstate.badgeList];
  //const [, setBadgelist ]= [];
  // const [lname, setLname] = useState("Enter your last name");
  //const [email, setEmail] = useState("Enter your email");
  //const [pob, setPOB] = useState("Enter your place of birth");
  // const [phone, setPhone] = useState("Enter your phone numbert");
  //  const [faveFood, setFname] = useState("Enter your Favorite food");
  //const [about, setFname] = useState("Enter your name");

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    console.log(evt.target.name + " " + evt.target.value);
  }

  function submitAndChange(evt) {
    evt.preventDefault();
    if (evt.target.name === "submit") {
      //   setBadgeList({ state });
      setState({
        isSubmited: true
      });
    } else {
      setState({
        isSubmited: false
      });
    }
  }
  // function showBadges(){
  //  state.isSubmited ? <Badge /> : null
  //}
  return (
    <div>
      <h1>Testing</h1>
      <div>
        <form
          style={{
            border: "solid 2px black",
            display: "flex",
            height: "300px",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            margin: "0 auto",
            flexWrap: "wrap",
            textAlign: "center"
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-between",
              margin: "auto"
            }}
          >
            <input
              type="text"
              className="formInput"
              value={state.firstName}
              name="firstName"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="placeOfBirth"
              value={state.placeOfBirth}
              onChange={handleChange}
            />
            <input
              type="number"
              name="phone"
              value={state.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="favoriteFood"
              value={state.favoriteFood}
              onChange={handleChange}
            />
          </div>
          <textarea
            className="textInput"
            name="about"
            value={state.about}
            onChange={handleChange}
          ></textarea>

          <button
            className="formSubmit"
            name="submit"
            onClick={submitAndChange}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
const Badge = props => {
  return (
    <div>
      <h1>Testing</h1>
      <div
        style={{
          border: "solid 2px black",
          display: "flex",
          height: "300px",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          margin: "0 auto",
          flexWrap: "wrap",
          textAlign: "center"
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            margin: "auto"
          }}
        >
          <div>{props.fName}</div>
          <div>{props.lName}</div>
          <div>{props.email}</div>
          <div>{props.num}</div>
          <div>{props.faveFood}</div>
          <div>{props.pob}</div>
          <div>{props.about}</div>
        </div>
      </div>
    </div>
  );
};
export default FormField;

//<Badge
//     //       fname={badge.firstName}
//     //       lname={badge.lastName}
//     //       email={badge.email}
//     //       num={badge.phone}
//     //       pob={badge.placeOfBirth}
//     //       faveFood={badge.favoriteFood}
//     //       about={badge.about}
//     //     />
