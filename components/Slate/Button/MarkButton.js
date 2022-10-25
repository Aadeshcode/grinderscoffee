import { Button } from "@chakra-ui/react";
import { useSlate } from "slate-react";
import { isMarkActive, toggleMark } from "../MarkActive";

const MarkButton = ({ format, children, tooltip }) => {
  const editor = useSlate();
  return (
    <div className="d-flex justify-content-center mx-1 mt-1 flex-wrap">
      <Button
        value={format}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleMark(editor, format);
        }}
        style={
          isMarkActive(editor, format)
            ? { backgroundColor: "#ffddc0", lineHeight: 1 }
            : { lineHeight: 1 }
        }
      >
        {children}
      </Button>
    </div>
  );
};
export default MarkButton;
