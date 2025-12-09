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
    setHeight({
      innerHeight: window.innerHeight,
      visualViewportHeight: window.visualViewport?.height,
    });

    const setHeightListener = () => {
      setHeight({
        innerHeight: window.innerHeight,
        visualViewportHeight: window.visualViewport?.height,
      });
    };

    window.addEventListener("resize", setHeightListener);
    return () => window.removeEventListener("resize", setHeightListener);
  }, []);

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
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
