import React, { useEffect, useRef, useState } from "react";
import { BsTable } from "react-icons/bs";
import { Transforms } from "slate";
import usePopup from "./usePopup";
import { TableUtil } from "./TableUtil";
import { isBlockActive, isMarkActive } from "../MarkActive";
import { Button } from "@chakra-ui/react";

const Table = ({ editor }) => {
  const tableOptionsRef = useRef();
  const [selection, setSelection] = useState();
  const [showOptions, setShowOptions] = usePopup(tableOptionsRef);
  const [tableData, setTableData] = useState({
    row: 0,
    column: 0,
  });
  const [tableInput, setTableInput] = useState(
    Array.from({ length: 6 }, () =>
      Array.from({ length: 6 }, (v, i) => ({
        bg: "lightGray",
        column: i,
      }))
    )
  );
  useEffect(() => {
    const newTable = Array.from({ length: 6 }, (obj, row) =>
      Array.from({ length: 6 }, (v, col) => ({
        bg:
          row + 1 <= tableData.row && col + 1 <= tableData.column
            ? "orange"
            : "lightgray",
        column: col,
      }))
    );
    setTableInput(newTable);
  }, [tableData]);
  const table = new TableUtil(editor);

  const handleButtonClick = () => {
    setSelection(editor.selection);
    setShowOptions((prev) => !prev);
  };
  const handleInsert = () => {
    selection && Transforms.select(editor, selection);
    setTableData({ row: -1, column: -1 });
    table.insertTable(tableData.row, tableData.column);
    setShowOptions(false);
  };
  return (
    <div ref={tableOptionsRef} className="popup-wrapper">
      <div className="mx-1 mt-1 d-flex flex-wrap">
        <Button
          value="table"
          selected={isBlockActive(editor, "table")}
          format={"table"}
          onClick={handleButtonClick}
        >
          <BsTable />
        </Button>
      </div>

      {showOptions && (
        <div className="popup">
          {tableData.row >= 1 && (
            <div>
              <i>{`${tableData.row} x ${tableData.column}`}</i>
            </div>
          )}
          <div className="table-input">
            {tableInput.map((grp, row) =>
              grp.map(({ column, bg, index }) => (
                <div
                  key={index}
                  onClick={() => handleInsert()}
                  onMouseOver={() =>
                    setTableData({ row: row + 1, column: column + 1 })
                  }
                  className="table-unit"
                  style={{ border: `1px solid ${bg}` }}
                ></div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
