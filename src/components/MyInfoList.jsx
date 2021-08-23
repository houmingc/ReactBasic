import React from "react";
import MyInfoListCard from "./MyInfoListCard";
import countryData from "../countryData";

// parent component
const MyInfoList = () => {
  const countryName = countryData.map(item => {
    return <MyInfoListCard key={item.id} country={item.country} />;
  });
  return <ul>{countryName}</ul>;
};

export default MyInfoList;
