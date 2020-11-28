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
  hypnotized: {
    url: "https://distrokid.com/hyperfollow/nuq/hypnotized"
  },
  leave_us: {
    url: "https://distrokid.com/hyperfollow/nuq/leave-us"
  },
  counting_the_days: {
    url:
      "https://distrokid.com/hyperfollow/sadlilblackboyandnuq/counting-the-days"
  },
  human_holiday: {
    url: "https://distrokid.com/hyperfollow/nuq/human-holiday"
  },
  happy_ending: {
    url: "https://distrokid.com/hyperfollow/nuq/happy-ending"
  },
  we_had_fun: {
    url: "https://distrokid.com/hyperfollow/nuq/we-had-fun"
  },
  wilting_roses_fleeting_romance: {
    url: "https://distrokid.com/hyperfollow/nuq/wilting-roses-fleeting-romance"
  },
  late_nights: {
    url: "https://distrokid.com/hyperfollow/nuq/late-nights"
  },
  sadlilblackboy_vol_2: {
    url: "https://distrokid.com/hyperfollow/nuq/sadlilblackboy-vol-2"
  },
  without_good_reason: {
    url: "https://distrokid.com/hyperfollow/nuq/without-good-reason"
  },
  hope: {
    url: "https://distrokid.com/hyperfollow/nuq/hope"
  },
  broken: {
    url: "https://distrokid.com/hyperfollow/nuq/broken"
  },
  ghev: {
    url: "https://distrokid.com/hyperfollow/nuq/ghev"
  },
  fH50: {
    url: "https://distrokid.com/hyperfollow/nuq/fH50"
  },
  fk09: {
    url: "https://distrokid.com/hyperfollow/nuq/fk09"
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
      <h2 className="mb-2">[recent releases]</h2>
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
          <h2 className="mb-2">[browse]</h2>
          <div className="flex">
            <Singles data={data} />
            <Beats data={data} />
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
    beats: file(relativePath: { eq: "images/beatsart.png" }) {
      ...Image_file
    }
    singles: file(relativePath: { eq: "images/singleart.PNG" }) {
      ...Image_file
    }
    releases: allFile(
      filter: { relativeDirectory: { eq: "images/releases" } }
    ) {
      nodes {
        ...Image_file
      }
    }
  }
`;
