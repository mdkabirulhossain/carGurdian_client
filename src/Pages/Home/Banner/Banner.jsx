import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[500px]">
                <img
                    src={img1}
                    className="w-full rounded-lg" />
                <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end bottom-0 gap-3">
                    <a href="#slide6" className="btn btn-circle bg-orange-600">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[500px]">
                <img
                    src={img2}
                    className="w-full rounded-lg" />
                <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end bottom-0 gap-3">
                    <a href="#slide1" className="btn btn-circle bg-orange-600">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[500px]">
                <img
                    src={img3}
                    className="w-full rounded-lg" />
                <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end bottom-0 gap-3">
                    <a href="#slide2" className="btn btn-circle bg-orange-600">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[500px]">
                <img
                    src={img4}
                    className="w-full rounded-lg" />
                <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0 gap-3">
                    <a href="#slide3" className="btn btn-circle bg-orange-600">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-[500px]">
                <img
                    src={img5}
                    className="w-full rounded-lg" />
                <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0 gap-3">
                    <a href="#slide4" className="btn btn-circle bg-orange-600">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full h-[500px]">
                <img
                    src={img6}
                    className="w-full rounded-lg" />
                <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0 gap-3">
                    <a href="#slide5" className="btn btn-circle bg-orange-600">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;