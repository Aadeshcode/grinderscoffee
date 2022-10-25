import { Button } from "@chakra-ui/react";
import { useSlate } from "slate-react";
import { isBlockActive, toggleBlock } from "../MarkActive";

export const BlockButton = ({ format, children }) => {
  const editor = useSlate();

  return (
    <div className="d-flex justify-content-center mx-1 mt-1 flex-wrap">
      <Button
        value={format}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
        style={
          isBlockActive(editor, format)
            ? { backgroundColor: "#ffddc0", lineHeight: 1 }
            : { lineHeight: 1 }
        }
      >
        {children}
      </Button>
    </div>
  );
};
