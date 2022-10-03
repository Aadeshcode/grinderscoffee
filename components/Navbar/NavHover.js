import Image from "next/image";
import React from "react";

const NavHover = ({ active }) => {
  console.log(active);
  return (
    <>
      <div
        className="nav-hover"
        style={active ? { backgroundColor: "white" } : {}}
      >
        <div className="nav-hover-image">
          <video
            autoplay="autoplay"
            loop
            muted
            playsinline
            poster="https://noccoffeeco.com/media/2021/04/About.jpg"
            className="nav-hover__img-item page-left__media"
            data-id="0"
            style={active === "ABOUT" ? { opacity: 1 } : { opacity: 0 }}
          >
            <source
              src="https://noccoffeeco.com/media/2021/05/About.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="nav-hover-image">
          <video
            autoplay="autoplay"
            loop
            muted
            playsinline
            poster="https://noccoffeeco.com/media/2019/03/Home_portrait.jpg"
            className="nav-hover__img-item page-left__media"
            data-id="0"
            style={active === "LOCATIONS" ? { opacity: 1 } : { opacity: 0 }}
          >
            <source
              src="https://noccoffeeco.com/media/2021/05/Home_portrait.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="nav-hover-image">
          <Image
            src="/pics/rewards.jpg"
            alt="rewards"
            height={850}
            width={700}
            style={
              active === "EVENTS"
                ? { opacity: 1, objectFit: "cover" }
                : { opacity: 0 }
            }
          />
        </div>
        <div className="nav-hover-image">
          <Image
            src="/pics/team.jpg"
            alt="team"
            height={870}
            width={600}
            style={
              active === "CONTACTS"
                ? { opacity: 1, objectFit: "cover" }
                : { opacity: 0 }
            }
          />
        </div>
        <div className="nav-hover-image">
          <Image
            src="/pics/packet.jpg"
            alt="team"
            height={870}
            width={600}
            style={
              active === "MENU"
                ? { opacity: 1, objectFit: "cover" }
                : { opacity: 0 }
            }
          />
        </div>
        <div className="nav-hover-image">
          <video
            autoplay="autoplay"
            loop
            muted
            playsinline
            poster="https://noccoffeeco.com/media/2019/03/roastery.jpg"
            className="nav-hover__img-item page-left__media"
            data-id="0"
            style={active === "ROASTERY" ? { opacity: 1 } : { opacity: 0 }}
          >
            <source
              src="https://noccoffeeco.com/media/2019/02/roastery_menu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "ABOUT"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <p
          className="nav-hover-text-item"
          data-id="0"
          style={{ top: "231.031px", fontFamily: "regular" }}
        >
          Where coffee meets design{" "}
        </p>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "LOCATIONS"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <p
          className="nav-hover-text-item"
          data-id="0"
          style={{ top: "300.031px", fontFamily: "regular" }}
        >
          Unusual Spaces Brought To Life
        </p>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "EVENTS"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <p
          className="nav-hover-text-item"
          data-id="0"
          style={{ top: "336.031px", fontFamily: "regular" }}
        >
          Unparalled Event and Workshop Experiences
        </p>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "ROASTERY"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <p
          className="nav-hover-text-item"
          data-id="0"
          style={{ top: "266.031px", fontFamily: "regular" }}
        >
          Carefully Selected Beans in Roastery House
        </p>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "CONTACTS"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <p
          className="nav-hover-text-item"
          data-id="0"
          style={{ top: "370.031px", fontFamily: "regular" }}
        >
          A Real Person Will Answer
        </p>
      </div>
      <div
        className="nav-hover-text"
        style={
          active === "MENU"
            ? { backgroundColor: "white", opacity: 1 }
            : { opacity: 0 }
        }
      >
        <p
          className="nav-hover-text-item"
          data-id="0"
          style={{ top: "410.031px", fontFamily: "regular" }}
        >
          Best Coffee Items In Chitwan
        </p>
      </div>
    </>
  );
};

export default NavHover;
