import Link from "next/link";


function data({ data }) {

    return (
        <>
            <title>data</title>
            <h1>data </h1>
            {data.map(d => {
                return (
                    <Link key={d.id} href="/data/[id]" as={`/data/${d.id}`}>
                        <div className="post">
                            <p>{d.id}</p>
                            <h1>{d.title}</h1>
                            <h4>{d.body}</h4>
                        </div>
                    </Link>

                )
            })}
        </>
    )

}



export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}




export default data;