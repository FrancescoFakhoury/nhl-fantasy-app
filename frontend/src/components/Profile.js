import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth0();
  console.log("sdjkhgdadkgjhfagkjhfgjhka", user);
  return (
    <Wrapper>
      <Title>{user.nickname}'s Page</Title>
      <ProfileInfo>
        <ImageWrapper>
          <Image src={user.picture} />
        </ImageWrapper>
        <InfoWrapper>
          <ElemWrapper>
            <TypeOfInfo>Name: </TypeOfInfo>
            <Info>{user.name}</Info>
          </ElemWrapper>
          <ElemWrapper>
            <TypeOfInfo>Username:</TypeOfInfo>
            <Info>{user.nickname}</Info>
          </ElemWrapper>
          <ElemWrapper>
            <TypeOfInfo>User's Email:</TypeOfInfo>
            <Info>{user.email}</Info>
          </ElemWrapper>

          <ElemWrapper>
            <TypeOfInfo>Updated at:</TypeOfInfo>
            <Info>{user.updated_at}</Info>
          </ElemWrapper>
        </InfoWrapper>
      </ProfileInfo>
      <StyledNavLink to="/team">Go to your Team page</StyledNavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 100px;
  margin-top: 50px;
`;
const StyledNavLink = styled(NavLink)`
  font-size: 27px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-family: var(--font-family-graduate);
  padding: 10px;
  opacity: 1;
  border: solid 1px grey;
  border-radius: 10px;
  background: var(--darkblue);

  &:hover {
    transform: scale(1.3);
  }
`;

const Title = styled.h1`
  font-family: var(--font-family-graduate);
  font-size: 50px;
`;

const Info = styled.p`
  font-family: var(--font-family);
  margin: 0px;
  font-size: 25px;
`;

const TypeOfInfo = styled.p`
  font-size: 23px;
  font-weight: bold;
  font-family: var(--font-family-graduate);
  margin: 0px;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: solid black 6px;
`;
const ElemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    transform: scale(1.3);
  }
`;
const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

const ImageWrapper = styled.div``;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default Profile;
