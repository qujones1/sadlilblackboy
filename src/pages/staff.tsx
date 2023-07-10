import { graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { Layout } from "../components/Layout";
import "../components/staff.css";

const staff = [
  {
    imgName: "Quentin",
    name: "Quentin",
    title: "Head Creator",
    quip:"Singing nigga",
    social: "@deuces.online",
    link: "https://www.instagram.com/deuces.online/",
    bio:
      "Though his dance moves resemble a car dealership inflatable, he has immense musical talent. He plays more than ten instruments and creates music as both the producer nu.q and artist sadliblackboy, who combined have over 30K monthly listeners. He graduated from UMBC with a CompSci degree. When he’s not making music (or TikToks), he’s watching anime or working out. Born and raised in Howard County, MD, he now lives on the Baltimore waterfront and spends most of his money on crab legs and protein shakes."
  },

  {
    imgName: "Aria",
    name: "Aria",
    title: "Head Nerd",
    quip:"Token “white” guy",
    social: "@m0meni",
    link: "https://www.instagram.com/m0meni/",
    bio:
      "Though he’s bilingual, he’s not biliterate; however, he’s fluent in most nerd coding languages. He graduated from UMBC with a CompSci degree and now works for Whatsapp, helping Mark steal I mean sell I mean borrow people’s data through encrypted messaging. When he’s not coding he’s… still coding. (He does it for fun.) Occasionally, he watches American football or loses in FIFA to his brothers and cousins. An immigrant parent’s dream, he grew up in Montgomery County, MD, but now lives in Queens, NY (but not in the black part).",
  },
  {
    imgName: "Ethan",
    name: "Ethan",
    title: "Head Illustrator",
    quip:"Reformed farm boy",
    social: "@ej.arts._",
    link: "https://www.instagram.com/ej.arts._/",
    bio:
      "Though he left the wagons behind when he moved to the city, he was voted best butt in high school. The only one smart enough to leave UMBC for better things, he now attends the Academy of Art University studying Interactive Media. When he’s not drawing, he’s doing other artsy stuff like photography or videography. (He’s the only one who can work the gimbal.) He also plays Magic the Gathering where he is a Gold level wizard. He grew up living between a farm in Ohio and a suburb in Maryland, but now he lives in a suburb in Ohio.",
  },
  {
    imgName: "Doni",
    name: "Doni",
    title: "Head Writer",
    quip:"Side-eye queen",
    social:"",
    link: "https://www.instagram.com/zaziebeetz/",
    bio:
      "Though she hates the cold, she’s ¾ naked 4/4 of the time. (No one knows what it means, but it’s provocative.) She attended four colleges, but graduated from UMBC with a degree in Global Studies. Now she works in finance for a US Navy research directorate, asking people for money, which is what she does best. When she’s not writing, she’s at brunch with bottomless mimosas or listening to live music, if not both. The child of 3 Marines, she’s lived in 13 cities, but currently resides in PG County, MD while making plans to move out west in search of gold. ",
  },
];

export default ({ data }) => (
  <Layout header="About Us">

    <h1 class="has-text-align-center">Meet the Team</h1>
    <div class="content-container">
    {staff.map((staff) => (
      <div class="row" key={staff.imgName} >
        <div class="left-panel box">
          <Image class="staffPhoto" fluid={data[staff.imgName].childImageSharp.fluid} />
          <h3 class="staffName">{staff.name}</h3>
          <h4 class="staffTitle">{staff.title}</h4>
          <h4 class="staffTitle">{staff.quip}</h4>
          <h4 class="ig_link"><a href={staff.link}>{staff.social}</a></h4>
        </div>
        <div class="right-panel box">{staff.bio}</div>
      </div>
    ))}
    </div>
  </Layout>
);


export const query = graphql`
  {
    Quentin: file(relativePath: { eq: "images/staff/quentin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    Doni: file(relativePath: { eq: "images/staff/doni.jpg" }) {
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
    Ethan: file(relativePath: { eq: "images/staff/ethan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

  }
`;
