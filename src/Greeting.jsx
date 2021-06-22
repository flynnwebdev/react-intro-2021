const Greeting = () => {
    const name = "Glen";
    const styles = {
        color: "red",
        fontSize: "30px"
    }

  return (
    <>
      <p style={styles}>Hello!</p>
      <p>Your name is {name}!!</p>
    </>
  );
};

export default Greeting;
