import React, { useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { isBlockActive } from "../MarkActive";
import usePopup from "../Table/usePopup.js";
import { insertEmbed } from "../Image/embedUtility";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { uploadImageCallback } from "../../../utils/uploadImageCallback";

const Embed = ({ editor, format }) => {
  const urlInputRef = useRef();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [showInput, setShowInput] = usePopup(urlInputRef);
  const loading = useSelector((state) => state.loading);
  const [formData, setFormData] = useState({
    url: "",
    width: "100%",
    height: "auto",
  });

  const handleButtonClick = async (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    // console.log(e.target.files[0])
    try {
      const file = e.target.files[0];
      const { data } = await uploadImageCallback(file);
      formData.url = data.link;
      insertEmbed(editor, { ...formData }, format);
      // setShowInput(false);
      setFormData({
        url: "",
        width: "100%",
        height: "auto",
      });
    } catch (error) {}

    // setShowInput((prev) => !prev);
  };

  return (
    <div ref={urlInputRef} className="popup-wrapper">
      <div className="mx-1 mt-1 d-flex flex-wrap">
        <Button
          value="image"
          selected={isBlockActive(editor, format)}
          format={format}
          onClick={() => inputRef.current.click()}
        >
          <input
            ref={inputRef}
            className="form-control"
            type="file"
            id="formFile"
            onChange={handleButtonClick}
            hidden
          />
          {/* eslint-disable-next-line */}
          <BsFillImageFill />
        </Button>
      </div>
    </div>
  );
};

export default Embed;
