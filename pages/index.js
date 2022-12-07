/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/index.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
     
      <header className="header_style">
        <div className={styles.hd1}>
          <h1>Full Stack & Python Developer </h1>
          <h2>I code to Make the World Happier and I love what I do.</h2>
          <Image
            src="/Profile/mf-avatar.svg"
            width={210}
            height={210}
            alt="Profile Photo"
            className={styles.profile_img}
          />
        </div>

        <div className={styles.sec1}>
          <div className={styles.sub_container}>
            <Image
              src="/Images/hero-devices.svg"
              width={800}
              height={290}
              alt="Coding Image"
              className={styles.coding_img}
            />
          </div>
        </div>
      </header>

      <div id="about" className={styles.about}>
        <div className={styles.outside_container}>
          <div className={styles.about_container}>
            <h1>Hi, I’m Ayush Kothiyal. Nice to meet you.</h1>
            <div className={styles.about_text}>
              <h2>
                I am a <strong>3rd year Student </strong>doing my
                <strong> B.Tech</strong> at
                <strong> I.K. Gujral Punjab Technical University</strong>. I
                love to Code and contribute in projects around the world. I also
                have a nickname <strong> <a
              href="http://linkedin.com/in/ayush-kothiyal-2a349a1ba"
              target="_blank"
              rel="noreferrer"
            >A7Coder</a></strong> and so my logo
                <strong>(●'◡'●)</strong>.
              </h2>
            </div>
            <a
           
              href="http://linkedin.com/in/ayush-kothiyal-2a349a1ba"
              target="_blank"
              rel="noreferrer"
            >
              
              Wanna Know More About Me?
            </a>
          </div>
        </div>
      </div>
      <div className={styles.skill}>
        <div>
          <h1>Languages I speak</h1>
          <div className={styles.gallery}>
            <Image
              src="/Programming/js.svg"
              width={50}
              height={50}
              title='JavaScript'
              alt="JavaScript"
            ></Image>
            <Image
              src="/Programming/python.svg"
              width={50}
              height={50}
              title='Python'
              alt="Python"
            ></Image>
            <Image
              src="/Programming/cpp.svg"
              width={50}
              height={50}
              title='C++'
              alt="C++"
            ></Image>
            <Image
              src="/Programming/css.png"
              width={50}
              height={70}
              title='CSS'
              alt="CSS"
            ></Image>
            <Image
              src="/Programming/ejs.png"
              width={50}
              height={50}
              title='EJS'
              alt="EJS"
            ></Image>
            <Image
              src="/Programming/html.png"
              width={50}
              height={50}
              title='HTML'              
              alt="HTML"
            ></Image>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div>
          <h1>Frameworks I Use</h1>
          <div className={styles.gallery}>
            <Image
              src="/Framewrok/next.png"
              width={50}
              height={50}
              alt="NextJs"
              title='NextJs'
            ></Image>
            <Image
              src="/Framewrok/express.jpg"
              width={50}
              height={50}
              alt="Express"
              title='Express'
            ></Image>
            <Image
              src="/Framewrok/mongodb.png"
              width={50}
              height={50}
              alt="MongoDb"
              title='MongoDb'
            ></Image>
            <Image
              src="/Framewrok/mysql.png"
              width={50}
              height={50}
              alt="MySQL"
              title='MySQL'
            ></Image>
            <Image
              src="/Framewrok/react.png"
              width={50}
              height={50}
              alt="ReactJS"
              title='ReactJS'
            ></Image>
            <Image
              src="/Framewrok/beautifulsoup.png"
              width={50}
              height={50}
              alt="BeautifulSoup"
              title='BeautifulSoup'
            ></Image>
            <Image
              src="/Framewrok/django.png"
              width={50}
              height={50}
              alt="Django"
              title='Django'
            ></Image>

            <Image
              src="/Framewrok/flask.png"
              width={50}
              height={50}
              alt="Flask"
              title='Flask'
            ></Image>
          </div>
        </div>
      </div>
      
    </>
  );
}
