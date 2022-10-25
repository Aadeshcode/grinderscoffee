export const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <span className="font-bold">{children}</span>;
  }
  if (leaf.italic) {
    children = <i>{children}</i>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
