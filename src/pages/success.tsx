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

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

const Sub = styled.div`
  display: inline-block;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  border-radius: 8px;
  padding: 4px 16px;

  p {
    margin-top: 2px;
    margin-bottom: 25px;
  }

  h1 {
    margin-bottom: 5px;
  }
`;

const ImgContainer = styled.a`
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 33%;
  }
`;

export default ({ data }) => (
  <Layout>
    <Page>
      <h1>[success]</h1>
      <Sub>
        <p>Thank You! An email has been sent.</p>
        <ImgContainer>
          <Img fluid={data.dab.childImageSharp.fluid} />
        </ImgContainer>
      </Sub>
    </Page>
  </Layout>
);

export const query = graphql`
  {
    dab: file(relativePath: { eq: "dab.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
