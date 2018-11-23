import React from "react";
import { Layout } from "../components/layout";
import {
  Apple,
  Instagram,
  Logo,
  SoundCloud,
  Spotify,
  Youtube
} from "../components/images";
import styled from "react-emotion";

const CenterPiece = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Social = styled.section`
  display: flex;
  margin-top: 1.45rem;
  a + a {
    margin-left: 15px;
  }
`;

const Playlist = styled.div`
  border: none;
  height: 0;
  width: 75%;
  padding-bottom: 42.188%;
  position: relative;
  margin-top: 1.45rem;

  iframe {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const socialLinks = [
  { logo: <Apple />, href: "" },
  { logo: <Instagram />, href: "https://www.instagram.com/sadlilblackboy/" },
  { logo: <SoundCloud />, href: "https://soundcloud.com/nuq-the-most-dope" },
  {
    logo: <Spotify />,
    href: "https://open.spotify.com/artist/4oQFbIzjeTpjBFjB6Zri2X"
  },
  {
    logo: <Youtube />,
    href: "https://www.youtube.com/channel/UCF-q9z4IF8CUWyj1_8hZDtg"
  }
];

export default () => (
  <Layout>
    <CenterPiece>
      <h1>SADLILBLACKBOY</h1>
      <Logo />
      <Social>
        {socialLinks.map(l => (
          <a key={l.href} href={l.href}>
            {l.logo}
          </a>
        ))}
      </Social>
      <Playlist>
        <iframe
          allow="autoplay"
          src="https://www.youtube.com/embed?listType=list&list=UUF-q9z4IF8CUWyj1_8hZDtg&autoplay=1"
        />
      </Playlist>
    </CenterPiece>
  </Layout>
);
