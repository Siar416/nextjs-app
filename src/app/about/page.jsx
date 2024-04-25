import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.desc}>
            We believe in good ideas, flexibility and precission. We are the
            world's best Special Team and best consulting & finance solutions
            provider. Wide range of web and software developemnt services.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="about" fill className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
