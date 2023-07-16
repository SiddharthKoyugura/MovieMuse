import Card from "./Card";
import styles from "./SectionCards.module.css";

const SectionCards = (props) => {
  const { title, videos, size } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((videoUrl, index) => {
          const id = index === 0 || index === videos.length - 1 ? 0 : index;
          return (
            <Card key={index} id={id} size={size} imgUrl={videoUrl.imgUrl} />
          );
        })}
      </div>
    </section>
  );
};

export default SectionCards;
