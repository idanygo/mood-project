import styles from "@/styles/Happy.module.css";
import Layout from "./components/Layout";

export default function Happy() {
  return (
    <Layout backgroundColor="#ffc0c0" >
      <main className={styles.main}>
        <div>
          <p>HELLO HAPPY!</p>
        </div>
      </main>
    </Layout>
  );
}
