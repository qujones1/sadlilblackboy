import { graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { Layout } from "../components/Layout";

const staff = [
  {
    imgName: "Quentin",
    name: "Quentin",
    social: "@Sadlillblackboy",
    bio:
      "Multi-instrumentalist and vocalist Quentin Jones leads the Alternative Hip-Hop and Pop project, Sadlillblackboy (also known as producer nuq). Based in Washington, D.C."
  },
  {
    imgName: "Doni",
    name: "Doni",
    social:"@sparklicious",
    bio:
      "'OMFG is this hentai?' - Doni",
  },
  {
    imgName: "Aria",
    name: "Aria",
    social: "@m0meni",
    bio:
      "'I was the first person to listen to Jack Harlow' - Aria",
  },
];

export default ({ data }) => (
  <Layout header="About Us">

    <h1 class="has-text-align-center">Meet the Team</h1>
    <div className="wp-container-4 wp-block-columns has-3-columns">
    {staff.map((staff) => (
      <div className="wp-block-columns has-2-columns" key={staff.imgName} >
        <div className="inline-block">
          <Image className="rounded" fluid={data[staff.imgName].childImageSharp.fluid} />
          <h3 class="has-text-align-center">{staff.name}</h3>
          <h3 class="has-text-align-center">{staff.social}</h3>
        </div>
        <div className="inline-block">{staff.bio}</div>
      </div>
    ))}
    </div>
  </Layout>
);


export const query = graphql`
  {
    Quentin: file(relativePath: { eq: "images/staff/quentin.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    Doni: file(relativePath: { eq: "images/staff/doni.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    Aria: file(relativePath: { eq: "images/staff/aria.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
