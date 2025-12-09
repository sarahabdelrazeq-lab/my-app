"use client";

import { useEffect, useState } from "react";

export default function Test() {
  const [height, setHeight] = useState<
    Record<string, number | null | undefined | string>
  >({});

  if (typeof window === "undefined") {
    return <></>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const setHeightListener = () => {
      setHeight({
        innerHeight: window.innerHeight,
        visualViewportHeight: window.visualViewport?.height,
      });

      const container = document.getElementById("container")?.style;
      if (container) {
        container.height = `${
          window.visualViewport?.height || window.innerHeight
        }px`;
      }
    };

    window.visualViewport?.addEventListener("resize", setHeightListener);
    window.visualViewport?.addEventListener("scroll", setHeightListener); // important on iOS

    setHeightListener(); // first run

    return () => {
      window.visualViewport?.removeEventListener("resize", setHeightListener);
      window.visualViewport?.removeEventListener("scroll", setHeightListener);
    };
  }, []);

  return (
    <main>
      <div
        id="container"
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
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
          {JSON.stringify(height)}
          {/* <div
            style={{
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              height: "100%",
              marginBottom: "auto",
              flex: 1,
              display: "flex",
            }}
          >

          </div> */}
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
