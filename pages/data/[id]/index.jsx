import React from 'react'
import Link from 'next/link';
import Meta from '../../../components/Meta';


const domain = process.env.DOMAIN

function Post({ data }) {

    return (
        <div className='post'>
            <Meta title={data.title}></Meta>
            <Link href="/data"><button className='goBack'>&larr;</button></Link>
            <h1>{data.title}</h1>
            <h2>{data.body}</h2>
        </div>
    )
}

export default Post;

export const getStaticProps = async (context) => {
    const res = await fetch(`${domain}/api/posts/${context.params.id}`)

    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}


export const getStaticPaths = async () => {

    const res = await fetch(`${domain}/api/posts`)
    const data = await res.json()


    const ids = data.map(d => d.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}