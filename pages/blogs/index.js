import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import ScreenLoader from "../../components/ScreenLoader";

const BlogShow = () => {
  const { data } = useQuery(`getArticles`, async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/article`
    );
    if (data) {
      return data;
    }
  });

  return (
    <div>
      <div className="page-left">
        <div className="p-5 container">
          {data?.map((blog) => (
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
      <div className="page-right mt-5 mt-md-0">
        <div className="p-md-5  container">
          {data?.map((blog) => (
            <div key={blog._id} className="row align-items-start my-5">
              <div key={blog._id} className="col-4 col-md-2">
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
export async function getStaticProps() {
  try {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery("getArticles", async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_DOMAIN}/article`
      );
      return data;
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: 1,
    };
  } catch (error) {
    return { props: { data: {} }, revalidate: 1 };
  }
}
