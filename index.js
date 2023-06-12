function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);


  const getNewQuote =() => {
	let randIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randIndex]);
  }

  return (
    <div className="container pt-5">
      <div className="container p-5 bg-light">
        <div className="card">
          <div className="card-header">Quotes</div>
          <div className="card-body">
				{randomQuote ? (
					<>
					<p className="card-text">"{randomQuote.text}"</p>
					<h5 className="card-title">- {randomQuote.author || "Unkown"}</h5>
					</>
				):(
					<h2>Loading</h2>
				)}
				<div className="row">
					<div className="col">
						<button onClick={getNewQuote} className="btn btn-primary">New Quote</button>
					</div>
					<div className="col">
						<a href="" className="btn btn-warning">
							<i className="fa fa-twitter"></i>
						</a>
					</div>
					<div className="col">
						<a href="" className="btn btn-danger"></a>
					</div>
				</div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
