import { graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";

import { Layout } from "../components/Layout";

export default ({ data }) => (
  <Layout header="success">
    <p>Thank You! An email has been sent.</p>
    <div>
      <Image fluid={data.dab.childImageSharp.fluid} />
    </div>
  </Layout>
);

export const query = graphql`
  {
    dab: file(relativePath: { eq: "images/dab.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
