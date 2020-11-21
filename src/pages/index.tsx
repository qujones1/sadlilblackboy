import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Layout } from "../components/layout";

const appleSvg = require("../assets/AppleSquare.png") as string;
const spotifySvg = require("../assets/spotify.svg") as string;
const googlePng = require("../assets/googlePlay.png") as string;
const soundcloudSvg = require("../assets/soundcloud2.png") as string;

export default ({ data }) => (
  <Layout>
    <div>
      <div>
        <div>
          <Img className="imgBack" fluid={data.singles.childImageSharp.fluid} />
          <div>
            <a href="https://soundcloud.com/nuq-the-most-dope/sets/singles">
              <img src={soundcloudSvg} />
            </a>
            <a href="https://music.apple.com/us/artist/sadlilblackboy/1475838174">
              <img src={appleSvg} />
            </a>
            <a href="https://open.spotify.com/artist/2tQyRoSW35TIkZRp3Kqsfa">
              <img src={spotifySvg} />
            </a>
            <a href="https://play.google.com/store/music/artist?id=Auvlyweyebd3pd5vqpgjcxcukiu">
              <img src={googlePng} />
            </a>
          </div>
        </div>
        <div>
          <Img className="imgBack" fluid={data.beats.childImageSharp.fluid} />
          <div>
            <a href="https://soundcloud.com/nuq-the-most-dope/sets/beats">
              <img src={soundcloudSvg} />
            </a>
            <a href="https://music.apple.com/us/artist/nuq/1403168719">
              <img src={appleSvg} />
            </a>
            <a href="https://open.spotify.com/artist/4oQFbIzjeTpjBFjB6Zri2X">
              <img src={spotifySvg} />
            </a>
            <a href="https://play.google.com/store/music/artist/Nuq?id=A4rpx3jxzffw2uujehfixj7xbsq&hl=en">
              <img src={googlePng} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <a href="https://distrokid.com/hyperfollow/sadlilblackboyandnuq/counting-the-days">
            <Img fluid={data.singleRelease.childImageSharp.fluid} />
          </a>
        </div>
        <div>
          <a href="https://distrokid.com/hyperfollow/nuqandjulianachahayed/put-your-records-on-2">
            <Img fluid={data.beatRelease.childImageSharp.fluid} />
          </a>
        </div>
      </div>

      <section>
        <a href="https://distrokid.com/hyperfollow/nuq/human-holiday">
          <Img fluid={data.holiday.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/happy-ending">
          <Img fluid={data.happy.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/we-had-fun">
          <Img fluid={data.whf.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/wilting-roses-fleeting-romance">
          <Img fluid={data.wrfr.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/late-nights">
          <Img fluid={data.latenights.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/sadlilblackboy-vol-2">
          <Img fluid={data.vol2.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/without-good-reason">
          <Img fluid={data.WithoutReason.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/hope">
          <Img fluid={data.hope.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/broken">
          <Img fluid={data.broken.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/ghev">
          <Img fluid={data.alone.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/fH50">
          <Img fluid={data.sad.childImageSharp.fluid} />
        </a>
        <a href="https://distrokid.com/hyperfollow/nuq/fkO9">
          <Img fluid={data.vol1.childImageSharp.fluid} />
        </a>
      </section>
    </div>
  </Layout>
);

export const query = graphql`
  {
    beatRelease: file(relativePath: { eq: "records.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    singleRelease: file(relativePath: { eq: "ctd.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    beats: file(relativePath: { eq: "beatsart.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    singles: file(relativePath: { eq: "singleart.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    holiday: file(relativePath: { eq: "holiday.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    happy: file(relativePath: { eq: "HappyEnding.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    whf: file(relativePath: { eq: "we_had_fun.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wrfr: file(relativePath: { eq: "WRFR.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    latenights: file(relativePath: { eq: "latenights.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    vol2: file(relativePath: { eq: "vol2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    WithoutReason: file(relativePath: { eq: "Without_good_reason.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    hope: file(relativePath: { eq: "Hope.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    broken: file(relativePath: { eq: "Broken.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    alone: file(relativePath: { eq: "alone.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    vol1: file(relativePath: { eq: "vol1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    sad: file(relativePath: { eq: "sad.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
