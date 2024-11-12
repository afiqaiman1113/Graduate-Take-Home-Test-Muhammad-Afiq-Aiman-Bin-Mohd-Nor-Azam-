import React, { useState } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const UserInfo = styled.div`
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 10px;

  &:hover {
    background-color: #c82333;
  }
`;

const Profile = ({ user, onSignOut }) => {
  return (
    <ProfileWrapper>
      <h2>Welcome, {user.username}!</h2>
      <UserInfo>
        <AboutMe />
      </UserInfo>
      <Button onClick={onSignOut}>Sign Out</Button>
    </ProfileWrapper>
  );
};

export default Profile;
