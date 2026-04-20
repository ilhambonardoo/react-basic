const SayHelloForm = () => {
  function handleClick(e) {
    e.preventDefault();
    const name = document.getElementById("input-name").value;
    document.getElementById("text-hello").innerText = `Hello ${name}`;
  }
  return (
    <div>
      <form>
        <input type="text" id="input-name" />
        <button onClick={handleClick}>Say Hello</button>
      </form>

      <h1 id="text-hello">Hello World</h1>
    </div>
  );
};

export default SayHelloForm;
