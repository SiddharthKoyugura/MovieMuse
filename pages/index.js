import Banner from "@/components/banner/Banner";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix India – Watch TV Shows Online, Watch Movies Online</title>
      </Head>

      {/* Banner */}
      <Banner 
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/banner.jpg"
      />
    </div>
  )
}
