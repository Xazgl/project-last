import React, { useState } from "react";
// import { Editor, EditorState } from "draft-js";
// import "draft-js/dist/Draft.css";
import { convertToRaw, EditorState } from 'draft-js';
import { Editor, RawDraftContentState } from "react-draft-wysiwyg";
import { draftjsToMd } from "draftjs-md-converter";

type MyEditorProps = {
    setDescription: React.Dispatch<React.SetStateAction<string>>
}

export default function MyEditor({setDescription}: MyEditorProps) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    // editor.current.focus();
  }

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    // console.log(draftjsToMd(convertToRaw(editorState.getCurrentContent())))
  };

  return (
    <div
      style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
      onClick={focusEditor}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Write something!"
        onChange={(contentRaw) => {
            // console.log(draftjsToMd(contentRaw))
            setDescription(draftjsToMd(contentRaw))
        }}
      />
    </div>
  );
}