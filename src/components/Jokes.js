import React from 'react';


class Jokes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            loading: false
        }
    }

    render() {
        console.log('re-rendering');
        return (
            <div>
                <p>{this.state.loading ? "Loading a new joke" : this.state.joke}</p>
                <button onClick={this._fetchJoke}>Click for a new joke</button>
            </div>
        )
    }

    _fetchJoke = () => {

        this.setState({loading: true});
        console.log(`Loading status from state: ${this.state.loading}`);
 
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';
        fetch(url)
            .then(response => response.json())
            .then(joke => {
                // Load the joke into our component state here
                this.setState({
                    joke: joke.value,
                    loading: false
                }, () => {

                })
            })
         

    }
}

export default Jokes;