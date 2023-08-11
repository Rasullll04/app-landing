import React from 'react'
import TitleHome from "../../components/TitleHome"
import featureData from '../../data/feature.data';
import FeatureCard from '../../components/FeatureCard';

function FeaturesCard() {
  return (
    <section className="py-20" id="feature">
      <div className="container">
        <div className="text-center">
          <TitleHome
            title="Features"
            page="App works best with Prompt"
            text="Start working with Prompt to showcase your app to thousands of people."
          />
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-6 mt-5">
          <div className="relative">
            <div className="hidden md:block">
              <div className="absolute lg:w-9/12 h-3/5 w-72 -z-10 rotate-[20deg] rounded-3xl bg-orange-400/10 end-44  bottom-12 lg:end-10" />
              <div className="after:absolute after:-z-10 after:w-full after:h-full after:bg-[url('https://coderthemes.com/prompt/images/pattern/dot4.svg')]" />
            </div>
            <img
              src="assets/images/features/app2.png"
              className="lg:w-full w-1/2 mx-auto"
              data-aos="zoom-in-right"
            />
          </div>
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7 lg:ps-32">
              {featureData.map((item, index) => (
                <FeatureCard item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesCard