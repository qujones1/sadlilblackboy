import React from "react";
import { Layout } from "../components/Layout";
import { Select } from "../components/Select";

import { TextArea } from "../components/TextArea";
import { TextInput } from "../components/TextInput";

export default ({ _ }) => (
  <Layout header="submissions">
    <div className="space-y-4">
      <p>
        Fill in the form below if you are looking for <b>FREE</b> mixing and mastering services
        and the oppurtunity to have your music broadcasted on our public livestream.
      </p>
      <b> Songs will be mixed and mastered live every saturday starting at 12pm est</b>
      <form
        name="mixing-submission"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        enctype="multipart/form-data"
        action="/success"
      >

        <div className="space-y-3">
          <TextInput label="Name" name="Name" placeholder="Deuce Who" />
          <TextInput label="Email" name="email" placeholder="name@domain.com" />
          <TextInput
            className="w-full"
            label="Download Link"
            name="Download"
            placeholder="https://drive.google.com/drive/"
          />
          <div className="space-x-1-y-1">
            <Select
              label="Genre"
              name="Genre"
              options={[
                {
                  value: "HipHop",
                  description:
                    "Hip-Hop/Rap",
                },
                {
                  value: "Pop",
                  description: "Pop",
                },
                {
                  value: "Electronic",
                  description:
                    "Electronic",
                },
                {
                  value: "Rock",
                  description: "Rock",
                },
                {
                  value: "Lofi",
                  description:
                    "Lo-Fi",
                },
                { value: "Trap", description: "Trap" },
                { value: "Hyperpop", description: "Hyperpop" },
                { value: "R & B", description: "R&B" },
                { value: "Jazz", description: "Jazz" },
                { value: "Classical", description: "Classical" },
                { value: "Alternative", description: "Alternative" },
                { value: "Metal", description: "Metal" },
                { value: "Indie", description: "Indie" },
                { value: "EDM", description: "EDM" },
                { value: "Chillwave", description: "Chillwave" },
                { value: "Other", description: "Other" },
              ]}
            />
            </div>
            


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
