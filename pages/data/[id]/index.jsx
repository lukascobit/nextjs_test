import React from 'react'
import Link from 'next/link';
import Meta from '../../../components/Meta';

const dev = process.env.NODE_ENV !== "production";
const domain = dev ? "http://localhost:4000/" : "https://nextjs-test-backend.herokuapp.com/";


function Post({ data }) {

    data = data[0];
    return (
        <div className='post'>
            <Meta title={data.title}></Meta>
            <Link href="/data"><button className='goBack'>&larr;</button></Link>
            <p>{data.id}</p>
            <h6>{data.datum}</h6>
            <h2>{data.todo}</h2>
        </div>
    )
}

export default Post;

export const getStaticProps = async (context) => {
    const res = await fetch(`${domain}todo/${context.params.id}`)

    const data = await res.json()

    return {
        props: {
            data
        },
    }
}


export const getStaticPaths = async () => {

    const res = await fetch(`${domain}todo/`)
    const data = await res.json()


    const ids = data.map(d => d.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}