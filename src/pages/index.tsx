import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Layout } from "../components/Layout";

const appleSvg = require("../assets/images/AppleSquare.png") as string;
const spotifySvg = require("../assets/images/spotify.svg") as string;
const googlePng = require("../assets/images/googlePlay.png") as string;
const soundcloudSvg = require("../assets/images/soundcloud2.png") as string;

const NUQ_LINK_PREFIX = "https://distrokid.com/hyperfollow/nuq/";
const SLBB_AND_NUQ_LINK_PREFIX =
  "https://distrokid.com/hyperfollow/sadlilblackboyandnuq/";

function MusicLinks({
  soundcloudLink,
  appleMusicLink,
  spotifyLink,
  googlePlayLink,
}) {
  return (
    <div className="inset-x-0 bottom-1 absolute flex justify-center">
      <div className="rounded inline-flex p-2 bg-gray-800 items-center">
        <Link to={soundcloudLink}>
          <img className="w-8 h-8" src={soundcloudSvg} />
        </Link>
        <Link to={appleMusicLink}>
          <img className="w-8 h-8" src={appleSvg} />
        </Link>
        <Link to={spotifyLink}>
          <img className="w-8 h-8" src={spotifySvg} />
        </Link>
        <Link to={googlePlayLink}>
          <img className="w-8 h-8" src={googlePng} />
        </Link>
      </div>
    </div>
  );
}

function Singles({ data }) {
  return (
    <div className="flex-grow relative">
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
    <div className="flex-grow relative">
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
      <h2 className="heading mb-2">[recent releases]</h2>
      <div className="flex flex-wrap overflow-y-auto h-96">
        {data.releases.nodes.map((img) => {
          const name = img.name.split("_")[1];
          // PLEASE BE CONSISTENT IN JUST ONE THING QUENTIN UGH
          const link =
            name !== "counting-the-days"
              ? NUQ_LINK_PREFIX + name
              : SLBB_AND_NUQ_LINK_PREFIX + name;

          return (
            <Link className="w-1/3 pr-1 pb-1" key={img.name} to={link}>
              <Img fluid={img.childImageSharp.fluid} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ({ data }) => (
  <Layout>
    <Releases data={data} />
    <section className="flex">
      <Singles data={data} />
      <Beats data={data} />
    </section>
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
