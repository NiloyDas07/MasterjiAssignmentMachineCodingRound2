import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { parsePhoneNumberFromString } from "libphonenumber-js";

import {
  RandomUserSkeleton,
  Navigation,
  Name,
  UserImage,
  Username,
  Contact,
  UserDetailsTable,
  Footer,
} from "../components/RandomUser";

const RandomUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  // Generating link to google maps.
  const generateGoogleMapsLink = useCallback((location) => {
    if (!location) {
      return "";
    }

    const baseUrl = "https://www.google.com/maps/search/?api=1&query=";

    const { latitude, longitude } = location.coordinates;

    let address = `${latitude},${longitude}`;

    // If latitude or longitude is not available, use the street address
    if (!latitude || !longitude) {
      const addressParts = [
        location.street.number,
        location.street.name,
        location.city,
        location.state,
        location.country,
        location.postcode,
      ];

      // Filtering out any empty parts and join the remaining parts with a comma
      address = addressParts.filter((part) => part).join(", ");
    }

    const encodedAddress = encodeURIComponent(address);

    return `${baseUrl}${encodedAddress}`;
  }, []);

  // Generating link for call.
  const generateCallLink = useCallback((cell, nat) => {
    const phoneNumber = parsePhoneNumberFromString(cell, nat);

    if (phoneNumber) {
      return phoneNumber.formatInternational();
    }
    return cell;
  }, []);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/public/randomusers/user/random",
      );

      setUser(response.data?.data);
    } catch (error) {
      console.log(error);
      return null;
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchUser();
    };

    fetchData();
  }, [fetchUser]);

  return (
    <div className="flex h-full min-h-svh w-full items-center justify-center bg-black bg-randomuser">
      <div className="my-4 flex min-h-[39.125rem] w-[23.375rem] max-w-[90%] flex-col items-center rounded-xl border-8 border-white bg-[#B6B3F3] p-6">
        <Navigation fetchUser={fetchUser} />

        {loading && <RandomUserSkeleton />}

        {!loading && (
          <>
            <UserImage image={user?.picture?.large} title={user?.name?.title} />

            <Name first={user?.name?.first} last={user?.name?.last} />

            <Username username={user?.login?.username} />

            <hr className="border-1 mb-3 mt-7 w-full border-[hsla(0,0%,0%,0.08)]" />

            <Contact
              location={generateGoogleMapsLink(user?.location)}
              phone={`tel:${generateCallLink(`${user?.cell}`, `${user?.nat}`)}`}
            />

            <hr className="border-1 mb-7 mt-3 w-full border-[hsla(0,0%,0%,0.08)]" />

            <UserDetailsTable user={user} />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default RandomUser;
