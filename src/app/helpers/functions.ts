import { API_KEY, CHANNEL_ID } from "./variables";

export async function GetThumbnail() {
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&part=id`
    );
    const searchResult = await searchResponse.json();

    const video_id = searchResult.items[0].id.videoId;
    const videoResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${video_id}&part=snippet`
    );
    const videoResult = await videoResponse.json();

    const thumbnail_url = videoResult.items[0].snippet.thumbnails.maxres.url;
    return thumbnail_url as string
}