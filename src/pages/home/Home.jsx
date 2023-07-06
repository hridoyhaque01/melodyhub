import React from "react";
import { thumbnail } from "../../utils/getImages";

export default function Home() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="py-8 h-full overflow-auto relative">
      <div>
        <div className="h-[25rem] w-full bg-melody bg-no-repeat bg-center bg-cover object-contain rounded-xl"></div>
        <div className="mt-10">
          <h4 className="text-lg font-semibold capitalize">suggested songs</h4>
          <div className="grid grid-cols-4 gap-6 mt-6">
            {test?.map((item) => (
              <div className="" key={item}>
                <div className="mb-3">
                  <img src={thumbnail} alt="" className="w-full rounded-xl" />
                </div>
                <h4 className="text-base font-semibold text-fadeLight">
                  Vocal Studio
                </h4>
                <p className="text-sm text-fade">Lone</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
