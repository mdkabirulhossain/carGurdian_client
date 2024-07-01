import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="mt-32 md:flex lg:flex gap-10">
            <div className="lg:w-1/2 relative">
                <img src={person} className="w-3/4 rounded-lg shadows-2xl" alt="" />
                <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" alt="" />
            </div>
            <div className="lg: w-1/2 space-y-5">
                <h1 className="font-bold text-yellow-400">About Us</h1>
                <h1 className="font-bold text-5xl">We are qualified <br /> & of experience <br /> in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="btn btn-warning">Get More Info</button>

            </div>
        </div>
    );
};

export default About;