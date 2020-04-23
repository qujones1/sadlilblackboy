import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "@emotion/styled";
import { Layout } from "../components/layout";

const Page = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  flex-direction: column;
  font-family: "Helvetica Neue Condensed";
  color: white;

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  font-family: "Helvetica Neue Condensed";
  font-weight: 400;
  color: white;
`;

const Playlist = styled.a`
  flex: 50%;
  padding: 0 12px;
  text-decoration: none;
  color: white;

  img {
    margin-top: 8px;
    vertical-align: middle;
    transition: transform 0.2s;
  }

  a {
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    margin-bottom: 7px;
  }

  img:hover {
    transform: scale(1.2);
  }

  a:link {
    text-decoration: none;
  }
`;

const playlists = [
  {
    imgName: "indie",
    name: "Lofi Indie Pop & Rap",
    url:
      "https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/0TAWgrvtM2CbEA1i5LJKzn?si=gn06T5nxQF2GcNTdf4x15Q"
  },
  {
    imgName: "vibe",
    name: "Sadboy Vibe Check🖤",
    url:
      "https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/5aCocgqPZe6HzPpmFZ0xnh?si=wrrxPvRiTwabudKYSPGJ5Q"
  },
  {
    imgName: "brkn",
    name: "Lofi Brokenhearts💔",
    url:
      "https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/2JVL6yReaTAjfwLOlQyMmi?si=vJRSWz6RQZqXamXgpE7kHw"
  },
  {
    imgName: "luvfi",
    name: "Luv-Fi",
    url:
      "https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/1ChoBnlB55d8LbV1RjEV2c?si=ulUB2ZVMQ2Cz4Pmq7d74MA"
  }
];

export default ({ data }) => (
  <Layout>
    <Page>
      <h1>[spotify playlists]</h1>
      <Body>
        {playlists.map(playlist => (
          <Playlist href={playlist.url}>
            <Img fluid={data[playlist.imgName].childImageSharp.fluid} />
            {playlist.name}
          </Playlist>
        ))}
      </Body>
    </Page>
  </Layout>
);

export const query = graphql`
  {
    indie: file(relativePath: { eq: "indie2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    vibe: file(relativePath: { eq: "vibecheck.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    brkn: file(relativePath: { eq: "roses.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    luvfi: file(relativePath: { eq: "luvfi.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
