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





export default ({ data }) => {
  return (
    <>
      <Layout className="space-y-2">
        <section>
          <h2 className="mb-2">[Live Stream]</h2>
            <div className="flex">
              <iframe width="560" height="315" src="https://www.youtube.com/channel/UCF-q9z4IF8CUWyj1_8hZDtg/streams" title="YouTube streams player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
      </Layout>
    </>
  );
};
