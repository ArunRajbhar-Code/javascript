function Button({ button }) {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "src/assets/t4.webp",
    imageSize: 90,
  };
  return (
    <>
      <h1>one more list</h1>
      <div>
        <h3>{user.name}</h3>
        <img
          src={user.imageUrl}
          alt={"image of" + user.name}
          style={{ width: user.imageSize, height: user.imageSize }}
        />
      </div>
      <ul>
        {button.map((button, index) => (
          <li key={index}>{button}</li>
        ))}
      </ul>
    </>
  );
}
export default Button;
