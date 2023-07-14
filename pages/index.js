import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix India – Watch TV Shows Online, Watch Movies Online</title>
      </Head>

      <Navbar userName="Siddharth" />

      {/* Banner */}
      <Banner 
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/banner.jpg"
      />
    </div>
  )
}
