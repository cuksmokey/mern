import React from 'react'
import {Button, Gap, Input, Link, TextArea, Upload} from '../../components' 
import './create-blog.scss'
import { useHistory } from 'react-router-dom'

const CreateBlog = () => {
    const history = useHistory()
    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')} />
            <p className="title">Content New Blog Post</p>
            <Input label="Post Title"/>
            <Upload />
            <TextArea />
            <Gap height={10} />
            <div class="button-action">
                <Button title="Save" />
            </div>
        </div>
    )
}

export default CreateBlog
