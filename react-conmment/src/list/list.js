import React, { Component } from 'react';
import Items from '../items/items'

import './list.css'

export default class List extends Component{

    render(){
        let {comments,remove} = this.props
        let display = comments.length === 0? 'block':'none'
        let commentList = comments.map((comment, index)=>{
            return <Items comment={comment} key={index} remove={remove} index={index}/>
        })

        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display:display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {commentList}
                </ul>
            </div>
    )
    }
    }
