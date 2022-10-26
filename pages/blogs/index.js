import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";

const BlogShow = () => {
  const { data, isLoading, isError, error } = useQuery(`getArticles`, () =>
    axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/article`)
  );

  return (
    <div>
      <div className="page-left">
        <div className="p-5 container">
          {data?.data?.map((blog) => (
            <div key={blog._id} className="row align-items-start my-5">
              <div key={blog._id} className="col-2">
                <Link href={`/blogs/${blog.slug}`}>
                  <a className="d-flex">
                    <div className="thumbnail-wrapper">
                      <Image
                        height={150}
                        width={150}
                        src={blog.thumbnail}
                        alt="thumbnail"
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <Link href={`/blogs/${blog.slug}`}>
                <a className="px-3 col-8">
                  <p className="font-caps text-secondary">
                    Published on {blog.createdAt.substring(0, 10)}
                  </p>
                  <h1 className="font-caps" style={{ fontSize: "1.5rem" }}>
                    {blog.topic}
                  </h1>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="page-right">
        <div className="p-5 container">
          {data?.data?.map((blog) => (
            <div key={blog._id} className="row align-items-start my-5">
              <div key={blog._id} className="col-2">
                <Link href={`/blogs/${blog.slug}`}>
                  <a className="d-flex">
                    <div className="thumbnail-wrapper">
                      <Image
                        height={150}
                        width={150}
                        src={blog.thumbnail}
                        alt="thumbnail"
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <Link href={`/blogs/${blog.slug}`}>
                <a className="px-3 col-8">
                  <p className="font-caps text-secondary">
                    Published on {blog.createdAt.substring(0, 10)}
                  </p>
                  <h1 className="font-caps" style={{ fontSize: "1.5rem" }}>
                    {blog.topic}
                  </h1>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogShow;