import React from "react";

const ProfileImage = () => {
  return (
    <div className="h-11 w-11 overflow-hidden rounded-full">
      <img
        width={"100%"}
        height={"100%"}
        src="https://s3-alpha-sig.figma.com/img/8f9a/a88a/f84c0b0523188e60955912d822eb8566?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TflSxcOuYvBBhd7DP5-EEvfmStahk1UXCrBXsBa2yreh5N31fFUYFU6mfPu4dW9SRJ8dQbWTekDymGUruTPembAFDp2sQB0MODjP3Ow26cCMcKrMSE1kv8JTJ56ARUW338d5b3LglPHXxa9t8Sj4GDSFcuh4q0~lQE94yPtD3~e7OlcDaKQ9DJnh7jiF5~hKbpY57zhMZjBevAKNKA7D8ndmCbgdirYz~HdH3lPCY6o0yCGCJqgD5OperbezopeI5TawIP1jgAYQ0Rc0bachZslA1cbjAfHFKpc1f0cuHBWKbjNpYdi6i1cRhX2UchW9eK00JtPMV-e79nc3-hSKGA__"
        alt="Profile"
        className="rounded-[inherit]"
      />
    </div>
  );
};

export default ProfileImage;
