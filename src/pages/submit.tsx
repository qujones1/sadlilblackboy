import React from "react";
import { Layout } from "../components/Layout";

export default ({ data }) => (
  <Layout>
    <div>
      <h1>[submit]</h1>
      <div>
        <p>
          Fill in the form below if you are looking for a chance to be added to
          one of our spotify playlists. Provide a link to one of your songs that
          you think will fit any of our playlists, and provide your email so
          that we could reach out to you.
        </p>
        <form
          name="submissions"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/success"
        >
          <div>⚠️Anything other than a spotify link will be deleted ⚠️</div>
          <label>Spotify URL:</label>
          <input
            type="text"
            name="trackurl"
            placeholder="https://open.spotify.com/track/2xbAVLAt0sAyi5izoOjVVu"
            required
          />
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
          <text>
            Submitting here will submit to all playlists. this is just your
            prefferred choice.{" "}
          </text>
          <label>Email:</label>
          <input type="text" name="email" placeholder="name@domain.com" />
          <label>Describe your track:</label>
          <textarea
            name="Description"
            placeholder="is this the song about you?"
          />
          <div>
            <button type="submit">Submit</button>
          </div>
          <input type="hidden" name="form-name" value="submissions" />
        </form>
      </div>
    </div>
  </Layout>
);
