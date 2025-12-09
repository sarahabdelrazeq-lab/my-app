"use client";

// import { useEffect, useState } from "react";

export default function Test() {
  // const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   document.documentElement.style.setProperty(
  //     "--vh",
  //     `${window.innerHeight}px`
  //   );
  //   const setHeight = () => {
  //     document.documentElement.style.setProperty(
  //       "--vh",
  //       `${window.innerHeight}px`
  //     );
  //   };

  //   window.addEventListener("resize", setHeight);
  //   setHeight();

  //   return () => window.removeEventListener("resize", setHeight);
  // }, []);

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div style={{ backgroundColor: "red" }}>
          test <br />
          test <br />
          test <br />
        </div>

        <div
          style={{
            flex: 1,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "green",
          }}
        >
          <div
            style={{
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              height: "100%",
              marginBottom: "auto",
              flex: 1,
              display: "flex",
            }}
          ></div>
        </div>

        <div style={{ backgroundColor: "red" }}>
          <input placeholder="input" />
          test <br />
          test <br />
          test <br />
        </div>
      </div>
    </main>
  );
}
