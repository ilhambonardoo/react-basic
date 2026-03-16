const HelloWorld = () => {
  return (
    <>
      <HeaderHelloWorld text="Hello World" />
      <ParagraphHelloWorld />
    </>
  );
};

export default HelloWorld;

function HeaderHelloWorld({ text = "Ups lupa kasih teks" }) {
  return (
    <h1
      style={{
        color: "red",
        backgroundColor: "black",
      }}
    >
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  const text = "Selamat Belajar ReactJs";
  const style = { color: "blue", backgroundColor: "bisque" };

  return (
    <div>
      <p style={style}>{text.toUpperCase()}</p>
    </div>
  );
}
