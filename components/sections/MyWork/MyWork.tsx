import { useState } from 'react'
import { Modal } from '../../new/Modal'

import styles from './MyWork.module.scss'

export const MyWork = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={styles.myWork}>
      <h2 className={styles.header}>My Work</h2>
      <div className="grid gap-6 lg:grid-cols-1 xl:gap-x-12">
        <div className={styles.card}>
          <div className="relative block bg-white rounded-lg">
            <div className={styles.imageContainer}>
              <div
                className="relative -mt-4 overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="works/almanac-1.png"
                  className="w-full max-w-[600px]"
                />
                <a href="#!" onClick={() => setIsOpen(true)}>
                  <div
                    className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                  ></div>
                </a>
              </div>
            </div>
            <div className={styles.textContainer}>
              <div className="pt-10 px-2 max-w-[600px]">
                <h5 className="mb-3 text-lg font-bold">Almanac</h5>
                <p className="pb-2 mb-4">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam. Ut pretium ultricies
                  dignissim. Sed sit amet mi eget urna placerat vulputate. Ut
                  vulputate est non quam dignissim elementum. Donec a
                  ullamcorper diam. Ut pretium ultricies dignissim. Sed sit amet
                  mi eget urna placerat vulputate. Ut vulputate est non quam
                  dignissim elementum. Donec a ullamcorper diam.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className={styles.imageContainer}>
              <div
                className="relative mx-4 -mt-4 overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
                  className="w-full"
                />
                <a href="#!">
                  <div
                    className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                  ></div>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-3 text-lg font-bold">A lonely bench</h5>
              <p className="pb-2 mb-4">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                orci, nec ornare metus semper sed. Integer volutpat ornare erat
                sit amet rutrum.
              </p>
              <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <img src="works/almanac-1.png" className="w-full" />
      </Modal>
    </section>
  )
}
