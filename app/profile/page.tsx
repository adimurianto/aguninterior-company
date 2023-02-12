export default function Profile() {
  return (
    <>
      <div className="container" style={{backgroundImage: "url('/banner-profile.png')", width:"100%", height: "auto", color:"#fff", borderRadius: "5px"}}>
        <div className="row">
          <div className="col-12 py-5">
            <center className="lh-lg">
              <h1><u>AGUN INTERIOR</u></h1>
              <p>
                Perusahaan kami bergerak dibidang barang dan jasa interior dan exterior serta properti untuk berjualan<br/>
                Produk unggulan yang selalu di minati oleh semua kalangan<br/>
                Properti yang selalu di butuhkan oleh rumah dan tempat usaha anda<br/>
                Nyaman untuk di lihat dan lebih elegan dengan di padukan dengan gaya modern
              </p>
            </center>
          </div>
        </div>
      </div>


      <div className="container my-5" style={{border: "2px solid #efb733", borderRadius: "5px"}}>
        <div className="row py-5">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <h2>Visi</h2>
            Menjadi perusahaan interior dan exterior yang terdepan, bekerja secara professional, berintegritas terpercaya dan selalu inovatif.<br/><br/><br/>
            
            <h2>Misi</h2>
            Berkomitmen untuk menghasilkan produk interior dan exterior yang bermutu, dengan berorientasi kepada kepuasan pelanggan, terus menerus untuk berinovasi dan berkembang secara berkesinambungan.<br/><br/>
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12">
            <div style={{border: "2px solid #efb733", borderRadius: "5px", margin: "0.5rem", padding:"2rem 1rem "}}>
              <h2>Kontak Kami</h2><br/>
              <b>WhatsApp :</b> 085 722 792 010<br/><br/>
              <b>Facebook :</b> Agun Interior & Exterior<br/><br/>
              <b>Instagram :</b> agun.interior.exterior<br/><br/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
