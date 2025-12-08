"use client";

export default function Test() {
  if (typeof window === "undefined") return <></>;
  
  return (
    <main
      style={{
        flex: 1,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: window.innerHeight,
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
