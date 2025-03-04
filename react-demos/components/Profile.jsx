import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <h2>Profile Information</h2>
      <h3>Name: {profile.name}</h3>
      <h3>Age: {profile.age}</h3>
    </div>
  );
};

export default Profile;
