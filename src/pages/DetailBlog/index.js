import React from 'react'
import {RegisterBg} from '../../assets'
import './detailBlog.scss'
import { useHistory } from 'react-router-dom'
import { Gap, Link } from '../../components'

const DetailBlog = () => {

    const history = useHistory();

    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="" />
            <p className="blog-title">Title</p>
            <p className="blog-author">Author - Date</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nesciunt dolorem, modi error similique dolores maiores voluptatibus quisquam voluptatem aut vero temporibus nemo architecto natus, blanditiis corrupti dignissimos! Cupiditate, fuga quidem. Minima explicabo unde doloribus rem? Tempore atque illum eius voluptatibus ab nobis tenetur. Magni inventore ratione deserunt saepe laborum hic in minima beatae tenetur, labore incidunt, dolor atque adipisci iusto praesentium ut numquam necessitatibus enim iure sit voluptatem porro. Laboriosam, tenetur? Ipsum deserunt tempora porro? Placeat eos magni est. Laborum facilis, modi quis pariatur consectetur nesciunt. Deserunt impedit laudantium atque necessitatibus consequuntur, sequi quae eligendi aut hic dolor eveniet.</p>
            <Gap height={10} />
            <Link title="Kembali ke Home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
