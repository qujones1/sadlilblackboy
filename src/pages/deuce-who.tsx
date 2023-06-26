import { graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { Layout } from "../components/Layout";

const appleSvg = require("../assets/icons/apple.svg") as string;
const spotifySvg = require("../assets/icons/spotify.svg") as string;
const soundcloudSvg = require("../assets/icons/soundcloud.png") as string;

function MusicLinks({ soundcloudLink, appleMusicLink, spotifyLink }) {
  return (
    <div className="inset-x-0 bottom-1 absolute flex justify-center">
      <div className="rounded inline-flex p-2 bg-gray-800 items-center space-x-1 w-2/3 sm:w-5/12">
        <a className="flex-1" href={spotifyLink}>
          <img src={spotifySvg} />
        </a>
        <a className="flex-1" href={soundcloudLink}>
          <img src={soundcloudSvg} />
        </a>
        <a className="flex-1 relative -top-0.5" href={appleMusicLink}>
          <img src={appleSvg} />
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

// ORDER MATTERS
const releases = {
  2012: {
    url: "https://distrokid.com/hyperfollow/sadlilblackboy/2012"
  },
  wewontspeaklikethisagain: {
    url: "https://distrokid.com/hyperfollow/sadlilblackboy/we-wont-speak-like-this-again "
  },
  luv_is_war: {
    url: "https://distrokid.com/hyperfollow/sadlilblackboy/luv-is-war"
  },
  udontluvme: {
    url: "https://distrokid.com/hyperfollow/sadlilblackboy/u-dont-luv-me"
  },
  counting_the_days: {
    url:
      "https://distrokid.com/hyperfollow/sadlilblackboyandnuq/counting-the-days"
  }
};
const releaseOrderMap: Record<string, number> = Object.keys(releases).reduce(
  (map, key, i) => {
    map[key] = i;
    return map;
  },
  {}
);

function Releases({ data }) {
  return (
    <section>
      <h2 className="mb-2">[releases]</h2>
      <div className="grid grid-cols-3 gap-1">
        {data.releases.nodes
          .slice()
          .sort((a, b) => releaseOrderMap[a.name] - releaseOrderMap[b.name])
          .map(release => {
            return (
              <a key={release.name} href={releases[release.name].url}>
                <Image fluid={release.childImageSharp.fluid} />
              </a>
            );
          })}
      </div>
    </section>
  );
}

export default ({ data }) => {
  return (
    <>
      <Layout className="space-y-2">
        <section>
          <h2 className="mb-2">[Music Videos]</h2>
              <div className="flex">
                <iframe width="560" height="315" src="https://www.youtube.com/playlist?list=PL8vjFV9ndmZv-6-_KKInJjnvbhtYZXzT-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          <h2 className="mb-2">[Bio]</h2>
            <div className="flex">
              <p>
                Deuce Who (formerly known as sadlilblackboy) is an Alternative Hip-Hop and Pop project led by, multi-instrumentalist and vocalist Quentin Jones; based in Washington, D.C. While featuring emotional melodies and lyrics tied to very personal experiences, these aspects are intended to make a personal connection with the listener and let you know that no matter what you're going through, you're not alone.  Let's all be sad together.
              </p>
            </div>
        </section>
        <Releases data={data} />
      </Layout>
    </>
  );
};

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
    releases: allFile(
      filter: { relativeDirectory: { eq: "images/releases/singles" } }
    ) {
      nodes {
        ...Image_file
      }
    }
  }
`;
