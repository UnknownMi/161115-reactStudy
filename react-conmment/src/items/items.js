import React, { Component } from 'react';
import './item.css'

export default class Items extends Component{

    removeItem = () => {
        let {comment, remove, index} = this.props
        if(confirm(`你确定要删除${comment.userName}的评论吗？`)){
            remove(index)
        }
    }

    render(){
        let {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.removeItem}>删除</a>
                </div>
                <p className="user"><span >{comment.userName}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
