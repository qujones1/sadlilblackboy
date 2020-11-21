import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Layout } from "../components/layout";

export default ({ data }) => (
  <Layout>
    <div>
      <h1>[success]</h1>
      <div>
        <p>Thank You! An email has been sent.</p>
        <div>
          <Img fluid={data.dab.childImageSharp.fluid} />
        </div>
      </div>
    </div>
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
