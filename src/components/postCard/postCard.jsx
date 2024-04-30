import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/21316315/pexels-photo-21316315/free-photo-of-a-tree-with-white-flowers-in-front-of-a-fountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post card"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque illo
          autem ea fuga at, repellendus ducimus alias similique voluptate
          provident facere quidem sequi deleniti omnis expedita sapiente,
          perspiciatis dignissimos ullam.
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
