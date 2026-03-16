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
  return <h1>Hello World</h1>;
}

function ParagraphHelloWorld() {
  return (
    <div>
      <p>Selamat Belajar ReactJs</p>
    </div>
  );
}
