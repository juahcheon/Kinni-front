import React, { FC, useCallback } from "react";
import fetcher from '@utils/fetcher';
import useSWR from 'swr';
import gravatar from 'gravatar';
import axios from "axios";
import { Redirect } from "react-router";
import { Channels, Chats, Container, Header, MenuScroll, ProfileImg, RightMenu, WorkspaceName, WorkspaceWrapper, Workspaces } from "./styles";

const Workspace: FC = ({children}) => {
  const { data, error, mutate } = useSWR('http://localhost:3085/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios.post('http://localhost:3085/api/users/logout', null, {
      withCredentials: true,
    })
    .then(() => [
      mutate(false, false)
    ]);
  }, []);

  if (!data) {
    return <Redirect to="/login" />
  }

  return (
    <Container id="container">
      <Header>
        <span>
          <ProfileImg src={gravatar.url(data.email, { s: '28px', d: 'retro' })} alt={data.nickname} />
        </span>
        <RightMenu onClick={onLogout}>Logout</RightMenu>
      </Header>
      
      <WorkspaceWrapper>
        <Workspaces>
          <ul>
            <li>추천</li>
            <li>최신</li>
          </ul>
        </Workspaces>
        <Chats>Chats</Chats>
      </WorkspaceWrapper>
      {children}
    </Container>
  )
}

export default Workspace;