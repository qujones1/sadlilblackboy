import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "react-emotion";
import { Layout } from "../components/layout";

const Playlist = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;

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
`;

const Merch = styled.section`
  display: flex;
  width: 75%;
  margin: 0 auto;
`;

const Content = styled.section`
  display: flex;
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
  margin-top: 24px;
`;

const ImgContainer = styled.a`
  width: 50%;
`;


export default ({ data }) => (
  <Layout>
    <Page>
      <Header>Let's all be sad together</Header>
      <Merch>
        <ImgContainer href="https://teespring.com/SadlilBlackSleeve">
          <Img fixed={data.long_sleeve_black.childImageSharp.fixed} />
        </ImgContainer>
        <ImgContainer href="https://teespring.com/sadLilLongSleeve">
          <Img fixed={data.long_sleeve_white.childImageSharp.fixed} />
        </ImgContainer>
        <ImgContainer href="https://teespring.com/sadlilhoodieblack">
          <Img fixed={data.hoodie_black.childImageSharp.fixed} />
        </ImgContainer>
        <ImgContainer href="https://teespring.com/sadlilhoodie">
          <Img fixed={data.hoodie_white.childImageSharp.fixed} />
        </ImgContainer>
      </Merch>
      <Playlist>
        <iframe
          allow="autoplay"
          src="https://www.youtube.com/embed?listType=list&list=UUF-q9z4IF8CUWyj1_8hZDtg&autoplay=1"
        />
      </Playlist>
      <Content>
        <ImgContainer href="https://open.spotify.com/album/0z9YdNT0VGHAhGoqsT82tN">
          <Img fluid={data.broken.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://open.spotify.com/album/3gg0OAbAq1ZByeuQRmLT50">
          <Img fluid={data.alone.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://open.spotify.com/album/6BGsidcKIY3LwE0ljn7vsE">
          <Img fluid={data.sad.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://open.spotify.com/album/7ay6KJtEEUtgksRbwDEZqu">
          <Img fluid={data.vol1.childImageSharp.fluid} />
        </ImgContainer>
      </Content>
    </Page>
  </Layout>
);

export const query = graphql`
  {
    hoodie_white: file(relativePath: { eq: "Hoodie_white.jpg" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    hoodie_black: file(relativePath: { eq: "Hoodie_black.jpg" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    long_sleeve_white: file(relativePath: { eq: "long_sleeve_white.jpg" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    long_sleeve_black: file(relativePath: { eq: "Long_sleeve_black.jpg" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
