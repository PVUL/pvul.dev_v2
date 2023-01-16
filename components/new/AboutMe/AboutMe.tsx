import Image from 'next/image'
import styles from './AboutMe.module.scss'
import imageSrc from '../../../public/paul-yun.png'

export const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className="container flex justify-center mx-auto text-center xl:px-29 lg:text-left">
        <div className="flex flex-col items-center max-w-5xl xs:flex-col sm:pt-10 lg:flex-row">
          <div className="justify-end">
            <img
              src="paul-yun.png"
              height={400}
              width={400}
              className={styles.image}
            ></img>
          </div>
          <div className="mb-12 lg:mb-0">
            <div
              className="block max-w-5xl px-6 py-12 rounded-lg shadow-lg md:px-12 lg:-ml-10"
              style={{
                background: 'hsla(0, 0%, 100%, 0.55)',
                backdropFilter: 'blur(30px)',
              }}
            >
              <h2 className="mb-6 text-3xl font-bold">
                Hi I’m Paul. I bring ideas to life through web and product
                design.
              </h2>
              <p className="pb-2 mb-6 text-gray-500 lg:pb-0">
                I’ve spent the last 15+ years working across different areas of
                design- web and app development, industrial design, packaging
                and graphic design.
              </p>

              <p className="mb-6 text-gray-500">
                I care deeply about helping my clients with their creative needs
                and I treat every project as if it’s my own, with love and care.
              </p>

              <p className="mb-0 text-gray-500">
                Outside of work, you can catch me cruising on my skateboard,
                tinkering with widgets using my 3d printer, and becoming a
                professional home chef.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
