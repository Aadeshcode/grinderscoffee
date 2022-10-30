import React from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import axios from "axios";
import ReadOnly from "../../components/Slate/ReadOnly";
import {
  AiFillFacebook,
  AiOutlineArrowLeft,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { shareModalOpen } from "../../action/globalAction";
import { BsPinterest } from "react-icons/bs";
import { Divider } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
const OneBlog = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const slug = router.query.slug;
  const { data, isLoading, isError, error } = useQuery(`${slug}`, async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/article/${slug}`
    );
    if (data) {
      return data;
    }
  });
  return (
    <div>
      <div className="page-left">
        <div className="d-flex p-3 ">
          <AiOutlineArrowLeft />
          <span onClick={() => router.back()}> Back</span>
        </div>
        <div className="flex-center align-items-center mt-5">
          <div className="p-5 ">
            <h1 className="font-caps display-1 text-center">{data?.topic}</h1>
            <p className="text-center">
              Published By Grinders Coffee, Published on{" "}
              {data?.createdAt?.substring(0, 10)}{" "}
            </p>

            <span className="text-center"></span>
            <div
              className="btn pointer d-block"
              onClick={() => dispatch(shareModalOpen(data?.topic))}
            >
              <p className="font-caps font-bold">Share</p>
              <div
                className="flex-center mt-3"
                onClick={() => dispatch(shareModalOpen(data?.topic))}
              >
                <AiFillFacebook />
                <AiOutlineTwitter />
                <BsPinterest />
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 d-none d-lg-block ">
          <Divider />
          <p className="font-caps text-center p-5">Read More</p>

          <div className="p container">
            {data?.recent?.map((blog) => (
              <div key={blog._id} className="row align-items-start my-5">
                <div key={blog._id} className="col-3">
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
                  <a className="px-3 col-9">
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
      <div className="page-right">
        <div className="d-lg-none">
          <div className="flex-center align-items-center mt-5">
            <div className="p-md-5 p-3 ">
              <h1 className="font-caps display-1 text-center">{data?.topic}</h1>
              <p className="text-center">
                Published By Grinders Coffee, Published on{" "}
                {data?.createdAt?.substring(0, 10)}{" "}
              </p>

              <span className="text-center"></span>
              <div
                className="btn pointer d-block"
                onClick={() => dispatch(shareModalOpen(data?.topic))}
              >
                <p className="font-caps font-bold">Share</p>
                <div
                  className="flex-center mt-3"
                  onClick={() => console.log("clicked")}
                >
                  <AiFillFacebook />
                  <AiOutlineTwitter />
                  <BsPinterest />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="py-5 rightpageslug">
          {data?.article && <ReadOnly value={data?.article} />}
        </div>
        <div className="p-5 d-block d-lg-none ">
          <Divider />
          <p className="font-caps text-center p-5">Read More</p>

          <div className="p-5 container">
            {data?.recent?.map((blog) => (
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
                <div className="px-3 col-8">
                  <p className="font-caps text-secondary">
                    Published on {blog.createdAt.substring(0, 10)}
                  </p>
                  <h1 className="font-caps" style={{ fontSize: "1.5rem" }}>
                    {blog.topic}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBlog;

export async function getStaticProps({ params }) {
  try {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(`${params.slug}`, async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_DOMAIN}/article/${params.slug}`
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

export async function getStaticPaths() {
  try {
    const { data, error } = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/article`
    );

    if (error || !data) {
      return { notFound: true };
    }
    const paths = data.map((post) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    return { notFound: true };
  }
}
