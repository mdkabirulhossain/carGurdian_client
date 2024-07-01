import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="mt-10 md:flex lg:flex gap-10">
            <div className="lg:w-1/2">
                <img src={person} alt="" />
                <img src={parts} alt="" />
            </div>
            <div className="lg: w-1/2 space-y-5">
                <h1 className="font-bold text-yellow-500">About Us</h1>
                <h1>We are qualified & of experience in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

            </div>
        </div>
    );
};

export default About;