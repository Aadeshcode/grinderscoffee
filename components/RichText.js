import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { createEditor, Editor } from "slate";
import { Element } from "./Slate/Element";
import Toolbar from "./Slate/Toolbar";
import MarkButton from "./Slate/Button/MarkButton";
import {
  BiBold,
  BiItalic,
  BiUnderline,
  BiListOl,
  BiListUl,
} from "react-icons/bi";
import { GrBlockQuote } from "react-icons/gr";
import { FaHeading } from "react-icons/fa";
import { Leaf } from "./Slate/Leaf/Leaf";
import { BlockButton } from "./Slate/Button/BlockButton";
import Table from "./Slate/Table/Table";
import InTable from "./Slate/Table/Intable";
import useTable from "./Slate/Table/useTable";
import LinkButton from "./Slate/Link/LinkButton";
import { isBlockActive } from "./Slate/MarkActive";
import withTable from "./Slate/Table/withTable";
import withLinks from "./Slate/Link/withLinks";
import withImage from "./Slate/Image/withImage";
import Embed from "./Slate/Image/Embed";
import { useSelector } from "react-redux";
import isHotkey from "is-hotkey";
const RichText = ({ value, setValue, showImage, placeHolder }) => {
  const resetEd = useSelector((state) => state.resetEditor);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const HOTKEYS = {
    "mod+b": "bold",
    "mod+i": "italic",
    "mod+u": "underline",
    "mod+1": "code",
  };
  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };
  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };
  const editor = useMemo(
    () =>
      withHistory(withReact(withImage(withTable(withLinks(createEditor()))))),
    []
  );

  const isTable = useTable(editor);
  useEffect(() => {
    editor.selection = {
      anchor: { path: [0, 0], offset: 0 },
      focus: { path: [0, 0], offset: 0 },
    };
    setValue([
      {
        type: "paragraph",
        children: [
          {
            text: "",
          },
        ],
      },
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetEd]);

  editor.children = value;
  console.log(value);
  return (
    <div className="rich-text">
      <div className="p-1 m-2 border rounded">
        <Slate
          editor={editor}
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        >
          <Toolbar>
            <MarkButton format="bold" tooltip="Bold">
              <BiBold />
            </MarkButton>

            <MarkButton format="italic" tooltip="Italic">
              <BiItalic />
            </MarkButton>
            <MarkButton format="underline" tooltip="Underline">
              <BiUnderline />
            </MarkButton>
            <BlockButton format="numbered-list" tooltip="Numbered-list">
              <BiListOl />
            </BlockButton>
            <BlockButton format="bulleted-list" tooltip="Numbered-list">
              <BiListUl />
            </BlockButton>
            <BlockButton format="blockquote">
              <GrBlockQuote />
            </BlockButton>
            <BlockButton format="heading-one">
              <FaHeading />
            </BlockButton>
            <BlockButton format="heading-two">
              <FaHeading />
            </BlockButton>
            <BlockButton format="heading-three">
              <FaHeading />
            </BlockButton>

            <LinkButton
              selected={isBlockActive(editor, "link")}
              editor={editor}
            />

            <Table editor={editor} />
            {isTable && <InTable editor={editor} />}
            {showImage && <Embed format="image" editor={editor} />}
          </Toolbar>

          <div className="pl-1" style={{ minHeight: "500px", padding: "20px" }}>
            <Editable
              onKeyDown={(event) => {
                for (const hotkey in HOTKEYS) {
                  if (isHotkey(hotkey, event)) {
                    event.preventDefault();
                    const mark = HOTKEYS[hotkey];
                    toggleMark(editor, mark);
                  }
                }
              }}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder={placeHolder}
              spellCheck
            />
          </div>
        </Slate>
      </div>
    </div>
  );
};

export default RichText;
