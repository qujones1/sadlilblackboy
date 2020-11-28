import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { useLocalStorage } from "@rehooks/local-storage";
import Popup from "reactjs-popup";

const query = graphql`
  fragment Image_file on File {
    name
    childImageSharp {
      fluid(maxWidth: 512) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }

  {
    song: file(relativePath: { eq: "images/releases/counting_the_days.jpg" }) {
      ...Image_file
    }
    beat: file(relativePath: { eq: "images/releases/hypnotized.jpg" }) {
      ...Image_file
    }
  }
`;

const data = {
  song: {
    url:
      "https://distrokid.com/hyperfollow/sadlilblackboyandnuq/counting-the-days"
  },
  beat: {
    url: "https://distrokid.com/hyperfollow/nuq/human-holiday"
  }
};

const KEY = "new_releases";

export default function NewReleasesModal() {
  const { beat, song } = useStaticQuery(query);
  const [modalLastSeenDate, setModalLastSeenDate] = useLocalStorage(KEY, 0);

  const handleModalClose = () => {
    setModalLastSeenDate(Date.now());
  };

  // If never seen before or it's been at least 3 hours
  const modalShouldBeOpen =
    modalLastSeenDate == 0 || (Date.now() - modalLastSeenDate) / 36e5 >= 3;

  return (
    <Popup
      className="modal"
      open={modalShouldBeOpen}
      onClose={handleModalClose}
      modal
    >
      <div className="w-full h-full bg-white shadow-2xl rounded-lg flex flex-col relative p-4 border-4 border-black">
        <div className="flex flex-1 space-x-0.5">
          <a
            className="flex flex-col flex-1 relative"
            key={song.name}
            href={data.song.url}
          >
            <h3>[new song]</h3>
            <Image
              className="flex-1 rounded-bl-lg"
              fluid={song.childImageSharp.fluid}
            />
            <button className="absolute bottom-2 left-0 right-0 mx-auto bg-white px-3 py-1 font-header sm:text-xl underline m-1 border-2  border-black rounded">
              Listen Now
            </button>
          </a>
          <a
            className="flex flex-col flex-1 relative"
            key={beat.name}
            href={data.beat.url}
          >
            <h3>[new beat]</h3>
            <Image
              className="flex-1 rounded-br-lg"
              fluid={beat.childImageSharp.fluid}
            />
            <button className="absolute bottom-2 left-0 right-0 mx-auto bg-white px-3 py-1 font-header sm:text-xl underline m-1 border-2  border-black rounded">
              Listen Now
            </button>
          </a>
        </div>
        <button
          className="relative -bottom-2 text-sm text-gray-500 underline"
          onClick={handleModalClose}
        >
          Dismiss
        </button>
      </div>
    </Popup>
  );
}
