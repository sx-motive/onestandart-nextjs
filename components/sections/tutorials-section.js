import React from "react";
import Image from "next/image";
import Btn from "../buttons";

function SectionTutorials() {
  return (
    <section data-scroll-section className="tutorials">
      <div className="container">
        <div className="wrapper">
          <h3>
            Development and
            <br />
            design tutorials
          </h3>
          <p>
            We regularly release design courses, offer advice to newbie
            designers, walk you through creating awesome effects, and share
            source files.
          </p>
        </div>
      </div>
      <div className="tutorials-wrap">
        <div className="tutorials-item">
          <div className="tutorials-wrap-img">
            <Image
              layout="fill"
              data-cursor-text="Explore tutorial"
              data-cursor="-color-accent-lilac"
              src="/images/tutorials/5.png"
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
          <h6>The Cursor and Magnetic component</h6>
        </div>
        <div className="tutorials-item">
          <div className="tutorials-wrap-img">
            <Image
              layout="fill"
              data-cursor-text="Explore tutorial"
              data-cursor="-color-accent-lilac"
              src="/images/tutorials/1.png"
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
          <h6>The Cursor and Magnetic component</h6>
        </div>
        <div className="tutorials-item">
          <div className="tutorials-wrap-img">
            <Image
              layout="fill"
              data-cursor-text="Explore tutorial"
              data-cursor="-color-accent-lilac"
              src="/images/tutorials/2.png"
            />
          </div>
          <div className="tag-wrap">
            <a className="btn -solid" href="#">
              New
            </a>
            <a className="btn -fullsolid" href="#">
              Free
            </a>
          </div>
          <h6>The Cursor and Magnetic component</h6>
        </div>
        <div className="tutorials-item">
          <div className="tutorials-wrap-img">
            <Image
              layout="fill"
              data-cursor-text="Explore tutorial"
              data-cursor="-color-accent-lilac"
              src="/images/tutorials/3.png"
            />
          </div>
          <div className="tag-wrap">
            <a className="btn -solid" href="#">
              New
            </a>
            <a className="btn -fullsolid" href="#">
              Free
            </a>
          </div>
          <h6>The Cursor and Magnetic component</h6>
        </div>
        <div className="tutorials-item">
          <div className="tutorials-wrap-img">
            <Image
              layout="fill"
              data-cursor-text="Explore tutorial"
              data-cursor="-color-accent-lilac"
              src="/images/tutorials/4.png"
            />
          </div>
          <div className="tag-wrap">
            <a className="btn -solid" href="#">
              New
            </a>
            <a className="btn -fullsolid" href="#">
              Free
            </a>
          </div>
          <h6>The Cursor and Magnetic component</h6>
        </div>
      </div>
      <div className="container center-btn">
        <Btn
          title="Explore more tutorials"
          link="/tutorials"
          class="-skew -outline"
          cursor="-color-white"
          magnetic
        />
      </div>
    </section>
  );
}

export default SectionTutorials;
