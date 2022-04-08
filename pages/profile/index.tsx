import Layout from "../../components/layout";
import { useRouter } from "next/router";
import styles from "../../styles/Profile.module.css";

interface userProfile {
  dataUsers: Array<any>;
}

export default function profile(props: userProfile) {
  const router = useRouter();
  const { dataUsers } = props;
  console.log(dataUsers);
  return (
    <Layout pageTitle="profile">
      <div>profile</div>
      {dataUsers.map((user) => (
        <div
          key={user.id}
          onClick={() => router.push(`/profile/${user.id}`)}
          className={styles.card}
        >
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
