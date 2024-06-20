"use client";
import { marked } from "marked";
import { useState } from "react";

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"></div>
  );
}

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div id="container">
      {/* editor box */}
      <div className="editor box">
        <div className="banner">
          <i></i>
          <span>Editor</span>
        </div>
        <textarea
          name="text"
          rows="10"
          id="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="textarea"></textarea>
      </div>
      {/* begin preview box */}
      <div className="preview box">
        <div className="banner">
          <i></i>
          <span>Preview</span>
        </div>
        <Preview markdown={text} />
      </div>
    </div>
  );
}
