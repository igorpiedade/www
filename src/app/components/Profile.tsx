export default function Profile() {
  return (
    <div className="mt-8 flex w-screen place-content-center ">
      <div className="w-screen max-w-7xl place-content-center sm:flex">
        <div className="m-10 sm:w-1/3">
          <h1 className=" font-logo text-2xl ">Who am I?</h1>
          <p className=" font-navMenu">
            I&#39;m a Brazilian guy with a Russian first-name Portuguese last
            name &#40; what a mix! &#41;, living my lifelong dream of working
            and living in the USA. Technology is not only my job but one of my
            passions. I&#39;m enthusiastic about innovation, new technologies,
            robotics, AI, Gadgets, home automation, etc...
          </p>
        </div>
        <div className="m-10 sm:w-1/3">
          <h1 className=" font-logo text-2xl">What I love</h1>
          <p className=" font-navMenu">
            Besides the technology field, I also love to travel, cook, cars,
            books, and of course, my life partner, my wife who I share all my
            best experiences.
          </p>
        </div>
        <div className="m-10 sm:w-1/3">
          <h1 className=" font-logo text-2xl">The Professional</h1>
          <p className=" font-navMenu">
            A full-stack developer who has been spending all his free time
            programming study and personal projects, and looking for
            opportunities to start putting all this knowledge in role. I also
            have over 15 years experience as a system and network administrator.
            But that&#39;s another story.
          </p>
        </div>
      </div>
    </div>
  )
}
