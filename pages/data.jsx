
function data({ data }) {
    console.log(data);

    return (
        <h1>data</h1>
    )

}



export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts? limit=6`);
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}




export default data;