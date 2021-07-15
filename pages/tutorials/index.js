import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/sx-motive/data/tutorials"
  );
  const data = await res.json();

  return {
    props: { tutorials: data },
  };
};

const Tutorials = ({ tutorials }) => {
  return (
    <section data-scroll-section className="tutorials">
      <div className="container">
        <div className="wrapper">
          <h3>
            Development and
            <br />
            design tutorials 2021
          </h3>
          <p>
            We regularly release design courses, offer advice to newbie
            designers, walk you through creating awesome effects, and share
            source files.
          </p>
        </div>
      </div>
      <div className="tutorials-wrap">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="tutorials-item">
            <div className="tutorials-wrap-img">
              <Image
                layout="fill"
                data-cursor-text="Explore tutorial"
                data-cursor="-color-accent-lilac"
                src={tutorial.image}
              />
            </div>
            <div className="tag-wrap">
              <a className="btn -solid" href="#">
                New
              </a>
              <a className="btn -fullsolid" href="#">
                Patreon
              </a>
            </div>
            <h6>{tutorial.title}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tutorials;
