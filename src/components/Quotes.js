import React from 'react';

export default class Quotes extends React.Component {
	state = {
		isLoaded:false,
		quote: "",
		items:[]
	}
		apiCall = () => {
			 fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
	      .then(res => res.json())
	      .then(
	        (result) => {
	        	const randomNum=  Math.floor(Math.random() * result.quotes.length);
	          this.setState({
	            isLoaded: true,
	            items: result.quotes,
	            quote:result.quotes[randomNum]
	          });
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      );
		}
	handleQuotes = () => {
		const random = Math.floor(Math.random() * this.state.items.length);
		const quote = this.state.items[random];
		this.setState(() => ({quote}));
	}
	  componentDidMount() {
			this.apiCall();
	  }

	render() {
		return (
			<div id="quote-box">
				<p id ="text">{this.state.quote.quote}</p><br/>
				<p id="author">{this.state.quote.author}</p>
				<button id="new-quote" onClick={this.handleQuotes}>New quote</button>
				{console.log(this.state.items[0])}
			</div>
			)
	}
}