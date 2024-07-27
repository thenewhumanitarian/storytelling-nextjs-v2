const FooterComponent = () => {
  return (
    <>
      <section className="signup-cta">
        <div className="signup-cta__content">
          <h2 className="signup-cta__title font-sectra font-medium text-2xl sm:text-4xl">
            Get the latest humanitarian news, direct to your inbox
          </h2>
          <p className="signup-cta__description font-sectra text-xl">
            Sign up to receive our original, on-the-ground coverage that informs
            policymakers, practitioners, donors, and others who want to make the world
            more humane.
          </p>
          <p className="signup-cta__button">
            <a
              href="/subscribe"
              className="button button--secondary button--large bg-zinc-900 hover:bg-zinc-950 px-11 py-4 text-white font-bold"
              title="Sign up to the TNH email newsletter"
            >
              Sign up
            </a>
          </p>
        </div>
      </section>

      <section className="support-cta">
        <div className="support-cta__content">
          <div className="support-cta__content--text">
            <h2 className="support-cta__title font-sectra font-medium text-2xl">
              Become a member of The New Humanitarian
            </h2>
            <p className="support-cta__description">
              Support our journalism and become more involved in our community. Help
              us deliver informative, accessible, independent journalism that you can
              trust and provides accountability to the millions of people affected by
              crises worldwide.
            </p>
          </div>
          <p className="support-cta__button">
            <a
              href="/membership"
              className="button button--primary button--large px-11 py-4 bg-burgundy-500 hover:bg-burgundy-600 text-white font-bold hover:bg-"
              title="Join The New Humanitarian"
            >
              Join
            </a>
          </p>
        </div>
      </section>

      <footer role="contentinfo" className={'flex flex-col justify-center items-center'}>
        <div className="site-footer flex justify-center w-full">
          <nav className="site-footer__menu">
            <ul className="menu menu--top-level text-sm">
              <li className="menu__item menu__item--first about_us">
                <a
                  href="/content/about-us"
                  title=""
                  className="menu__link"
                >
                  About Us
                </a>
              </li>
              <li className="menu__item privacy">
                <a
                  href="/legal/privacy-policy"
                  title=""
                  className="menu__link"
                >
                  Privacy
                </a>
              </li>
              <li className="menu__item syndication">
                <a
                  href="/legal/reprints"
                  title=""
                  className="menu__link"
                >
                  Syndication
                </a>
              </li>
              <li className="menu__item contact_us">
                <a
                  href="/content/contact"
                  title=""
                  className="menu__link"
                >
                  Contact Us
                </a>
              </li>
              <li className="menu__item careers">
                <a
                  href="https://careers.thenewhumanitarian.org/"
                  title="Work with us"
                  className="menu__link"
                  target="_blank"
                  rel="noopener"
                >
                  Careers
                </a>
              </li>
            </ul>
            <ul className="sb">
              <li
                className="sb__item sb__item--twitter"
                title="Visit us on X (formerly Twitter)"
              >
                <a
                  href="https://twitter.com/newhumanitarian/"
                  target="_blank"
                  rel="noopener"
                >
                  X (formerly Twitter)
                </a>
              </li>
              <li className="sb__item sb__item--facebook" title="Visit us on Facebook">
                <a
                  href="https://www.facebook.com/NewHumanitarian/"
                  target="_blank"
                  rel="noopener"
                >
                  Facebook
                </a>
              </li>
              <li className="sb__item sb__item--youtube" title="Visit us on YouTube">
                <a
                  href="https://www.youtube.com/c/newhumanitarian"
                  target="_blank"
                  rel="noopener"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className={'pb-8 sm:pb-6 text-zinc-600 text-sm'}>© All rights reserved 2024</p>
      </footer>
    </>
  )
}

export default FooterComponent
