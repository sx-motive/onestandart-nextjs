function Outro() {
  return (
    <section data-scroll-section className="outro">
      <div data-scroll data-scroll-speed="-4" className="container">
        <div className="outro-top">
          <span>
            Have an idea?
            <br />
            <a href="#" className="btn -underlined -skew">
              <span
                data-text="Tell me about
                it"
              >
                Tell me about it
              </span>
            </a>
          </span>
        </div>
        <div className="outro-bottom">
          <div className="outro-bottom-left">
            <a href="/" className="btn -underline -skew">
              <span data-text="Development and promotion by Denis Kunitsyn">
                Development and promotion by Denis Kunitsyn
              </span>
            </a>
          </div>
          <div className="outro-bottom-right">
            <ul>
              <li>
                <a className="btn -underline" href="#">
                  Awwwards
                </a>
              </li>
              <li>
                <a className="btn -underline" href="#">
                  Behance
                </a>
              </li>
              <li>
                <a className="btn -underline" href="#">
                  Dribble
                </a>
              </li>
              <li>
                <a className="btn -underline" href="#">
                  Vkontakte
                </a>
              </li>
              <li>
                <a className="btn -underline" href="#">
                  Telegram
                </a>
              </li>
              <li>
                <a className="btn -underline" href="#">
                  Patreon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outro;
