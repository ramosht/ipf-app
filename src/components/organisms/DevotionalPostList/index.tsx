import React from 'react'

import {PostPreview} from '@molecules/index'
 
type DevotionalPostListProps = {
}

const DevotionalPostList: React.FC<DevotionalPostListProps> = ({}) => {
    return (
        <>
            <PostPreview style={{marginBottom: 8}} />
            <PostPreview style={{marginBottom: 8}} />
            <PostPreview style={{marginBottom: 8}} />
            <PostPreview style={{marginBottom: 8}} />
            <PostPreview style={{marginBottom: 8}} />
        </>
    )
}

export default DevotionalPostList;