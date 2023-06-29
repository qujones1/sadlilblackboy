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

const SOCIAL_LINKS = [
  {
    href: "https://open.spotify.com/artist/4oQFbIzjeTpjBFjB6Zri2X",
    imgSrc: require("../assets/icons/spotify.svg"),
  },
  {
    href: "https://soundcloud.com/nuq-the-most-dope",
    imgSrc: require("../assets/icons/soundcloud.svg"),
  },
  {
    href: "https://www.instagram.com/sadlilblackboy/",
    imgSrc: require("../assets/icons/instagram.svg"),
  },
  {
    href: "https://vm.tiktok.com/7xopMR/",
    imgSrc: require("../assets/icons/tiktok.svg"),
  },
  {
    href: "https://www.youtube.com/c/sadlilblackboy?sub_confirmation=1",
    imgSrc: require("../assets/icons/youtube.svg"),
  },
  {
    href: "https://twitter.com/sadlilblackboy",
    imgSrc: require("../assets/icons/twitter.svg"),
  }
];

// ORDER MATTERS
const releases = {
  pureimagination: {
    url: "https://distrokid.com/hyperfollow/nuq/pure-imagination "
  },
  dontgiveup: {
    url: "https://distrokid.com/hyperfollow/nuq/dont-give-up"
  },
  begood: {
    url: "https://distrokid.com/hyperfollow/nuq/will-you-be-good"
  },
  twoofus: {
    url: "https://distrokid.com/hyperfollow/nuq/just-the-two-of-us"
  },
  sakura: {
    url: "https://distrokid.com/hyperfollow/nuq/sakura"
  },
  fallen_angel: {
    url: "https://distrokid.com/hyperfollow/nuq/fallen-angel"
  },
  runaway: {
    url: "https://distrokid.com/hyperfollow/nuq/runaway"
  },
  silhouette: {
    url: "https://distrokid.com/hyperfollow/nuq/silhouette"
  },
  dontbescared: {
    url: "https://distrokid.com/hyperfollow/nuq/dont-be-scared"
  },
  olvidar: {
    url: "https://distrokid.com/hyperfollow/nuq/lo-vas-olvidar"
  },
  keeptrying: {
    url: "https://distrokid.com/hyperfollow/nuq/keep-trying"
  },
  crash: {
    url: "https://distrokid.com/hyperfollow/nuq/crash"
  },
  staywithme: {
    url: "https://distrokid.com/hyperfollow/nuq/stay-with-me"
  },
  sadlilblackboy_vol_3: {
    url: "https://distrokid.com/hyperfollow/nuq/sadlilblackboy-vol-three-2"
  },
  human_holiday2: {
    url: "https://distrokid.com/hyperfollow/nuq/human-holiday-2"
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

const Social = (
  <div className="flex space-x-3 justify-center items-center">
    {SOCIAL_LINKS.map(({ href, imgSrc }) => (
      <a key={href} href={href}>
        <img src={imgSrc} width={40} height={40} />
      </a>
    ))}
  </div>
);

export default ({ data }) => {
  return (
    <>
      <Layout className="space-y-2">
        <section>
          <h2 className="mb-2">[Music Videos]</h2>
            <div className="flex">
              <iframe width="560" height="315" src="https://www.youtube.com/watch?v=UnXo4SBDMNw&list=PL8vjFV9ndmZv9nqQFC2L8csWoriAQq5En" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          <h2 className="mb-2">[Bio]</h2>
            <div className="flex">
              <p>
                Nuq (nu.q) is a lo-fi and chill hop project based in Washington D.C. led by Quentin Jones, incorporating a mix of soul, jazz, pop sampling, and live instrumentation to create soft lofi aesthetic media. Nuq began as a demonstration of the production ability for  but eventually Nuq grew independently into a vast collection of beat tapes and songs over the past several years. However, regardless of the alias, the goal is always to reach the audiences' emotions and evoke both fond and sad memories in the listener.
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
      filter: { relativeDirectory: { eq: "images/releases/nuq" } }
    ) {
      nodes {
        ...Image_file
      }
    }
  }
`;
