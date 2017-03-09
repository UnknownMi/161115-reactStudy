import React, {Component} from 'react'
import axios from 'axios'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstView: true,
            loading: false,
            users: [],
            errorMsg: null
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            firstView: false,
            loading: true
        })

        let {searchWord} = newProps

        const url = `https://api.github.com/search/users?q=${searchWord}`
        axios.get(url)
            .then(response => {
                let items = response.data.items
                const users = items.map(item => {
                    return {
                        html_url:item.html_url,
                        avatar_url: item.avatar_url,
                        login:item.login
                    }
                })

                this.setState({
                    loading: false,
                    users
                })
            })
            .catch(error => {
                this.setState({
                    loading:false,
                    errorMsg: error.message
                })
            })
    }

    render(){
        const {firstView, loading, users, errorMsg} = this.state
        if (firstView){
            return <h2>Enter Name To Search</h2>
        }else if(loading){
            return <h2>Loading result...</h2>
        }else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }else {
            let userList = users.map((user, index) => (
                <div className="card" key={index}>
                    <a href={user.html_url} target="_blank">
                        <img src={user.avatar_url} style={{width:'100px'}}/>
                    </a>
                    <p className="card-text">{user.login}</p>
                </div>
            ))
            return (
                <div className="row">{userList}</div>
            )
        }
    }
}

export default List