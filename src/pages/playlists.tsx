import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "react-emotion";
import { Layout } from "../components/layout";

const appleSvg = require("../assets/apple.svg") as string;
const spotifySvg = require("../assets/spotify.svg") as string;
const googlePng = require("../assets/googlePlay.png") as string;
const amazonPng = require("../assets/amazon.png") as string;
const soundcloudSvg = require("../assets/soundcloud2.png") as string;

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

const Sub = styled.div `
  display: flex;


  p {
    margin-top: 2px;
    margin-bottom: 25px;
  }

  h1 {
    margin-bottom: 5px
  }

  input {
    width: 90%;
    height: 35px;
  }

  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 6px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  a:link {
    text-decoration: none;
    color: red;
  }

  form input[required=required]:after,
  form select[required=required]:after,
  form textarea[required=required]:after
  {
      color: red;
      content: " *";
  }

  label {
    display: block;
    padding: 5px;
    margin-bottom: 1px;
  }

  textarea{
    margin-bottom: 15px;
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

  Img {
    margin-top: 8px;
    vertical-align: middle;
    transition: transform .2s;
  }
  a {
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    margin-bottom: 7px;

  }


  Img:hover {
    transform: scale(1.2);
  }

  a:link {
    text-decoration: none;
  }

`;

export default ({ data }) => (
  <Layout>
    <Page>
      <h1>[spotify playlists]</h1>
      <Body>
        <Playlist href="https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/0TAWgrvtM2CbEA1i5LJKzn?si=gn06T5nxQF2GcNTdf4x15Q">
          <Img fluid={data.indie.childImageSharp.fluid} />
          <a>Lofi Indie Pop & Rap</a>
        </Playlist>
        <Playlist href="https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/5aCocgqPZe6HzPpmFZ0xnh?si=wrrxPvRiTwabudKYSPGJ5Q">
          <Img fluid={data.vibe.childImageSharp.fluid} />
          <a>Sadboy Vibe Check🖤</a>
        </Playlist>
        <Playlist href="https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/2JVL6yReaTAjfwLOlQyMmi?si=vJRSWz6RQZqXamXgpE7kHw" >
            <Img fluid={data.brkn.childImageSharp.fluid} />
            <a>Lofi Brokenhearts💔</a>
        </Playlist>
        <Playlist href="https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/1ChoBnlB55d8LbV1RjEV2c?si=ulUB2ZVMQ2Cz4Pmq7d74MA">
          <Img fluid={data.luvfi.childImageSharp.fluid} />
          <a>Luv-Fi</a>
        </Playlist>
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
