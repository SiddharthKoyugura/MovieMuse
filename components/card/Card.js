import Image from "next/image";
import styles from "./Card.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const Card = (props) => {
  const { imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80", size = "medium", id } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  const handleOnError = () => {
    setImgSrc("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80");
  };

  return (
    <div className={styles.container}>
      <motion.div className={classNames(classMap[size], styles.imgMotionWrapper)} whileHover={{ ...scale }}>
        <Image
          src={imgSrc}
          alt="Image"
          fill
          onError={handleOnError}
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  );
};

export default Card;
