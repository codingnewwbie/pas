import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  border: 2px solid gray;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const PlaceholderImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-size: 20px;
  text-align: center;
  margin-left: 15px;
`;

const UserPage = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;
const FollowersItem = ({ user }) => {
  const user_pk = user.user_pk;

  if (!user) {
    return null; 
  }

  return (
    <ItemContainer>
      {/* user_pk 넣어야함 */}
        <UserPage to={`/test/${user_pk}`}>
        {user.user_image ? (
          <UserImage src={user.user_image} alt={user.user_name} />
        ) : (
          <PlaceholderImage />
        )}
        <UserName>{user.user_name}</UserName>
        </UserPage>
    </ItemContainer>
  );
};

export default FollowersItem;
