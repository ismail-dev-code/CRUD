import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  return <div>user details</div>;
};

export default UserDetails;
