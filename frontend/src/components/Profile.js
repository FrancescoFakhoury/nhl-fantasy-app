import React from 'react'
import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

    const {user} = useAuth0();
    console.log(user)
    return (
        <Wrapper>
            <ProfileInfo>
            
            </ProfileInfo>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: fill-available;
display: flex;
flex-direction: column;
`

const ProfileInfo = styled.div`

`

export default Profile;