import Banner from "@/components/banner/Banner";
import SectionCards from "@/components/card/SectionCards";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getVideos } from "@/lib/videos";

export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("productivity");
  const travelVideos = await getVideos("travel");
  // const popularVideos = await getVideos("disney trailer");

  return {
    props: {
      disneyVideos, 
      productivityVideos, 
      travelVideos, 
    }
  }
}

export default function Home({ disneyVideos, productivityVideos, travelVideos }) {
  
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
        <SectionCards title="Travel" size="small" videos={travelVideos} />
        <SectionCards title="Productivity" size="medium" videos={productivityVideos} />
        {/* <SectionCards title="Popular" size="large" videos={disneyVideos} /> */}
      </div>
    </div>
  );
}
