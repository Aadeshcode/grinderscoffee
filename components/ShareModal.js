/* eslint-disable react/jsx-no-target-blank */
import { useRouter } from "next/router";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsReddit,
  BsWhatsapp,
  BsPrinter,
  BsPinterest,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { shareModalClose } from "../action/globalAction";

const ShareModal = () => {
  const router = useRouter();
  const share = router.asPath;

  const dispatch = useDispatch();
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const domainShare = domain + share;
  const { show, data } = useSelector((state) => state.shareModal);
  return (
    <div>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => dispatch(shareModalClose())}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container sharebox">
            <div className="row gx-2 justify-content-center">
              <div className="col-12 col-sm-6 col-md-3 m-2">
                <div className="d-grid " style={{ backgroundColor: "#3c5998" }}>
                  <a
                    className="btn text-light flex-center py-3"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${domainShare}`}
                    rel="nofollow noopener"
                    title="Facebook"
                    target="_blank"
                  >
                    <BsFacebook />
                    &nbsp;Facebook
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 m-2">
                {" "}
                <div className="d-grid" style={{ backgroundColor: "#53a9f4" }}>
                  <a
                    className="btn btn-twitter text-light flex-center py-3"
                    href={`https://twitter.com/intent/tweet?url=${domainShare}&text=${data}`}
                    rel="nofollow noopener"
                    title="Twitter"
                    target="_blank"
                  >
                    <BsTwitter />
                    &nbsp;Twitter
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 m-2">
                {" "}
                <div className="d-grid" style={{ backgroundColor: "#5f7d95" }}>
                  <a
                    className="btn text-light flex-center py-3"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${domainShare}`}
                    title="Linkedin"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    <BsLinkedin />
                    &nbsp;Linkedin
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 m-2">
                {" "}
                <div className="d-grid" style={{ backgroundColor: "#ec4603" }}>
                  <a
                    className="btn btn-reddit text-light flex-center py-3"
                    href={`http://reddit.com/submit?url=${domainShare}&title=${data}`}
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <BsReddit />
                    &nbsp;Reddit
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 m-2">
                {" "}
                <div className="d-grid" style={{ backgroundColor: "white" }}>
                  <a
                    className="btn btn-white border flex-center py-3"
                    href={`https://mail.google.com/mail/u/0/?view=cm&su=${data}&body=${domainShare}`}
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <SiGmail /> &nbsp;Email
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 m-2">
                {" "}
                <div className="d-grid" style={{ backgroundColor: "#4caf50" }}>
                  <a
                    className="btn btn-whatsapp text-light flex-center py-3"
                    href={`whatsapp://send?text=${data}-${domainShare}`}
                    title="Whatsapp"
                    target="_blank"
                  >
                    <BsWhatsapp /> &nbsp;Whatsapp
                  </a>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3 m-2">
                {" "}
                <div className="d-grid" style={{ backgroundColor: "#4caf50" }}>
                  <a
                    className="btn btn-secondary text-white flex-center py-3"
                    href={`http://www.printfriendly.com/print?url=${domainShare}&title=${data}`}
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <BsPrinter />
                    &nbsp;Print
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 m-2">
                {" "}
                <div className="d-grid" style={{ backgroundColor: "#cb1f25" }}>
                  <a
                    className="btn btn-pinterest text-white flex-center py-3"
                    href={`http://pinterest.com/pin/create/button/?url=${domainShare}&description=${data}&media=https://canotes.vercel.app/_next/image?url=%2Fpics%2FIncome%20Tax.png&w=1920&q=75`}
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <BsPinterest />
                    &nbsp;Pinterest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => dispatch(shareModalClose())}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShareModal;
