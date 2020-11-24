import React from 'react'
import { LoginBg } from '../../../assets'
import './blogItem.scss'
import { useHistory } from 'react-router-dom'
import { Button, Gap } from '../../atoms'

const BlogItem = (props) => {

    const history = useHistory()

    const {title, name, date, image, body} = props

    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="" />
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={15} />
                <Button title="View Detail" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
