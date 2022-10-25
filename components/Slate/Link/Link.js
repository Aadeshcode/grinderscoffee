import React from "react";
import { useFocused, useSelected, useSlateStatic } from "slate-react";
import { FaUnlink } from "react-icons/fa";
import { removeLink } from "./linkUtil";
const Link = ({ attributes, element, children }) => {
  const editor = useSlateStatic();
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div className="link">
      <a href={element.href} target="_blank" rel="noreferrer" {...attributes}>
        {children}
      </a>
      {selected && focused && (
        <div className="link-popup" contentEditable="false">
          <a href={element.href} target="_blank" rel="noreferrer">
            {element.href}
          </a>
          <button onClick={() => removeLink(editor)}>
            <FaUnlink />
          </button>
        </div>
      )}
    </div>
  );
};

export default Link;
