import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Layout } from "../components/Layout";

const appleSvg = require("../assets/images/AppleSquare.png") as string;
const spotifySvg = require("../assets/images/spotify.svg") as string;
const googlePng = require("../assets/images/googlePlay.png") as string;
const soundcloudSvg = require("../assets/images/soundcloud2.png") as string;

function MusicLinks({
  soundcloudLink,
  appleMusicLink,
  spotifyLink,
  googlePlayLink,
}) {
  return (
    <div>
      <a href={soundcloudLink}>
        <img src={soundcloudSvg} />
      </a>
      <a href={appleMusicLink}>
        <img src={appleSvg} />
      </a>
      <a href={spotifyLink}>
        <img src={spotifySvg} />
      </a>
      <a href={googlePlayLink}>
        <img src={googlePng} />
      </a>
    </div>
  );
}

function Singles({ data }) {
  return (
    <div>
      <Img fluid={data.singles.childImageSharp.fluid} />
      <MusicLinks
        soundcloudLink="https://soundcloud.com/nuq-the-most-dope/sets/singles"
        appleMusicLink="https://music.apple.com/us/artist/sadlilblackboy/1475838174"
        spotifyLink="https://open.spotify.com/artist/2tQyRoSW35TIkZRp3Kqsfa"
        googlePlayLink="https://play.google.com/store/music/artist?id=Auvlyweyebd3pd5vqpgjcxcukiu"
      />
    </div>
  );
}

function Beats({ data }) {
  return (
    <div>
      <Img fluid={data.beats.childImageSharp.fluid} />
      <MusicLinks
        soundcloudLink="https://soundcloud.com/nuq-the-most-dope/sets/beats"
        appleMusicLink="https://music.apple.com/us/artist/nuq/1403168719"
        spotifyLink="https://open.spotify.com/artist/4oQFbIzjeTpjBFjB6Zri2X"
        googlePlayLink="https://play.google.com/store/music/artist/Nuq?id=A4rpx3jxzffw2uujehfixj7xbsq&hl=en"
      />
    </div>
  );
}

function Releases({ data }) {
  return (
    <section>
      {data.releases.nodes.map((img) => {
        return img.name;
      })}
    </section>
  );
}

export default ({ data }) => (
  <Layout>
    <Singles data={data} />
    <Beats data={data} />
    <Releases data={data} />
  </Layout>
);

export const query = graphql`
  fragment Image_file on File {
    name
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }

  {
    beats: file(relativePath: { eq: "images/beatsart.png" }) {
      ...Image_file
    }
    singles: file(relativePath: { eq: "images/singleart.PNG" }) {
      ...Image_file
    }
    releases: allFile(
      filter: { relativeDirectory: { eq: "images/releases" } }
      sort: { fields: [name], order: DESC }
    ) {
      nodes {
        ...Image_file
      }
    }
  }
`;
