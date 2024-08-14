import React from "react";
import UserDetailItems from "./UserDetailItems";
import { useCallback } from "react";

const UserDetailsTable = ({ user }) => {
  // Formatting the date.
  const formatDate = useCallback((dateString) => {
    if (!dateString) {
      return "";
    }

    const date = new Date(dateString);

    // Extracting day, month, and year separately
    const day = date.toLocaleDateString("en-GB", { day: "2-digit" });
    const month = date.toLocaleDateString("en-GB", { month: "long" });
    const year = date.toLocaleDateString("en-GB", { year: "numeric" });

    // Returning the date in the desired format with a comma after the month
    return `${day} ${month}, ${year}`;
  }, []);

  // Formatting the phone number
  const formatPhoneNumber = useCallback((phoneNumber) => {
    if (!phoneNumber) {
      return "";
    }

    // Remove non-numeric characters
    const cleanedNumber = phoneNumber.replace(/\D/g, "");

    // Format the cleaned number to XXX-XXX-XXX format
    const formatted = cleanedNumber.replace(
      /(\d{4})(\d{3})(\d{3})/,
      "$1-$2-$3",
    );

    return formatted;
  }, []);

  return (
    <div className="grid w-full grid-cols-2 gap-4">
      <UserDetailItems type={"City"} content={user?.location?.city} />

      <UserDetailItems
        type={"Nationality"}
        content={user?.location?.country}
        nat={user?.nat}
      />

      <UserDetailItems
        type={"Date of birth"}
        content={formatDate(user?.dob?.date)}
      />

      <UserDetailItems
        type={"Phone No."}
        content={formatPhoneNumber(user?.phone)}
      />

      {/* Time Zone */}
      <UserDetailItems
        type={"Time Zone"}
        content={`${user?.location?.timezone?.offset} (${user?.location?.timezone?.description})`}
      />

      {/* Registered Since */}
      <UserDetailItems
        type={"Registered Since"}
        content={formatDate(user?.registered?.date)}
      />
    </div>
  );
};

export default UserDetailsTable;
