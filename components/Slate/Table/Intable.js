import React from "react";
import Button from "../Common/Button";
import { TableUtil } from "./TableUtil";
import {
  AiOutlineInsertRowBelow,
  AiOutlineInsertRowRight,
} from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Box } from "@chakra-ui/react";

const InTable = ({ editor }) => {
  const table = new TableUtil(editor);

  const handleButtonClick = (action) => {
    switch (action) {
      case "row":
        table.insertRow();
        break;
      case "column":
        table.insertColumn();
        break;
      case "remove":
        table.removeTable();
        break;
      default:
        return;
    }
  };
  return (
    <Box display="flex" flex="row" alignItems="center" py={2}>
      <Button format="insert row" onClick={() => handleButtonClick("row")}>
        <AiOutlineInsertRowBelow />
      </Button>
      <Button
        format="insert column"
        onClick={() => handleButtonClick("column")}
      >
        <AiOutlineInsertRowRight />
      </Button>
      <Button format="remove table" onClick={() => handleButtonClick("remove")}>
        <MdOutlineDeleteOutline />
      </Button>
    </Box>
  );
};

export default InTable;
