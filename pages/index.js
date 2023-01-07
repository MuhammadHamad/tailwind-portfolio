import Head from "next/head";
import Image from "next/image";
import hammad from "../public/hammad.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";

import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-teal-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="md:text-6xl text-4xl tracking-wider font-dokdo text-teal-500">
              developedbyhammad
            </h1>
            <ul className="flex items-center">
              <li
                onClick={(e) => setDarkMode(!darkMode)}
                className=" text-2xl cursor-pointer animate-pulse duration-500 hover:animate-none"
              >
                {darkMode ? (
                  <CiLight className="text-white" />
                ) : (
                  <BsFillMoonStarsFill />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md tracking-wide py-2 px-4 ml-8 md:flex hidden"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Main body */}
          <div className="text-center p-10">
            <h2 className="md:text-8xl text-5xl font-bold text-teal-500 font-dokdo">
              Muhammad Hammad
            </h2>
            <h3 className="md:text-2xl text-xl font-semibold py-2 dark:text-slate-200">
              Developer and Designer.
            </h3>
            <p className="md:text-xl max-w-xl mx-auto py-4 leading-7 text-gray-800 dark:text-slate-300">
              I provide freelance services for programming in javascript, node,
              react and nextJS and designing in figma, adobe illustrator and
              many more.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <AiFillLinkedin className="text-blue-700 cursor-pointer" />
            <AiFillTwitterCircle className="text-blue-500 cursor-pointer" />
            <AiFillYoutube className="text-red-600 cursor-pointer" />
          </div>

          {/* Main image */}
          <div className="shadow-lg shadow-black/50 relative bg-gradient-to-b from-teal-500 rounded-full overflow-hidden h-64 w-64 mt-20 mx-auto md:w-96 md:h-96">
            <Image src={hammad} />
          </div>
        </section>

        <section>
          <div>
            <h3 className="md:text-4xl text-3xl mt-8 font-bold tracking-wide dark:text-slate-200">
              Services I offer
            </h3>
            <p className="text-md py-4 leading-7 text-gray-800 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. aque
              dolor reprehenderit iure illum nulla alias ratione, enim tempora
              harum atque.{" "}
              <span className="text-teal-500 font-bold">Voluptatem</span>{" "}
              perferendis voluptatibus ullam qui quod delectus velit possimus
              odit. Totam commodi blanditiis placeat harum, in quod qui sequi
              eligendi consequatur, repudiandae, quia tempora quo consectetur
              cum laudantium iusto. Minima cumque veniam incidunt aut expedita
              quis placeat quae, atque, maxime tenetur delectus necessitatibus,
              quia labore? Quae repellendus voluptas repellat, placeat
              dignissimos incidunt commodi ipsam saepe nobis accusantium magnam
              modi ea inventore laboriosam neque porro obcaecati totam,
              laudantium doloribus, provident nihil! Voluptate nostrum
              recusandae nihil, ducimus placeat molestias at?
            </p>
          </div>

          {/*  CARDS */}
          <div className="lg:flex gap-10">
            {/* card 1 */}
            <div className="text-center shadow-xl rounded-xl p-10 my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="md:text-4xl text-3xl mt-8 font-bold tracking-wide dark:text-slate-200 ">
                Beautiful Design
              </h3>
              <p className="text-gray-800 py-1 dark:text-slate-300">
                Creating elegant designs suited for your needs and design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-slate-200">
                Photoshop
              </p>
              <p className="text-gray-800 py-1 dark:text-slate-200">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Figma</p>
            </div>

            {/* card 2 */}
            <div className="text-center shadow-xl rounded-xl p-10 my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="md:text-4xl text-3xl mt-8 font-bold tracking-wide dark:text-slate-200">
                Beautiful Design
              </h3>
              <p className="text-gray-800 py-1 dark:text-slate-300">
                Creating elegant designs suited for your needs and design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-slate-300">
                Photoshop
              </p>
              <p className="text-gray-800 py-1 dark:text-slate-300">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Figma</p>
            </div>

            {/* card 3 */}
            <div className="text-center shadow-xl rounded-xl p-10 my-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="md:text-4xl text-3xl mt-8 font-bold tracking-wide dark:text-slate-200">
                Beautiful Design
              </h3>
              <p className="text-gray-800 py-1 dark:text-slate-300">
                Creating elegant designs suited for your needs and design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-slate-300">
                Photoshop
              </p>
              <p className="text-gray-800 py-1 dark:text-slate-300">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="md:text-4xl text-3xl mt-8 font-bold tracking-wide dark:text-slate-200">
              Portfolio
            </h3>
            <p className="text-md py-4 leading-7 text-gray-800 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. aque
              dolor reprehenderit iure illum nulla alias ratione, enim tempora
              harum atque.{" "}
              <span className="text-teal-500 font-bold">Voluptatem</span>{" "}
              perferendis voluptatibus ullam qui quod delectus velit possimus
              odit. Totam commodi blanditiis placeat harum, in quod qui sequi
              eligendi consequatur, repudiandae, quia tempora quo consectetur
              cum laudantium iusto. Minima cumque veniam incidunt aut expedita
              quis placeat quae, atque, maxime tenetur delectus necessitatibus,
              quia labore? Quae repellendus voluptas repellat, placeat
              dignissimos incidunt commodi ipsam saepe nobis accusantium magnam
              modi ea inventore laboriosam neque porro obcaecati totam,
              laudantium doloribus, provident nihil! Voluptate nostrum
              recusandae nihil, ducimus placeat molestias at?
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-xl object-cover w-[100%] h-[100%]"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-xl object-cover w-[100%] h-[100%]"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-xl object-cover w-[100%] h-[100%]"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-xl object-cover w-[100%] h-[100%]"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-xl object-cover w-[100%] h-[100%]"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-xl object-cover w-[100%] h-[100%]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
