import axios from "axios";

export const uploadImageCallback = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      `https://imageuploadcanotes.herokuapp.com/api/upload`,
      formData,
      config
    );

    return {
      data: { link: "https://canotes.s3.ap-south-1.amazonaws.com" + data },
    };
  } catch (error) {
    console.error(error);
  }
};
