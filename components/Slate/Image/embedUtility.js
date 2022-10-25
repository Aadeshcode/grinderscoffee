import { Transforms } from "slate";
export const createImageNode = (alt, { url, width, height }) => ({
  type: "image",
  alt,
  url,
  width,
  height,
  children: [{ text: "" }],
});

export const createParagraph = () => ({
  type: "paragraph",
  children: [{ text: "" }],
});

export const insertEmbed = (editor, embedData, format) => {
  const { url, width, height } = embedData;
  if (!url) return;
  embedData.width = width ? `${width}px` : "100%";
  embedData.height = height ? `${height}px` : "auto";
  const embed = createImageNode("EditorImage", embedData);

  Transforms.insertNodes(editor, embed);
  Transforms.insertNodes(editor, createParagraph(""), { mode: "highest" });
};
