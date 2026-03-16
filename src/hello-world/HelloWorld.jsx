const HelloWorld = () => {
  return (
    <>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </>
  );
};

export default HelloWorld;

function HeaderHelloWorld() {
  const text = "Hello World";
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
