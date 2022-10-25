import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axios from "axios";
import ReadOnly from "../../components/Slate/ReadOnly";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
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
  const { data, isLoading, isError, error } = useQuery(`${slug}`, () =>
    axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/article/${slug}`)
  );
  return (
    <div>
      <div className="page-left">
        <div className="flex-center align-items-center mt-5">
          <div className="p-5 ">
            <h1 className="font-caps display-1 text-center">
              {data?.data?.topic}
            </h1>
            <p className="text-center">
              Published By Grinders Coffee, Published on{" "}
              {data?.data?.createdAt.substring(0, 10)}{" "}
            </p>

            <span className="text-center"></span>
            <div
              className="btn pointer d-block"
              onClick={() => dispatch(shareModalOpen(data?.data?.topic))}
            >
              <p className="font-caps font-bold">Share</p>
              <div
                className="flex-center mt-3"
                onClick={() => dispatch(shareModalOpen(data?.data?.topic))}
              >
                <AiFillFacebook />
                <AiOutlineTwitter />
                <BsPinterest />
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 ">
          <Divider />
          <p className="font-caps text-center p-5">Read More</p>

          {data?.data?.recent.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} key={blog._id}>
              <a className="d-flex mt-5">
                <div
                  style={{
                    height: "150px",
                    width: "150px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    height="150px"
                    width="150px"
                    src={blog.thumbnail}
                    alt="thumbnail"
                    // className="img-fluid"
                    // layout="responsive"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="px-3">
                  <p className="font-caps text-secondary">
                    Published on {data?.data?.createdAt.substring(0, 10)}
                  </p>
                  <h1 className="font-caps" style={{ fontSize: "1.5rem" }}>
                    {blog.topic}
                  </h1>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="page-right">
        <div className="py-5 pr-5" style={{ paddingRight: "5rem" }}>
          {data && <ReadOnly value={data?.data?.article} />}
        </div>
      </div>
    </div>
  );
};

export default OneBlog;
