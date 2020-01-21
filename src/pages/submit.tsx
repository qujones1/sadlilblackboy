import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "@emotion/styled";
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
  padding: 16px 8px;
`;

const FormContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  border-radius: 8px;
  padding: 12px;

  input {
    width: 90%;
    margin-top: 4px;
    margin-bottom: 12px;
    font-size: 14px;
    height: 35px;
  }

  label {
    display: block;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 6px;
  font-size: 16px;
`;

export default ({ data }) => (
  <Layout>
    <Page>
      <h1>[submit]</h1>
      <FormContainer>
        <p>
          Fill in the form below if you are looking for a chance to be added to
          one of our spotify playlists. Provide a link to one of your songs that
          you think will fit any of our playlists, and provide your email so
          that we could reach out to you.
        </p>
        <form
          name="submissions"
          method="POST"
          data-netlify="true"
          action="/success"
        >
          <label>Spotify URL:</label>
          <input
            type="text"
            name="trackurl"
            placeholder="https://open.spotify.com/track/2xbAVLAt0sAyi5izoOjVVu"
            required
          />

          <label>Email:</label>
          <input type="text" name="email" placeholder="name@domain.com" />

          <div>
            <SubmitButton type="submit">Submit</SubmitButton>
          </div>
          <input type="hidden" name="form-name" value="submissions" />
        </form>
      </FormContainer>
    </Page>
  </Layout>
);
