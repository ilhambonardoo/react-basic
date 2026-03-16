import "./HelloWorld.css";

const HelloWorld = () => {
  const props = {
    text: "Hello World spread text",
  };
  return (
    <>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </>
  );
};

export default HelloWorld;

function HeaderHelloWorld({ text = "Ups lupa kasih teks" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selamat Belajar ReactJs";

  return (
    <div>
      <p className="content">{text.toUpperCase()}</p>
    </div>
  );
}
