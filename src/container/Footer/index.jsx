import React from 'react'

function Footer() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center">
          <div>
            <h2 className="md:text-3xl text-xl font-semibold my-5">
              Start offering your users a better experience
            </h2>
            <p className="text-slate-500">
              Start working with <span className="text-primary">Prompt</span> to
              showcase your app to thousands of people.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 my-10">
              <a href="#">
                <img src="assets/images/buttons/google.png" className="w-48" />
              </a>
              <a href="#">
                <img src="assets/images/buttons/store.png" className="w-48" />
              </a>
            </div>
          </div>
          <div>
            <p className="my-5">© Prompt. All rights reserved. Crafted by</p>
            <a href="index.html">
              <img src="assets/images/logo-dark.png" className="h-8 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer