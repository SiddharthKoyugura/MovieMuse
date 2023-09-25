// import videoData from '@/data/videos.json'

export const getCommonVideos = async (url) => {

    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

    try{
        const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
        const response = await fetch(`${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`);
        const videoData = await response.json();

        if(videoData?.error){
            console.error("Youtube API error", data.error);
            return [];
        }

        return videoData?.items.map((item)=>{
            return {
                title: item.snippet.title,
                imgUrl: item.snippet.thumbnails.high.url,
                id: item?.id?.videoId || item?.id?.channelId || item?.id,
            }
        });
    }catch(e){
        console.error("Something went wrong with video library",e);
        return []
    }
};

export const getVideos = (searchQuery) => {
    const URL = `search?part=snippet&q=${searchQuery}&type=video&videoType=videoTypeUnspecified`;
    return getCommonVideos(URL);
}

export const getPopularVideos = () => {
    const URL = `videos?part=snippet&chart=mostPopular&regionCode=IN`
    return getCommonVideos(URL);
}