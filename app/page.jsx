import Link from "next/link";
import Image from "next/image";
import profile from "../public/profilePic.jpg"

export default function Home() {
  return (
    <main>
      <header>
        <nav className="container flex">
          <div>
            <h1 className="logo">Ashirvad Satapathy</h1>
            <h5 className="logoh3">Software Developer</h5>
          </div>
          <ul className="navMenues flex">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="container flex">
          <div className="profWrapper">
            <div className="ring"></div>
            <div className="profilePic">
              <Image className="image picc" src={profile}></Image>
            </div>
          </div>
          <div className="heroDetail flex-col">
            <h1 className="detailTitle">Hey, I'm Ashirvad. I'm a Software Developer and Designer.</h1>
            {/* <p className="m-1">
              A Full-stack developer based out in Bhubaneswar, India. Experienced in building optimized and highly performant Web Applications.
            </p>
            <p>
              Skilled in design and engineering of websites with JavaScript, Next, Firebase, SQL, Figma and AWS.
            </p> */}
            <ul className="socials flex">
              <li>
                <Link href="">
                  <svg width="31" height="25" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5493 2.83822C20.499 2.2705 21.2095 1.37656 21.5483 0.323315C20.656 0.852782 19.6797 1.22575 18.6616 1.4261C17.2501 -0.0670284 15.0137 -0.430388 13.2021 0.539058C11.3905 1.5085 10.4521 3.57075 10.9113 5.57347C7.25616 5.38996 3.85072 3.66337 1.54242 0.82333C0.337764 2.90117 0.953368 5.55735 2.94924 6.89343C2.22751 6.87023 1.52179 6.67482 0.890917 6.3235C0.890917 6.34256 0.890917 6.36163 0.890917 6.3807C0.891334 8.54512 2.41678 10.4095 4.53827 10.8385C3.86883 11.0206 3.16663 11.0474 2.48524 10.9169C3.08187 12.7678 4.7878 14.0359 6.73219 14.0737C5.1218 15.3377 3.13301 16.0231 1.08584 16.0198C0.722978 16.0203 0.360403 15.9994 0 15.9573C2.07886 17.2931 4.49841 18.0022 6.96949 17.9997C10.4074 18.0233 13.7112 16.668 16.1421 14.2369C18.573 11.8058 19.9281 8.50179 19.9042 5.06392C19.9042 4.86688 19.8996 4.6709 19.8904 4.47598C20.7808 3.83253 21.5492 3.03542 22.1596 2.1221C21.3301 2.48976 20.4503 2.73114 19.5493 2.83822Z" fill="#1DA1F2" />
                  </svg>

                  Twitter
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg width="26" height="25" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.85675 2.45095e-07C5.32974 -0.000581248 1.47068 3.28255 0.745869 7.75115C0.0210623 12.2198 2.64453 16.5543 6.93963 17.9847C7.40222 18.068 7.56783 17.7839 7.56783 17.5397C7.56783 17.3204 7.56043 16.7394 7.55766 15.9669C4.99026 16.522 4.4481 14.729 4.4481 14.729C4.27908 14.171 3.91573 13.6921 3.42392 13.3791C2.59125 12.8064 3.48776 12.8194 3.48776 12.8194C4.0805 12.9007 4.60219 13.2519 4.90052 13.7705C5.15303 14.2296 5.57846 14.5689 6.08226 14.7129C6.58607 14.8569 7.12653 14.7938 7.58356 14.5375C7.62651 14.0693 7.83478 13.6318 8.17106 13.3033C6.12269 13.071 3.96885 12.2791 3.96885 8.74209C3.95748 7.82727 4.2972 6.94288 4.9181 6.27092C4.63716 5.47462 4.67025 4.60119 5.01061 3.82842C5.01061 3.82842 5.785 3.57955 7.54748 4.77304C9.05909 4.35856 10.6544 4.35856 12.166 4.77304C13.9294 3.57862 14.7029 3.82842 14.7029 3.82842C15.0448 4.60082 15.0779 5.47486 14.7954 6.27092C15.4186 6.94282 15.758 7.82952 15.7428 8.74579C15.7428 12.292 13.5871 13.071 11.5313 13.2996C11.9748 13.753 12.2022 14.3749 12.1558 15.0075C12.1558 16.2417 12.1447 17.2372 12.1447 17.5397C12.1447 17.7867 12.3094 18.0735 12.7803 17.9829C17.0736 16.5501 19.6943 12.2152 18.968 7.74781C18.2417 3.28039 14.3828 -0.00103544 9.85675 2.45095e-07Z" fill="black" />
                  </svg>

                  Github
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg width="26" height="25" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.45567 18C7.00058 18 6.71116 17.987 5.75307 17.9451C5.00594 17.9205 4.26848 17.7687 3.57243 17.496C2.36815 17.0273 1.41589 16.0747 0.947685 14.8703C0.685515 14.1717 0.54411 13.4336 0.529521 12.6876C0.473633 11.7315 0.473633 11.4182 0.473633 8.98204C0.473633 6.51996 0.486607 6.23253 0.529521 5.27944C0.544429 4.53445 0.68583 3.79741 0.947685 3.0998C1.41538 1.89374 2.36919 0.940292 3.57543 0.473054C4.27268 0.209783 5.0099 0.0680083 5.75507 0.0538922C6.70816 0 7.02153 0 9.45567 0C11.9307 0 12.2151 0.0129741 13.1583 0.0538922C13.9054 0.0681303 14.6445 0.20989 15.3439 0.473054C16.5498 0.940821 17.5034 1.89409 17.9716 3.0998C18.2382 3.80758 18.3804 4.55614 18.3918 5.31237C18.4477 6.26846 18.4477 6.58084 18.4477 9.01597C18.4477 11.4511 18.4337 11.7705 18.3918 12.7156C18.3769 13.4623 18.2352 14.201 17.9726 14.9002C17.5032 16.1055 16.5495 17.0585 15.3439 17.5269C14.6455 17.7886 13.9079 17.93 13.1623 17.9451C12.2092 18 11.8968 18 9.45567 18ZM9.42173 1.57984C6.98062 1.57984 6.72712 1.59182 5.77403 1.63473C5.20515 1.64227 4.64177 1.74725 4.10836 1.94511C3.32069 2.24652 2.69741 2.86726 2.39279 3.65369C2.19341 4.19291 2.08841 4.76245 2.08241 5.33732C2.02952 6.30439 2.02952 6.55788 2.02952 8.98204C2.02952 11.3772 2.0385 11.6677 2.08241 12.6287C2.09135 13.1978 2.19628 13.7613 2.39279 14.2954C2.69786 15.0813 3.32103 15.7016 4.10836 16.003C4.64141 16.2022 5.20502 16.3072 5.77403 16.3134C6.7401 16.3693 6.99459 16.3693 9.42173 16.3693C11.8698 16.3693 12.1233 16.3573 13.0684 16.3134C13.6377 16.3064 14.2015 16.2014 14.7351 16.003C15.518 15.699 16.1372 15.0801 16.4417 14.2974C16.6407 13.7577 16.7457 13.1879 16.7521 12.6128H16.763C16.806 11.6587 16.806 11.4042 16.806 8.96607C16.806 6.52794 16.795 6.27146 16.7521 5.31836C16.7431 4.74995 16.6382 4.18714 16.4417 3.65369C16.1379 2.86983 15.5186 2.24979 14.7351 1.94511C14.2016 1.74625 13.6377 1.64124 13.0684 1.63473C12.1034 1.57984 11.8509 1.57984 9.42173 1.57984ZM9.45567 13.5918C7.58939 13.593 5.90618 12.4698 5.19106 10.746C4.47593 9.02213 4.86975 7.03726 6.18883 5.71703C7.50792 4.3968 9.49245 4.00127 11.2169 4.7149C12.9413 5.42854 14.066 7.11077 14.0664 8.97704C14.0637 11.523 12.0016 13.5869 9.45567 13.5918ZM9.45567 5.98104C7.80212 5.98104 6.46165 7.3215 6.46165 8.97505C6.46165 10.6286 7.80212 11.9691 9.45567 11.9691C11.1092 11.9691 12.4497 10.6286 12.4497 8.97505C12.4458 7.3231 11.1076 5.98488 9.45567 5.98104ZM14.2461 5.26946C13.6527 5.26726 13.1731 4.78502 13.1742 4.19162C13.1753 3.59823 13.6567 3.11777 14.2501 3.11777C14.8435 3.11777 15.3248 3.59822 15.3259 4.19162C15.3262 4.47791 15.2124 4.75252 15.0098 4.95477C14.8072 5.15702 14.5324 5.27026 14.2461 5.26946Z" fill="#F56040" />
                  </svg>

                  Instagram
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg height="25" viewBox="0 0 72 72" width="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB" /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF" /></g></svg>

                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          {/* <h2>About</h2> */}
          <div className="flex">
            <div className="aboutDetails">
              <p className="m-1">
                A <span>Full-stack developer</span>👋 based out in Bhubaneswar, India. Experienced in building <span>optimized and highly performant</span> Web Applications.
              </p>
              <p>
                Skilled in design and engineering of websites with <span>JavaScript, Next, Firebase, SQL, Figma and AWS.</span>
              </p>
            </div>
            <div className="aboutPitch">
              <p>My adaptive learning and curiosity about technology positioned me unique in IT sector.</p>

              {/* <div className="moreAbout">
                <h3>More About <br /> Me</h3>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <h2>Portfolio Works</h2>

          <ul className="workGroup">
            <li className="workBlock">
              <div className="wrkBanner"></div>
              <div className="wrkDetails flex">
                <div className="wrkBrief">
                  <h3 className="wrTitle">HelloJicky(My Portfolio)</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam excepturi aperiam porro nihil ab modi placeat blanditiis fugit, recusandae nobis voluptatem similique. Exercitationem nam odio, quia corporis laborum vero.</p>
                </div>
                <ul className="wrlinks flex">
                  <li>
                    <Link href={""} name="github">
                      <svg width="27" height="26" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.85675 2.45095e-07C5.32974 -0.000581248 1.47068 3.28255 0.745869 7.75115C0.0210623 12.2198 2.64453 16.5543 6.93963 17.9847C7.40222 18.068 7.56783 17.7839 7.56783 17.5397C7.56783 17.3204 7.56043 16.7394 7.55766 15.9669C4.99026 16.522 4.4481 14.729 4.4481 14.729C4.27908 14.171 3.91573 13.6921 3.42392 13.3791C2.59125 12.8064 3.48776 12.8194 3.48776 12.8194C4.0805 12.9007 4.60219 13.2519 4.90052 13.7705C5.15303 14.2296 5.57846 14.5689 6.08226 14.7129C6.58607 14.8569 7.12653 14.7938 7.58356 14.5375C7.62651 14.0693 7.83478 13.6318 8.17106 13.3033C6.12269 13.071 3.96885 12.2791 3.96885 8.74209C3.95748 7.82727 4.2972 6.94288 4.9181 6.27092C4.63716 5.47462 4.67025 4.60119 5.01061 3.82842C5.01061 3.82842 5.785 3.57955 7.54748 4.77304C9.05909 4.35856 10.6544 4.35856 12.166 4.77304C13.9294 3.57862 14.7029 3.82842 14.7029 3.82842C15.0448 4.60082 15.0779 5.47486 14.7954 6.27092C15.4186 6.94282 15.758 7.82952 15.7428 8.74579C15.7428 12.292 13.5871 13.071 11.5313 13.2996C11.9748 13.753 12.2022 14.3749 12.1558 15.0075C12.1558 16.2417 12.1447 17.2372 12.1447 17.5397C12.1447 17.7867 12.3094 18.0735 12.7803 17.9829C17.0736 16.5501 19.6943 12.2152 18.968 7.74781C18.2417 3.28039 14.3828 -0.00103544 9.85675 2.45095e-07Z" fill="black" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href={""} name="web">
                      <svg width="25" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 19.355C14.9706 19.355 19 15.3255 19 10.355C19 5.38442 14.9706 1.35498 10 1.35498C5.02944 1.35498 1 5.38442 1 10.355C1 15.3255 5.02944 19.355 10 19.355Z" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 10.355H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.4615 10.355C13.2915 13.6462 12.0792 16.7981 9.99999 19.355C7.92074 16.7981 6.70848 13.6462 6.53845 10.355C6.70848 7.06376 7.92074 3.91188 9.99999 1.35498C12.0792 3.91188 13.2915 7.06376 13.4615 10.355V10.355Z" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="blogs">
        <div className="container">
          <h2>Blogs</h2>
        </div>
      </section>

      <footer>
        <div className="container">
          <h1>Let's talk</h1>
          <ul className="talkTopics flex">
            <li>
              <Link href="">Blockchain</Link>
            </li>
            <li>
              <Link href="">Web Development</Link>
            </li>
            <li>
              <Link href="">Machine Learning</Link>
            </li>
            <li>
              <Link href="">Technology</Link>
            </li>
            <li>
              <Link href="">Freelance</Link>
            </li>
            <li>
              <Link href="">Food</Link>
            </li>
            <li>
              <Link href="">Startups</Link>
            </li>
            <li>
              <Link href="">Games and Books</Link>
            </li>
          </ul>
          <div className="ctaTalk">
            <p>There is so much to talk about but i don’t know who you are so..<span>Let’s Know each other...</span></p>
          </div>
          <h2 className="ctaEmail">hello@hellojicky.com</h2>
          <div className="lowerFooter flex">
            <h3>Copyright 2023</h3>
            <div className="hr"></div>
            <ul className="socialsFoo flex">
              <li>
                <Link href="">
                  <svg width="26" height="20" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5493 2.83822C20.499 2.2705 21.2095 1.37656 21.5483 0.323315C20.656 0.852782 19.6797 1.22575 18.6616 1.4261C17.2501 -0.0670284 15.0137 -0.430388 13.2021 0.539058C11.3905 1.5085 10.4521 3.57075 10.9113 5.57347C7.25616 5.38996 3.85072 3.66337 1.54242 0.82333C0.337764 2.90117 0.953368 5.55735 2.94924 6.89343C2.22751 6.87023 1.52179 6.67482 0.890917 6.3235C0.890917 6.34256 0.890917 6.36163 0.890917 6.3807C0.891334 8.54512 2.41678 10.4095 4.53827 10.8385C3.86883 11.0206 3.16663 11.0474 2.48524 10.9169C3.08187 12.7678 4.7878 14.0359 6.73219 14.0737C5.1218 15.3377 3.13301 16.0231 1.08584 16.0198C0.722978 16.0203 0.360403 15.9994 0 15.9573C2.07886 17.2931 4.49841 18.0022 6.96949 17.9997C10.4074 18.0233 13.7112 16.668 16.1421 14.2369C18.573 11.8058 19.9281 8.50179 19.9042 5.06392C19.9042 4.86688 19.8996 4.6709 19.8904 4.47598C20.7808 3.83253 21.5492 3.03542 22.1596 2.1221C21.3301 2.48976 20.4503 2.73114 19.5493 2.83822Z" fill="#1DA1F2" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg width="21" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.85675 2.45095e-07C5.32974 -0.000581248 1.47068 3.28255 0.745869 7.75115C0.0210623 12.2198 2.64453 16.5543 6.93963 17.9847C7.40222 18.068 7.56783 17.7839 7.56783 17.5397C7.56783 17.3204 7.56043 16.7394 7.55766 15.9669C4.99026 16.522 4.4481 14.729 4.4481 14.729C4.27908 14.171 3.91573 13.6921 3.42392 13.3791C2.59125 12.8064 3.48776 12.8194 3.48776 12.8194C4.0805 12.9007 4.60219 13.2519 4.90052 13.7705C5.15303 14.2296 5.57846 14.5689 6.08226 14.7129C6.58607 14.8569 7.12653 14.7938 7.58356 14.5375C7.62651 14.0693 7.83478 13.6318 8.17106 13.3033C6.12269 13.071 3.96885 12.2791 3.96885 8.74209C3.95748 7.82727 4.2972 6.94288 4.9181 6.27092C4.63716 5.47462 4.67025 4.60119 5.01061 3.82842C5.01061 3.82842 5.785 3.57955 7.54748 4.77304C9.05909 4.35856 10.6544 4.35856 12.166 4.77304C13.9294 3.57862 14.7029 3.82842 14.7029 3.82842C15.0448 4.60082 15.0779 5.47486 14.7954 6.27092C15.4186 6.94282 15.758 7.82952 15.7428 8.74579C15.7428 12.292 13.5871 13.071 11.5313 13.2996C11.9748 13.753 12.2022 14.3749 12.1558 15.0075C12.1558 16.2417 12.1447 17.2372 12.1447 17.5397C12.1447 17.7867 12.3094 18.0735 12.7803 17.9829C17.0736 16.5501 19.6943 12.2152 18.968 7.74781C18.2417 3.28039 14.3828 -0.00103544 9.85675 2.45095e-07Z" fill="black" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg width="21" height="20" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.45567 18C7.00058 18 6.71116 17.987 5.75307 17.9451C5.00594 17.9205 4.26848 17.7687 3.57243 17.496C2.36815 17.0273 1.41589 16.0747 0.947685 14.8703C0.685515 14.1717 0.54411 13.4336 0.529521 12.6876C0.473633 11.7315 0.473633 11.4182 0.473633 8.98204C0.473633 6.51996 0.486607 6.23253 0.529521 5.27944C0.544429 4.53445 0.68583 3.79741 0.947685 3.0998C1.41538 1.89374 2.36919 0.940292 3.57543 0.473054C4.27268 0.209783 5.0099 0.0680083 5.75507 0.0538922C6.70816 0 7.02153 0 9.45567 0C11.9307 0 12.2151 0.0129741 13.1583 0.0538922C13.9054 0.0681303 14.6445 0.20989 15.3439 0.473054C16.5498 0.940821 17.5034 1.89409 17.9716 3.0998C18.2382 3.80758 18.3804 4.55614 18.3918 5.31237C18.4477 6.26846 18.4477 6.58084 18.4477 9.01597C18.4477 11.4511 18.4337 11.7705 18.3918 12.7156C18.3769 13.4623 18.2352 14.201 17.9726 14.9002C17.5032 16.1055 16.5495 17.0585 15.3439 17.5269C14.6455 17.7886 13.9079 17.93 13.1623 17.9451C12.2092 18 11.8968 18 9.45567 18ZM9.42173 1.57984C6.98062 1.57984 6.72712 1.59182 5.77403 1.63473C5.20515 1.64227 4.64177 1.74725 4.10836 1.94511C3.32069 2.24652 2.69741 2.86726 2.39279 3.65369C2.19341 4.19291 2.08841 4.76245 2.08241 5.33732C2.02952 6.30439 2.02952 6.55788 2.02952 8.98204C2.02952 11.3772 2.0385 11.6677 2.08241 12.6287C2.09135 13.1978 2.19628 13.7613 2.39279 14.2954C2.69786 15.0813 3.32103 15.7016 4.10836 16.003C4.64141 16.2022 5.20502 16.3072 5.77403 16.3134C6.7401 16.3693 6.99459 16.3693 9.42173 16.3693C11.8698 16.3693 12.1233 16.3573 13.0684 16.3134C13.6377 16.3064 14.2015 16.2014 14.7351 16.003C15.518 15.699 16.1372 15.0801 16.4417 14.2974C16.6407 13.7577 16.7457 13.1879 16.7521 12.6128H16.763C16.806 11.6587 16.806 11.4042 16.806 8.96607C16.806 6.52794 16.795 6.27146 16.7521 5.31836C16.7431 4.74995 16.6382 4.18714 16.4417 3.65369C16.1379 2.86983 15.5186 2.24979 14.7351 1.94511C14.2016 1.74625 13.6377 1.64124 13.0684 1.63473C12.1034 1.57984 11.8509 1.57984 9.42173 1.57984ZM9.45567 13.5918C7.58939 13.593 5.90618 12.4698 5.19106 10.746C4.47593 9.02213 4.86975 7.03726 6.18883 5.71703C7.50792 4.3968 9.49245 4.00127 11.2169 4.7149C12.9413 5.42854 14.066 7.11077 14.0664 8.97704C14.0637 11.523 12.0016 13.5869 9.45567 13.5918ZM9.45567 5.98104C7.80212 5.98104 6.46165 7.3215 6.46165 8.97505C6.46165 10.6286 7.80212 11.9691 9.45567 11.9691C11.1092 11.9691 12.4497 10.6286 12.4497 8.97505C12.4458 7.3231 11.1076 5.98488 9.45567 5.98104ZM14.2461 5.26946C13.6527 5.26726 13.1731 4.78502 13.1742 4.19162C13.1753 3.59823 13.6567 3.11777 14.2501 3.11777C14.8435 3.11777 15.3248 3.59822 15.3259 4.19162C15.3262 4.47791 15.2124 4.75252 15.0098 4.95477C14.8072 5.15702 14.5324 5.27026 14.2461 5.26946Z" fill="#F56040" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="">
                  <svg height="20" viewBox="0 0 72 72" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB" /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF" /></g></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
