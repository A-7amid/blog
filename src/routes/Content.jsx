import Navbar from "../Components/Navbar";

const Content = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white flex flex-col items-center mx-auto w-2/3 mb-24 mt-4">
        <img
          src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F009pdi0m6bizhp9alf58.png"
          alt="img"
          className="overflow-hidden mb-7 rounded-t-lg"
        />
        <h1 className="text-black"></h1>

        <p className="text-xl font-normal">
          For the last few years, I've been using an older portfolio I built
          with React. It did the job, but when I built new projects, I had to
          manually add them as JSON objects (which I didn't... boring stuff 😮‍💨),
          and there was no way to pull in my blog posts to display them on the
          site. <br />
          <br />
          Recently, I decided to give my portfolio an upgrade. It's still a WIP.
          There's some lorem text here and there, and I also plan to add a
          Testimonials page, but most of the important features are done for
          now.
          <br /> <br />
          This time, I've automated pretty much everything. I used GitHub
          Actions with the GitHub API to fetch a selected list of my projects
          (because, let's be real, not every GitHub project is worth adding to
          the Portfolio), and the Hashnode API to bring in my blog posts.
          There's also a way to subscribe to my Hashnode newsletter directly
          from the portfolio site. It's been fun setting all of this up! Here’s
          the link to the new portfolio: https://techwithshrijal.com. If you’re
          curious, here’s the link to my old portfolio:
          https://shricodev-old.vercel.app I’d love to hear your thoughts on it!
          🙂
        </p>
      </div>
    </div>
  );
};

export default Content;
