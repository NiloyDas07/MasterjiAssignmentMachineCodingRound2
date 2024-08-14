import React from "react";
import Location from "./LocationLink";
import CallLink from "./CallLink";

const Contact = ({ location, phone }) => {
  return (
    <div className="flex gap-14">
      <Location location={location} />
      <CallLink phone={phone} />
    </div>
  );
};

export default Contact;
