import React from "react";
import { Layout } from "../components/Layout";
import { Select } from "../components/Select";

import { TextArea } from "../components/TextArea";
import { TextInput } from "../components/TextInput";

export default ({ _ }) => (
  <Layout header="submissions">
    <div className="space-y-4">
      <p>
        Fill in the form below if you are looking for free mixing and mastering services
        and the oppurtunity to have your music broadcasted on our public livestream.
      </p>
      <form
        name="Free Mixing submissions!"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        enctype="multipart/form-data"
        action="/success"
      >

        <div className="space-y-3">
          <TextInput label="Name" name="Name" placeholder="Deuce Who" />
          <TextInput label="Email" name="email" placeholder="name@domain.com" />
          <TextInput label="Genre" name="Genre" placeholder="Hip-Hop" />
          <label class="custom-uploader" for="file">Upload Files (.zip files only) </label>
            <input id="file" accept=".zip" name="fileToUpload" type="file" />


          <button
            className="rounded bg-blue-400 text-white py-1 px-3"
            type="submit"
          >
            Submit
          </button>
        </div>
        <input type="hidden" name="form-name" value="mixing-submission" />
      </form>
    </div>
  </Layout>
);
