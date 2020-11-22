import React from "react";
import { Layout } from "../components/Layout";

export default ({ _ }) => (
  <Layout header="submissions">
    <div>
      <p>
        Fill in the form below if you are looking for a chance to be added to
        one of our spotify playlists. Provide a link to one of your songs that
        you think will fit any of our playlists, and provide your email so that
        we could reach out to you.
      </p>
      <p className="border-l-4 border-red-400 bg-red-200 p-2 my-1">
        IMPORTANT: Anything other than a spotify link will be deleted!
      </p>
      <form
        name="submissions"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success"
      >
        <div className="flex">
          <label>Spotify URL:</label>
          <input
            className="ml-1 flex-grow"
            type="text"
            name="trackurl"
            placeholder="https://open.spotify.com/track/2xbAVLAt0sAyi5izoOjVVu"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Choose preferred playlist:</label>
          <select name="playlists" id="playlist" required>
            <option value="Lofi Brokenhearts">
              Lofi Brokenhearts 💔 - sad beats to cry yourself to sleep
            </option>
            <option value="Lofi Indie Pop & Rap">Lofi Indie Pop & Rap</option>
            <option value="Lofi & Smoke">
              Lofi & Smoke 💨 - trippy lofi and electronic beats to smoke to
            </option>
            <option value="Sadboy Vibe check">Sadboy Vibe Check 🖤</option>
            <option value="90s Lofi Cafe">
              90s Lofi Café - aesthetic jazzy beats to chill and relax to
            </option>
            <option value="Luv-Fi">Luv-Fi</option>
          </select>
          <text className="text-gray-400">
            Submitting here will submit to all playlists. this is just your
            preferred choice.
          </text>
        </div>

        <div className="flex">
          <label>Email:</label>
          <input
            className="ml-1 flex-grow"
            type="text"
            name="email"
            placeholder="name@domain.com"
          />
        </div>

        <div className="flex flex-col">
          <label>Describe your track:</label>
          <textarea
            name="Description"
            placeholder="Is this the song about you?"
          />
        </div>
        <button
          className="rounded bg-green-400 text-white py-1 px-3 mt-1"
          type="submit"
        >
          Submit
        </button>
        <input type="hidden" name="form-name" value="submissions" />
      </form>
    </div>
  </Layout>
);
