import React, {Component} from 'react'

class Search extends Component{

    search = () => {
        let searchWord = this.refs.searchWord.value.trim()
        if (searchWord){
            this.props.setSearchWord(searchWord)
        }
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="enter the name you search" ref='searchWord'/>
                <button onClick={this.search}>Search</button>
            </div>
        )
    }

}
export default Search