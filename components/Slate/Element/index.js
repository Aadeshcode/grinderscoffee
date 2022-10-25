import Link from "../Link/Link";
import Image from "../Image/Image";
export const Element = (props) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return (
        <h1 className="display-3" {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 className="display-5" {...attributes}>
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h3 className="display-6" {...attributes}>
          {children}
        </h3>
      );
    case "blockquote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    case "table":
      return (
        <div className="table-responsive">
          <table className="table table-bordered">
            <tbody {...attributes}>{children}</tbody>
          </table>
        </div>
      );
    case "table-row":
      return <tr {...attributes}>{children}</tr>;
    case "table-cell":
      return <td {...attributes}>{children}</td>;

    case "link":
      return <Link {...props} />;
    case "image":
      return <Image {...props} />; //eslint-disable-line

    default:
      return <p {...attributes}>{children}</p>;
  }
};
