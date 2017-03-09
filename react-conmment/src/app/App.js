import React, { Component } from 'react';
import Add from '../add/add'
import List from '../list/list'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: []
        }
    }

    add = (comment) => {
        let {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    remove = (index) => {
        let {comments} = this.state
        comments.splice(index, 1)
        this.setState({comments})
    }

    componentWillMount(){
        const comments = [
            {userName: 'Mercy', content: 'Heros Never Dead!'},
            {userName: 'Genji', content: '有基佬拉我裤链！！'},
            {userName: '麦克雷', content: '午时已到！！'}
        ]
        this.setState({comments})
    }

    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add add={this.add}/>
                    <List comments={this.state.comments} remove={this.remove}/>
                </div>
            </div>
        );
    }
}

export default App;
