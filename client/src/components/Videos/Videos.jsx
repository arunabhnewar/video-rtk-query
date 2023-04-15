import React from "react";
import { useGetVideosQuery } from "../../features/api/apiSlice";
import Error from "../UI/Error";
import VideoLoader from "../UI/Loaders/VideoLoader";
import Video from "./Video";

const Videos = () => {
  // Hooks
  const { data: videos, isError, isLoading } = useGetVideosQuery();

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message='There was an error' />;
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message='No videos found!' />;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map(video => <Video key={video.id} video={video} />);
  }

  return content;
};

export default Videos;
