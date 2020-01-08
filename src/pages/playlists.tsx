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

  Img {
    margin-top: 8px;
    vertical-align: middle;
  }
  a {
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    margin-bottom: 7px;
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
        <Playlist href="spotify.com" >
            <Img fluid={data.beats.childImageSharp.fluid} />
            <a>Lofi Brokenhearts💔</a>
        </Playlist>
        <Playlist>
          <Img fluid={data.beats.childImageSharp.fluid} />
          <a>Sadboy Vibe Check🖤</a>
        </Playlist>
        <Playlist>
          <Img fluid={data.beats.childImageSharp.fluid} />
          <a>Lofi Indie Pop & Rap</a>
        </Playlist>
        <Playlist>
          <Img fluid={data.beats.childImageSharp.fluid} />
          <a>Luv-Fi</a>
        </Playlist>
      </Body>
    </Page>
  </Layout>
);

export const query = graphql`
  {
    beats: file(relativePath: { eq: "beats.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
