import React, { useRef, useLayoutEffect, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const images = [
  "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
function Grid({ delayPerPixel = 0.0008, numItems = 1, setSelectedAction }) {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, []); //eslint-disable-line

  return (
    <motion.div initial="hidden" animate={controls} variants={{}}>
      {Array.from({ length: numItems }).map((_, i) => (
        <GridItem
          key={i}
          i={i}
          originIndex={26}
          delayPerPixel={delayPerPixel}
          originOffset={originOffset}
          setSelectedAction={setSelectedAction}
        />
      ))}
    </motion.div>
  );
}

function GridItem({
  delayPerPixel,
  i,
  originIndex,
  originOffset,
  setSelectedAction,
}) {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef();

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft,
    };

    if (i === originIndex) {
      originOffset.current = offset.current;
    }
  }, [delayPerPixel]); //eslint-disable-line

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel]); //eslint-disable-line

  return (
    <>
      <Box
        ref={ref}
        variants={itemVariants}
        custom={delayRef}
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => setSelectedAction("menu")}
      >
        <h1 className="display-3 text-white p-5">Menu</h1>
      </Box>
      <Box
        ref={ref}
        variants={itemVariants}
        custom={delayRef}
        style={{
          backgroundImage: "url(/pics/packet.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => setSelectedAction("blog")}
      >
        <h1 className="display-3 text-white p-5">Blog</h1>
      </Box>
    </>
  );
}

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (delayRef) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: delayRef.current },
  }),
};

const Box = styled(motion.div)`
  margin: 10px;
  display: inline-block;
  height: 200px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`;
export default Grid;
