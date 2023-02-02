import Image from 'next/image'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faPenToSquare,
  faBuildingCircleCheck,
  faMap,
  faBasketShopping
} from "@fortawesome/free-solid-svg-icons";

const datas = ['img_content1.jpeg', 'img_content2.jpeg', 'img_content3.jpeg', 'img_content4.jpeg', 'img_content1.jpeg', 'img_content2.jpeg', 'img_content3.jpeg', 'img_content4.jpeg'];

export default function Home() {
  return (
    <>
      {/* Layout Banner */}
      <div className="container">
        <Image 
          src="/banner.png"
          alt="logo"
          layout="responsive"
          width="1920"
          height="700"
          style={{overflow: "hidden", borderRadius: "5px"}}
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
    </>
  )
}
