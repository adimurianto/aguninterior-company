import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faPenToSquare,
  faBuildingCircleCheck,
  faMap,
  faBasketShopping
} from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ['latin'] })

const datas = ['img_content1.jpeg', 'img_content2.jpeg', 'img_content3.jpeg', 'img_content4.jpeg', 'img_content1.jpeg', 'img_content2.jpeg', 'img_content3.jpeg', 'img_content4.jpeg'];

export default function Home() {
  return (
    <main>
      <div className="container">
        {/* Layout Header */}
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <Image
                src="/logo-head.png"
                alt="logo"
                layout='responsive'
                height="70"
                width="380"/>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Profile</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Office</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Gallery</a></li>
          </ul>
        </header>

        {/* Layout Banner */}
        <div className="container">
          <Image 
            src="/banner.png"
            alt="logo"
            layout="responsive"
            width="1920"
            height="700"
            />
        </div>

        {/* Layout Fitur */}
        <div className="container px-4 pt-5 pb-2" id="hanging-icons">
          <h2 className="pb-2 border-bottom">SOLUSI TEPAT</h2>
          <p className="pb-2">Apapun usaha & rumah yang anda impikan. Tim kami siap mewujudkannya.</p>
          
          <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ fontSize: "2rem", color: "black", background: "transparent"}}
                />
              </div>
              <div>
                <h4 className="fs-3">DESAIN</h4>
                <p>Kami membuat desain berdasarkan kebutuhan anda.</p>
              </div>
            </div>
            
            <div className="col d-flex align-items-start">
              <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <FontAwesomeIcon
                  icon={faMap}
                  style={{ fontSize: "2rem", color: "black", background: "transparent"}}
                />
              </div>
              <div>
                <h4 className="fs-3">PENGEMBANGAN</h4>
                <p>Kami menjamin kualitas produk terbaik untuk anda.</p>
              </div>
            </div>
            
            <div className="col d-flex align-items-start">
              <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <FontAwesomeIcon
                  icon={faBuildingCircleCheck}
                  style={{ fontSize: "2rem", color: "black", background: "transparent"}}
                />
              </div>
              <div>
                <h4 className="fs-3">PENERBITAN</h4>
                <p>Produk telah selesai dan sesuai dengan desain yang anda inginkan.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Content */}
        <hr/>
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
              {
                datas.map((data, index) => {
                  return (
                    <div className="col" key={index}>
                      <div className="card shadow-sm">
                        <div className="bd-placeholder-img card-img-top">
                          <Image 
                            src={`/content/${data}`}
                            alt="content"
                            layout="responsive"
                            width="100"
                            height="100"
                            style={{overflow: "hidden", borderRadius: "5px 5px 0 0"}}
                            />
                        </div>
                        <div className="card-body text-center">
                          <button className="btn btn-default btn-main">
                            <FontAwesomeIcon
                              className='icon-order'
                              icon={faBasketShopping}
                              style={{ fontSize: "1rem", background: "transparent"}}
                            />
                            &nbsp;Pesan
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        {/* Layout Footer */}
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-12 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              Agun Interior Group
            </a>
            <span className="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
