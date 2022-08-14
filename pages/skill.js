import React from 'react'
import Image from 'next/image'
const Skill = () => {
  return (
    <div className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Here is what I am good at
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            These are the services I offer
          </h3>

          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-development-white.svg" alt="development icon" /> */}
                  <Image src="/assets/img/icon-development-white.svg" alt="hero" width={100} height={100}></Image>

                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-development-black.svg" alt="development icon" /> */}
                  <Image src="/assets/img/icon-development-black.svg" alt="development icon" width={100} height={100}></Image>

                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  WEB DEVELOPMENT
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  Full Mern Stack Web Application
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-content-white.svg" alt="content marketing icon" /> */}
                  <Image src="/assets/img/icon-content-white.svg" alt="content marketing icon" width={100} height={100}></Image>

                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-content-black.svg" alt="content marketing icon" /> */}
                  <Image src="/assets/img/icon-content-black.svg" alt="content marketing icon" width={100} height={100}></Image>
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  BACK END MANAGEMENT
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  Node js,
                  Express js,
                  JWT,
                  MongoDB,
                  MYSQL and
                  Firebase
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon" /> */}
                  <Image src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon" width={100} height={100}></Image>
                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon" /> */}
                  <Image src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon" width={100} height={100}></Image>
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Payment Gateway Integration
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  Stripe Integration,
                  Payoneer Integration
                 
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" /> */}
                  <Image src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" width={100} height={100}></Image>
                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" /> */}
                  <Image src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" width={100} height={100}></Image>

                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Email Integration
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  Integration of Email Service Provider
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon" /> */}
                  <Image src="/assets/img/icon-design-white.svg" alt="Theme Design icon" width={100} height={100}></Image>

                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon" /> */}
                  <Image src="/assets/img/icon-design-black.svg" alt="Theme Design icon" width={100} height={100}></Image>

                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                FRONT END (Mobile Responsive)
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                React Redux,
                  Tailwind CSS,
                  Bootstrap and
                  Material UI
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-purple-100">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  {/* <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" /> */}
                  <Image src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" width={100} height={100}></Image>
                </div>
                <div className="block group-hover:hidden">
                  {/* <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" /> */}
                  <Image src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" width={100} height={100}></Image>

                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Sanity io And Shopify
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-grey-500 md:text-base">
                  Provide  Structured Content
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

  )
}

export default Skill
