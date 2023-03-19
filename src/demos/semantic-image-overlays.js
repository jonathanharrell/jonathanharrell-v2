import React from 'react';

const SemanticImageOverlays = () => {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-16 py-6 px-4 border border-neutral-200 rounded-lg">
      <div className="hidden sm:block relative w-48 h-48 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?auto=format&fit=crop&w=1024&h=1280&q=80"
          alt=""
          className="absolute w-full h-full !my-0"
        />
        <div className="absolute w-full h-full bg-orange-500 mix-blend-hard-light"/>
        <div className="flex items-center justify-center absolute w-full h-full">
          <span className="text-xl font-sf font-bold text-white">Text</span>
        </div>
      </div>
      <div className="relative w-[200px] h-[260px] overflow-hidden">
        <div className="absolute top-[50%] left-[50%] flex items-center justify-center translate-x-[-50%] translate-y-[-50%]">
          <div className="relative w-48 h-48 [transform-style:preserve-3d] [perspective:500px] [perspective-origin:0_50%] translate-x-[70px]">
            <img
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?auto=format&fit=crop&w=1024&h=1280&q=80"
              alt=""
              className="absolute w-full h-full rounded-lg !my-0 [transform:rotateY(416deg)]"
            />
          </div>
          <div className="relative w-48 h-48 mix-blend-hard-light [transform-style:preserve-3d] [perspective:500px] [perspective-origin:0_50%] translate-x-[-70px]">
            <div className="flex items-center justify-center absolute w-full h-full rounded-lg bg-orange-500 mix-blend-hard-light [transform:rotateY(416deg)]">
              <span className="text-2xl font-sf font-bold text-white">Text</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SemanticImageOverlays;