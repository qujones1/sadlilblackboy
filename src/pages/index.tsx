import { graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { Layout } from "../components/Layout";

const appleSvg = require("../assets/images/AppleSquare.png") as string;
const spotifySvg = require("../assets/images/spotify.svg") as string;
const soundcloudSvg = require("../assets/images/soundcloud2.png") as string;

const NUQ_LINK_PREFIX = "https://distrokid.com/hyperfollow/nuq/";
const SLBB_AND_NUQ_LINK_PREFIX =
  "https://distrokid.com/hyperfollow/sadlilblackboyandnuq/";

function MusicLinks({ soundcloudLink, appleMusicLink, spotifyLink }) {
  return (
    <div className="inset-x-0 bottom-1 absolute flex justify-center">
      <div className="rounded inline-flex p-2 bg-gray-800 items-center space-x-1">
        <a href={spotifyLink}>
          <img width={30} height={30} src={spotifySvg} />
        </a>
        <a href={soundcloudLink}>
          <img width={30} height={30} src={soundcloudSvg} />
        </a>
        <a href={appleMusicLink}>
          <img width={30} height={30} src={appleSvg} />
        </a>
      </div>
    </div>
  );
}

function Singles({ data }) {
  return (
    <div className="flex-grow relative">
      <Image fluid={data.singles.childImageSharp.fluid} />
      <MusicLinks
        soundcloudLink="https://soundcloud.com/nuq-the-most-dope/sets/singles"
        appleMusicLink="https://music.apple.com/us/artist/sadlilblackboy/1475838174"
        spotifyLink="https://open.spotify.com/artist/2tQyRoSW35TIkZRp3Kqsfa"
      />
    </div>
  );
}

function Beats({ data }) {
  return (
    <div className="flex-grow relative">
      <Image fluid={data.beats.childImageSharp.fluid} />
      <MusicLinks
        soundcloudLink="https://soundcloud.com/nuq-the-most-dope/sets/beats"
        appleMusicLink="https://music.apple.com/us/artist/nuq/1403168719"
        spotifyLink="https://open.spotify.com/artist/4oQFbIzjeTpjBFjB6Zri2X"
      />
    </div>
  );
}

function Releases({ data }) {
  return (
    <section>
      <h2 className="mb-2">[recent releases]</h2>
      <div className="grid grid-cols-3 gap-1 overflow-y-auto h-48 sm:h-96">
        {data.releases.nodes.map((img) => {
          const name = img.name.split("_")[1];
          // PLEASE BE CONSISTENT IN JUST ONE THING QUENTIN UGH
          const link =
            name !== "counting-the-days"
              ? NUQ_LINK_PREFIX + name
              : SLBB_AND_NUQ_LINK_PREFIX + name;

          return (
            <a key={img.name} href={link}>
              <Image fluid={img.childImageSharp.fluid} />
            </a>
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
      fluid(maxWidth: 512) {
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
