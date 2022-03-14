import Link from "next/link";
import { useState } from "react";
import Meta from "../components/Meta";

const dev = process.env.NODE_ENV !== "production";
const locStorTodo = typeof window !== "undefined" ? localStorage.getItem("todo") : null

const domain = dev ? "http://localhost:4000/" : "https://nextjs-test-backend.herokuapp.com/";

function data({ jsonData }) {
    const [todo, setTodo] = useState(locStorTodo | "");
    const [errorCode, setErrorCode] = useState("");
    const [data, setData] = useState(jsonData);

    console.log(domain);

    function submit(e) {
        e.preventDefault();

        window.localStorage.setItem("todo", todo)

        if (!todo) {
            setErrorCode("Zpráva je povinná!");
            return;
        }

        (async function () {
            const Rtodo = { todo };

            const arr = [Rtodo];
            const response = await fetch(`${domain}todo`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(arr),
            });

            window.location.reload()
        })();
    }

    return (
        <>
            <Meta title="posts"></Meta>
            <h1>data </h1>

            <form onSubmit={(e) => submit(e)} action="">
                <label htmlFor="todo">Input a new value: </label>
                <br />
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                    id="todo"
                />
                <button type="submit">send</button>
            </form>
            <h1>{errorCode}</h1>
            <div className="posts">
                {data.reverse().map((d) => {
                    return (
                        <Link key={d.id} href="/data/[id]" as={`/data/${d.id}`}>
                            <div className="post">
                                <p>{d.id}</p>
                                <h6>{d.datum}</h6>
                                <h2>{d.todo}</h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(`${domain}todo`);
    const jsonData = await res.json();
    return {
        props: {
            jsonData,
        },
    };
};

export default data;
