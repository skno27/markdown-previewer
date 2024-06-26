"use client";
import { marked } from "marked";
import { useState } from "react";

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

const initialMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

Please, Feel Free to test things out a bit!
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \`\`\`' && lastLine == \`\`\`) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

I used the same starting text as the example, to make sure that everything was functioning properly. 
Thank you,

### -Deshon
`;

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
  const [text, setText] = useState(initialMarkdown);

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
