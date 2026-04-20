import useOnline from "./OnlineHook";

const Online = () => {
  const isOnline = useOnline();
  return (
    <div>
      <h1>{isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default Online;
