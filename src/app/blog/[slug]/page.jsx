import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/21316315/pexels-photo-21316315/free-photo-of-a-tree-with-white-flowers-in-front-of-a-fountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="post"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/21316315/pexels-photo-21316315/free-photo-of-a-tree-with-white-flowers-in-front-of-a-fountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Siar Wahidi</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>04.30.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          voluptatibus magnam eos voluptates maiores fuga quam similique,
          possimus expedita reprehenderit harum nostrum dolore iusto tempore
          odio libero a commodi! Dolores.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
