import NavAuthor from "../header/nav-author";
import halo from "../../assets/img/halo.gif"

export default function Author(){
    return (
        <>
            <NavAuthor />

            <div className="container-fluid pt-5 mt-5">
                <div className="row pt-2">
                    <div className="col-12 offset-0 col-sm-6 offset-sm-3 col-lg-4 offset-lg-4 card card-header border-0 text-center rounded-3 bg-transparent">
                        <img src={halo} alt="gambar tangan" className="m-auto w-25"/>

                        <h1 className="card-title mt-4" style={{fontFamily : "gloria hallelujah"}}><strong>Halo Guysss!!</strong></h1>
                        <p className="card-text mt-4" style={{fontSize : ".8rem"}}>
                        Selamat datang di website saya! Saya Ahmad Bagas Adiputra, seorang web developer otodidak dan mahasiswa Teknik Informatika
                        di Universitas Nahdlatul Ulama Sulawesi Tenggara. Saya sangat antusias untuk terus belajar dan mengembangkan keterampilan dalam bidang ini.
                        Semoga karya yang saya bagikan di sini bisa bermanfaat dan menginspirasi. Terima kasih atas kunjungannya!
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}