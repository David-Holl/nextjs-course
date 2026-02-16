function Main({ number = "x", content = "unkown" }) {
  return (
    <main>
      <p>
        {number}. {content}
      </p>
    </main>
  );
}

export default Main;
