export default function Home() {
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

      <div style={{ height: 0 }}>
        <audio
          controls
          style={{ opacity: 0, width: 0, height: 0 }}
          preload="auto"
        >
          <source
            src="https://arbok.sooqdev3.com/originals/chat/d0/0b/d00bc8994b054e6a3d25fbac91c35537e46ae94104f30af1af4315fac61c29d0.mp3"
            type="audio/mpeg"
          />
        </audio>
      </div>
    </main>
  );
}
