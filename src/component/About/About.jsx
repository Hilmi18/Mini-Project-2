import about from "../../assets/img/about/about.png";

const About = () => {
  return (
    <div id="aboutSection" className="min-h-[450px] pt-3">
      <div className="container mx-auto min-h-[450px]">
        <div className="min-h-[420px] flex flex-col lg:flex-row items-center ">
          <div className="flex-1 text-center lg:text-left lg:ml-[30px]  lg:pl-10">
            <h2 className="italic font-semibold capitalize text-[40px] mb-4 leading-[1.1]">
              Who We Are
            </h2>
            <p className="mb-8 max-w-[560px]">
              We are a passionate team dedicated to delivering an extraordinary
              dining experience to you. Established in 2023, Dahar has grown to
              become one of the most trusted food delivery services in
              Indonesia. Inspired by our love for food, we aim to share it with
              you.
            </p>
          </div>
          <div className="lg:mr-[50px] sm:w-[500px] w-[300px] z-10">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
