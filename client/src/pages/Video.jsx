import React from "react";
import { useParams } from "react-router-dom";
import Description from "../components/SingleVideo/Description";
import Player from "../components/SingleVideo/Player";
import RelatedVideos from "../components/SingleVideo/RelatedVideo/RelatedVideos";
import Error from "../components/UI/Error";
import DescriptionLoader from "../components/UI/Loaders/DescriptionLoader";
import PlayerLoader from "../components/UI/Loaders/PlayerLoader";
import RelatedVideoLoader from "../components/UI/Loaders/RelatedVideoLoader";
import { useGetVideoQuery } from "../features/api/apiSlice";

const Video = () => {
  // Params
  const { videoId } = useParams();

  // Hooks
  const { data: video, isError, isLoading } = useGetVideoQuery(videoId);

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <>
        <PlayerLoader />
        <DescriptionLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message='There was an error!' />;
  }

  if (!isLoading && !isError && video?.id) {
    content = (
      <>
        <Player link={video.link} title={video.title} />
        <Description video={video} />
      </>
    );
  }

  return (
    <section className='pt-6 pb-20 min-h-[calc(100vh_-_157px)]'>
      <div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
        <div className='grid grid-cols-3 gap-2 lg:gap-8'>
          <div className='col-span-full w-full space-y-8 lg:col-span-2'>
            {content}
          </div>

          {video?.id ? (
            <RelatedVideos id={video.id} title={video.title} />
          ) : isLoading ? (
            <>
              <RelatedVideoLoader />
              <RelatedVideoLoader />
              <RelatedVideoLoader />
            </>
          ) : (
            <Error message='There was an error!' />
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;
