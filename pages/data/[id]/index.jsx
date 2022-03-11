import React from 'react'
import { useRouter } from "next/router"
import Link from 'next/link';

function Post({ data }) {
    const router = useRouter()
    const { id } = router.query

    console.log(data);
    return (
        <div className='post'>
            <Link href="/data"><button>&larr;</button></Link>
            <h1>{id}</h1>
            <h1>{data.title}</h1>
            <h2>{data.body}</h2>
        </div>
    )
}

export default Post;


export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }

}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()


    const ids = data.map(d => d.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}