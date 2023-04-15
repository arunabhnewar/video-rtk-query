import React from "react";
import Description from "../components/SingleVideo/Description";
import Player from "../components/SingleVideo/Player";
import RelatedVideos from "../components/SingleVideo/RelatedVideo/RelatedVideos";

const Video = () => {
  return (
    <section className='pt-6 pb-20 min-h-[calc(100vh_-_157px)]'>
      <div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
        <div className='grid grid-cols-3 gap-2 lg:gap-8'>
          <div className='col-span-full w-full space-y-8 lg:col-span-2'>
            <Player />
            <Description />
          </div>

          <RelatedVideos />
        </div>
      </div>
    </section>
  );
};

export default Video;
