import { graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { Layout } from "../components/Layout";

const staff = [
  {
    imgName: "Quentin",
    name: "Quentin",
    bio:
      "Multi-instrumentalist and vocalist Quentin Jones leads the Alternative Hip-Hop and Pop project, Sadlillblackboy (also known as producer nuq). Based in Washington, D.C."
  },
  {
    imgName: "Doni",
    name: "Doni",
    bio:
      "'OMFG is this hentai?' - Doni",
  },
  {
    imgName: "Aria",
    name: "Aria",
    bio:
      "'I was the first person to listen to Jack Harlow' - Aria",
  },
];

export default ({ data }) => (
  <Layout header="staff">
    <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-1 gap-y-5">
    {staff.map((staff) => (
      <div className="no-borderRadiusImportant inline-block" style={{border: '1px solid black',borderRadius: '5px!important'}} key={staff.imgName} >
        <div className="inline-block">
        <Image className="rounded" fluid={data[staff.imgName].childImageSharp.fluid} />
        {staff.name}
        </div>
        <div className="inline-block">
        {staff.bio}
        </div>
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
