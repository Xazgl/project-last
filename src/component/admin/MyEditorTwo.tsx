import React, { useEffect, useState } from "react";
// import { Editor, EditorState } from "draft-js";
// import "draft-js/dist/Draft.css";
import { convertToRaw, EditorState,convertFromHTML, ContentState, EditorProps } from 'draft-js';
import { Editor, RawDraftContentState } from "react-draft-wysiwyg";
import { draftjsToMd ,mdToDraftjs} from "draftjs-md-converter";
import {stateFromMarkdown} from 'draft-js-import-markdown';
import {stateToHTML} from 'draft-js-export-html';

import dynamic from 'next/dynamic'
    
// const Editor = dynamic<EditorProps>(
//   () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
//   { ssr: false }
// )

// const Editor = dynamic(() => import('react-draft-wysiwyg'), { ssr: false })

type MyEditorProp = {
    description:  string,
    setDescription: React.Dispatch<React.SetStateAction<string>>,
}

export default function MyEditorTwo({setDescription,description}: MyEditorProp,) {

  const [editorState, setEditorState] = useState(() =>
    //EditorState.createEmpty()
    //  EditorState.createWithContent(mdToDraftjs(description))
    // EditorState.createWithContent(ContentState.createFromText(stateFromMarkdown(description)))
    EditorState.createWithContent(ContentState.createFromText(description))
  );
          


  
  const editor = React.useRef(null);
  function focusEditor() {
    // editor.current.focus();
  }

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    console.log(draftjsToMd(convertToRaw(editorState.getCurrentContent())))
  };


  return (
    <div
      style={{ border: "1px solid black", minHeight: "6em", cursor: "text",height:"200px",width:"800px" }}
      onClick={focusEditor}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Write something!"
        onChange={(contentRaw) => {
            setDescription(draftjsToMd(contentRaw))
        }}
      />
    </div>
  );
}