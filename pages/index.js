import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { useRouter } from 'next/router'

import Head from 'next/document'
// import Img from 'next/image';
import Image from 'next/image';

import Link from 'next/image'
export default function Home({ blogs, profile,skills }) {

  const client = createClient({
    projectId: "bwf6zco5",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-10-21"

  });
  // console.log("skills", skills)
  const builder = imageUrlBuilder(client)
  const router = useRouter()
const handleblog = ()=>{
router.push('/blogs')
}
  return (
    <>

      <div className=" bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}>
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">

            <Image className="border-8 border-primary h-52 rounded-full sm:h-56" alt="hero" width={250} height={280} src={builder.image(profile.image).width(200).url()} />
      

          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{profile.name}!</h1>
            <p className="text-yellow-400 font-body text-lg uppercase">Developer | Coder | Software Geek</p>
            <p className="mb-8 leading-relaxed text-white">I am a Profesional Website Developer.
            </p>
            <div className="flex justify-center">
              <button onClick={handleblog} className='bg-purple-600 text-grey-500 border-2 px-4 py-1 my-4 rounded-2xl text-white'>All Blogs</button>
            </div>

          </div>
        </div>

      </div>
      <div className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-7">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I am , a Web Developer & Teacher
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              I had done my graduation from Government College University, Lahore, Pakistan. I had worked in Lahore Garrison Education System as IT Coordinator and Computer Science Teacher.I have experience in developing and designing, Web Applications. I have 3+ years of experience in Full-Stack Web development and optimization. I can create a professional website and web app from scratch by using React js, Node js, express js, and MongoDB/Mysql/Sanity.


            </p>

            <h4 className="pt-3 font-header text-xl font-medium text-gray-500 sm:text-1xl lg:text-2xl">
              I have following Skills
            </h4>
          </div>
          <div  className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-1 -mx-2">
      {skills.map((k)=>{return( <div key={k._id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-3 h-full items-center">
                <div className="text-grey-500 w-6 h-6 flex-shrink-0 mr-4">
                  
            <Image className="border-8 border-primary h-52 rounded-full sm:h-56" alt="hero" width={50} height={50} src={builder.image(k.icon).width(200).url()} />
      
                </div>
                <span className="title-font font-medium">{k.name}</span>
              </div>
            </div>
         
      )})}
          </div>
         
        </div>
      </div>

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

      <div className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Check out my Portfolio
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Here is what I have done with the past
          </h3>

          <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
            <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
              <Image src="/assets/img/shop1.PNG" className="w-full shadow" alt="portfolio image" width={800} height={400} ></Image>
            </div>
            <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
              <Image src="/assets/img/shop34.PNG" className="w-full shadow" alt="portfolio image" width={800} height={400} ></Image>

            </div>
            <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
              <Image src="/assets/img/shop99.PNG" className="w-full shadow" alt="portfolio image" width={800} height={400} ></Image>

            </div>
            <div className="mx-auto transform transition-all hover:scale-105 md:mx-0">
              <Image src="/assets/img/react4.PNG" className="w-full shadow" alt="portfolio image" width={800} height={400} ></Image>

            </div>
          </div>

        </div>
      </div>



      <div className="text-gray-600 body-font bg-white">

        <div className=" bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
          style={{ "backgroundImage": "url(/assets/img/experience-figure.png)" }} id="statistics">
          <div className="">
            <div className="mx-auto w-5/6 bg-purple-100 py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
              <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                  <div>
                    {/* <img src="/assets/img/icon-project.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon project" /> */}
                    <Image src="/assets/img/icon-project.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon project" width={60} height={60}></Image>

                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      8
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Finished Projects
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                  <div>
                    {/* <img src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon award" /> */}
                    <Image src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon award" width={60} height={60}></Image>
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      4
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Awards Won
                    </h4>
                  </div>
                </div>

                <div
                  className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                  <div>
                    {/* <img src="/assets/img/icon-happy.svg" className="mx-auto h-12 w-auto md:h-20"
                    alt="icon happy clients" /> */}
                    <Image src="/assets/img/icon-happy.svg" className="mx-auto h-12 w-auto md:h-20"
                      alt="icon happy clients" width={60} height={60}></Image>
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      4
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Happy Clients
                    </h4>
                  </div>
                </div>

                <div
                  className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                  <div>
                    {/* <img src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" /> */}
                    <Image src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" width={60} height={60} />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      67
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Bugs Fixed
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-600 body-font bg-white mt-10 mb-10">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here is a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="text-gray-600 body-font relative">
          <div className="container px-5 py-12 mx-auto">

            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Send</button>
                </div>

              </div>

            </div>
          </div>
          <div className="flex flex-col pt-16 lg:flex-row">
            <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
              <div className="flex items-center">
                <i className="bx bx-phone text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Phone
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                (+092) 321 4920 880
              </p>
            </div>
            <div
              className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-envelope text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Email
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                anoshajaved@yahoo.com
              </p>
            </div>
            <div
              className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-map text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Address
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "bwf6zco5",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-10-21"

  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  const skillsQuery = `*[_type == "skills"] `;
  const skills = await client.fetch(skillsQuery);
  return {
    props: {
      blogs,
      profile,
      skills
    }
  }
}