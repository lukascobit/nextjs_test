import styles from "../styles/Layout.module.css";



export default function Home() {
  async function fe() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts? limit=6`);
    const data = await res.json()
    console.log(data);
  }

  console.log(fe());
  return <div className={styles.container}>
    <h1>Home</h1>

  </div>;
}
