import React from "react";
import styled from "react-emotion";
import { Layout } from "../components/layout";

const Playlist = styled.div`
  width: 100%;
  position: relative;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.section`
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  padding-top: 15%;
`;

export default () => (
  <Layout>
    <Playlist>
      <iframe
        allow="autoplay"
        src="https://www.youtube.com/embed?listType=list&list=UUF-q9z4IF8CUWyj1_8hZDtg&autoplay=1"
      />
    </Playlist>
    <Content>
      <h1>Lets all be sad together.</h1>
    </Content>
  </Layout>
);
