import React from 'react'
import TitleHome from "../../components/TitleHome"
import workData from '../../data/work.data';
import WorkCard from '../../components/WorkCard';

function WorkApp() {
  return (
    <section className="py-20" id="morefeature">
      <div className="container">
        <TitleHome
          title="More Features"
          page="Features that showcase your app"
          text="Start working with Prompt to showcase your app to thousands of people."
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-16">
          {workData.map((item, index) => (
            <WorkCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default WorkApp