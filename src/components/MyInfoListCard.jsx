import React from "react";
// child component
const MyInfoListCard = props => {
  if (!props.country) {
    return null;
  }
  return (
    <li style={{ color: props.country ? "blue" : "" }}>{props.country}</li>
  );
};

export default MyInfoListCard;
