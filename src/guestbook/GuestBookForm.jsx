const GuestBookForm = ({ ref, name, setName }) => {
  return (
    <>
      <label htmlFor="name">Name : </label>
      <input
        ref={ref}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
    </>
  );
};

export default GuestBookForm;
