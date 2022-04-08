import Layout from "../components/layout";
import styles from "../styles/Blog.module.css";

interface CardBlog {
  id: number;
  title: string;
  body: string;
}

interface BlogData {
  dataBlog: CardBlog[];
}

export default function blog(props: BlogData) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="blog">
      {dataBlog.map((item) => {
        return (
          <div key={item.id} className={styles.card}>
            <div>{item.title}</div>
            <div>{item.body}</div>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
