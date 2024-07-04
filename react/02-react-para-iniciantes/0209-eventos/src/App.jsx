// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500

const App = () => {
  function handleScroll(event) {
    console.log(event);
  }

  window.addEventListener("scroll", handleScroll);
  return (
    <div style={{ height: "200vh" }}>
      <button onClick={() => alert(event.target.innerText)}>
        Compre Violão
      </button>
    </div>
  );
};

export default App;
