import React from 'react'

function TeamApp() {
  return (
    <section
      className="bg-gray-100 relative py-20 overflow-x-hidden"
      id="testimonials"
      data-aos="fade-up"
      data-aos-duration={500}
    >
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="container relative">
        <div className="relative z-20">
          <div className="flex items-center justify-between pb-14">
            <div>
              <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                Testimonials
              </span>
              <h2 className="md:text-3xl text-xl font-semibold my-5">
                What people say
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <div className="button-prev">
                <i className="fa-solid fa-arrow-left" />
              </div>
              <div className="button-next ">
                {" "}
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="hidden sm:block">
              <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:bg-[url('https://coderthemes.com/prompt/images/pattern/dot3.svg')]" />
              <div className="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:bg-[url('https://coderthemes.com/prompt/images/pattern/dot3.svg')]" />
            </div>
            {/* Swiper */}
            <div id="swiper_two" className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="p-10 bg-white">
                    <p className="text-slate-800">
                      Have been working with CSS for over ten years and Tailwind
                      just makes my life easier. It is still CSS and you use
                      flex, grid, etc. but just quicker to write and maintain.
                    </p>
                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center gap-3">
                        <div>
                          <img
                            src="assets/images/avatars/img-1.jpg"
                            className="w-10 rounded-full"
                          />
                        </div>
                        <div>
                          <h6>John Stark</h6>
                          <p className="text-sm text-slate-500">
                            Engineering Director
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="flex gap-1 items-center text-yellow-500 text-base">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="p-10 bg-white">
                    <p className="text-slate-800">
                      I was bad at front-end until I discovered with Tailwind
                      CSS. I have learnt a lot more about design and CSS itself
                      after I started working with Tailwind. Creating web pages
                      is 5x faster now.
                    </p>
                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center gap-3">
                        <div>
                          <img
                            src="assets/images/avatars/img-2.jpg"
                            className="w-10 rounded-full"
                          />
                        </div>
                        <div>
                          <h6>Cersei Lannister</h6>
                          <p className="text-sm text-slate-500">
                            Senior Project Manager
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="flex gap-1 items-center text-yellow-500 text-base">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamApp