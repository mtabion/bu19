import React from "react";

import { connect } from "react-redux";

function Home(props) {
  console.log(props.contacts);
  return (
    <div>
      {props.contacts.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.fullName}</div>
            <div>{item.address}</div>
            <div>{item.email}</div>
            <div>{item.phoneNumber}</div>
            <img src={item.image} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};
export default connect(mapStateToProps)(Home);
