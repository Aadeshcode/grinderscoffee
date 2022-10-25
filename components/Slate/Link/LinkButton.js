import { insertLink } from "./linkUtil";
import { isBlockActive } from "../MarkActive";
import { BsLink } from "react-icons/bs";
import { Button } from "@chakra-ui/react";


const LinkButton = (props) => {
  const { editor } = props;
  const handleInsertLink = () => {
    const url = prompt("Enter URL");
    insertLink(editor, url);
  };
  return (
    <div className="mx-1 mt-1 d-flex flex-wrap">
      <Button
        value="link"
        selected={isBlockActive(editor, "link")}
        format={"link"}
        onClick={handleInsertLink}
      >
        <BsLink />
      </Button>
    </div>
  );
};

export default LinkButton;
