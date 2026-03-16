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
  return <h1>{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selamat Belajar ReactJs";
  return (
    <div>
      <p>{text.toUpperCase()}</p>
    </div>
  );
}
