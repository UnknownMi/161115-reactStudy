import React from 'react'
export default function ({params}) {
    return (
        <div>用户名:{params.username}, 仓库名:{params.repoName}</div>
    )
}