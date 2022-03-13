import Link from "next/link"
import { useState } from "react"
import Meta from "../components/Meta"

const domain = process.env.DOMAIN

function data({ data }) {
    const [todo, setTodo] = useState("")

    return (
        <>
            <Meta title="posts"></Meta>
            <h1>data </h1>

            <form action="">
                <label htmlFor="todo">Input a new value: </label><br />
                <input value={todo} onChange={e => setTodo(e.target.value)} type="text" id="todo" />
                <button type="submit">send</button>
            </form>
            {data.map(d => {
                console.log(d);
                return (
                    <Link key={d.id} href="/data/[id]" as={`/data/${d.id}`}>
                        <div className="post">
                            <p>{d.id}</p>
                            <h6>{d.datum}</h6>
                            <h2>{d.todo}</h2>
                        </div>
                    </Link>

                )
            })}
        </>
    )

}



export const getStaticProps = async () => {
    const res = await fetch(`${domain}/todo`);
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}




export default data;