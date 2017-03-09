import React, { Component } from 'react';
import List from './list'
import Search from './search'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchWord: null
        }
    }

    setSearchWord = (searchWord) => {
        this.setState({searchWord})
    }

    render() {
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search setSearchWord={this.setSearchWord}/>
                </section>
                 <List searchWord={this.state.searchWord}/>
            </div>
        );
    }
}

export default App;
