function Main({ number = "x", content = "unkown" , card}) {
  return (
    <main className={card ? "sub card" : "main card"}>
      <p>
        {number}. {content}
      </p>
    </main>
  );
}

export default Main;
