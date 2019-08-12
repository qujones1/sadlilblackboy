import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "react-emotion";
import { Layout } from "../components/layout";

const appleSvg = require("../assets/apple.svg") as string;
const spotifySvg = require("../assets/spotify.svg") as string;

const Playlist = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 55%;

  iframe {
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Content = styled.section`
  display: flex;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const Page = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
`;

const Header = styled.h1`
  font-family: "edosz";
  font-weight: 400;
  text-align: center;
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "edosz";
  font-weight: 400;
  text-align: center;
  color: white;
  margin: 12px auto;
  width: 75%;
`;

const ImgContainer = styled.a`
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 33%;
  }
`;

const PromoText = styled.span`
  margin: 0 8px;
`;

const SocialImg = styled.img`
  width: 35px;
`;

export default ({ data }) => (
  <Layout>
    <Page>
      <Header>Let's all be sad together</Header>
      <Playlist>
        <iframe
          allow="autoplay"
          src="https://www.youtube.com/embed?listType=list&list=UUF-q9z4IF8CUWyj1_8hZDtg&autoplay=1"
        />
      </Playlist>
      <Body>
        <a href="memes.com">
          <SocialImg src={appleSvg} />
        </a>
        <PromoText>Stream Beats Below</PromoText>
        <a href="memes.com">
          <SocialImg src={spotifySvg} />
        </a>
      </Body>
      <Content>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/wilting-roses-fleeting-romance">
          <Img fluid={data.wrfr.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/late-nights">
          <Img fluid={data.latenights.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/sadlilblackboy-vol-2">
          <Img fluid={data.vol2.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/without-good-reason">
          <Img fluid={data.WithoutReason.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/hope">
          <Img fluid={data.hope.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/broken">
          <Img fluid={data.broken.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/ghev">
          <Img fluid={data.alone.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/fH50">
          <Img fluid={data.sad.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/fkO9">
          <Img fluid={data.vol1.childImageSharp.fluid} />
        </ImgContainer>
      </Content>
    </Page>
  </Layout>
);

export const query = graphql`
  {
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
