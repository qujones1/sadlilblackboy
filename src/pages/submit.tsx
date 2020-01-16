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
  display: inline-block;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,1);
  border-radius: 8px;
  padding: 4px 16px;


  p {
    margin-top: 2px;
    margin-bottom: 25px;
    margin-left: 5px;
  }

  h1 {
    margin-bottom: 5px
  }

  input {
    margin-top: 5px;
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
`;
export default ({ data }) => (
  <Layout>
    <Page>
      <h1>[submit]</h1>
      <Sub>
        <p>
          Fill in the form below if you are looking for a chance to be added to one of our spotify playlists.
        </p>
        <form name="submissions" method="POST" data-netlify="true" action="/success">
          <div>
            <label>Spotify url:<br></br><input type="text" name="trackurl" placeholder="https://open.spotify.com/track/2xbAVLAt0sAyi5izoOjVVu" required/></label>
            <p>
              Provide a link to one of your songs that you think will fit any of our playlists.
            </p>
          </div>
          <div>
            <label>Email:<br></br><input type="text" name="email" placeholder="name@domain.com" /></label>
            <p>
              Provide your email so that we could reach out to you.
            </p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </Sub>
    </Page>
  </Layout>
);
