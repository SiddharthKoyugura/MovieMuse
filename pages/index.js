import Banner from "@/components/banner/Banner";
import SectionCards from "@/components/card/SectionCards";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getVideos } from "@/lib/videos";

export default function Home() {
  const disneyVideos = getVideos();
  return (
    <div>
      <Head>
        <title>
          Netflix India – Watch TV Shows Online, Watch Movies Online
        </title>
      </Head>

      <Navbar userName="Siddharth" />

      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/banner.jpg"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" size="large" videos={disneyVideos} />
        <SectionCards title="Disney" size="medium" videos={disneyVideos} />
      </div>
    </div>
  );
}
