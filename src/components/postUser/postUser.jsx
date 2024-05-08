import styles from "./postUser.module.css";

const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Unable to fetch data");
  }

  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await getData(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>{user.name}</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
};

export default PostUser;
