'use client';

export default function Test() {
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
        <div>
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

        <div>
          <input />
        </div>
      </div>
    </main>
  );
}
