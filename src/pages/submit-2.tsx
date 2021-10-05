import React from "react";
import { Layout } from "../components/Layout";
import { Select } from "../components/Select";

import { TextArea } from "../components/TextArea";
import { TextInput } from "../components/TextInput";

export default ({ _ }) => (
  <Layout header="submissions">
    <div className="space-y-4">
      <p>
        Fill in the form below if you are looking for a chance to be added to
        one of our spotify playlists. Provide a link to one of your songs that
        you think will fit any of our playlists, and provide your email so that
        we could reach out to you.
      </p>
      <form
        name="submissions"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success"
      >
        <div className="space-y-3">
          <TextInput label="Email" name="email" placeholder="name@domain.com" />
          <TextInput
            className="w-full"
            label="Spotify URL"
            name="trackurl"
            placeholder="https://open.spotify.com/track/2xbAVLAt0sAyi5izoOjVVu"
          />
          <div className="space-y-1">
            <Select
              label="Choose preferred playlist"
              name="playlists"
              options={[
                {
                  value: "Lofi Brokenhearts",
                  description:
                    "Lofi Brokenhearts 💔 - sad beats to cry yourself to sleep",
                },
                {
                  value: "Lofi Indie Pop & Rap",
                  description: "Lofi Indie Pop & Rap",
                },
                {
                  value: "Lofi & Smoke",
                  description:
                    "Lofi & Smoke 💨 - trippy lofi and electronic beats to smoke to",
                },
                {
                  value: "Sadboy Vibe Check",
                  description: "Sadboy Vibe Check 🖤",
                },
                {
                  value: "90s Lofi Cafe",
                  description:
                    "90s Lofi Café - aesthetic jazzy beats to chill and relax to",
                },
                { value: "Luv-Fi", description: "Luv-Fi" },
                { value: "The Rebel Music", description: "The Rebel Music" },
                { value: "Snowy Nights", description: "Snowy Nights ❄️- A Lofi Christmas Playlist" },
                { value: "Lo-Fi Remixes & Covers", description: "Lo-Fi Remixes & Covers" },
              ]}
            />

            <p className="border-l-4 border-gray-300 pl-2 text-gray-500 text-sm">
              This is just your preferred choice: Your submission will be
              considered for all playlists.
            </p>
          </div>

          <TextArea
            label="Describe your track"
            name="Description"
            placeholder="Is this song about you?"
          />

          <button
            className="rounded bg-blue-400 text-white py-1 px-3"
            type="submit"
          >
            Submit
          </button>
        </div>
        <input type="hidden" name="form-name" value="submissions" />
      </form>
    </div>
  </Layout>
);
