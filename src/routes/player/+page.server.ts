import {playerData} from "./data";

export function load() {
    return {
        videos: playerData.map((video) => ({
            name: video.name,
            url: video.url,
        }))
    }
}
