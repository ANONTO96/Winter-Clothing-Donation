import img from '../assets/DALL·E 2024-11-17 22.52.56 - A heartwarming winter-themed banner showing people joyfully donating warm clothing, such as jackets, scarves, and gloves, to those in need. The scene .webp';
import bnr from '../assets/DALL·E 2024-11-17 22.52.17 - A vibrant winter-themed banner showing people donating warm clothing, such as jackets, scarves, and gloves, to those in need. The scene is set in a sn.webp';
import img2 from '../assets/hand-drawn-charity-event-facebook-post_23-2149387307.avif';
import img3 from '../assets/poster-for-donating-used-clothes-to-charity-with-love_49834.jpg';
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div className="mx-auto">
        {/* Banner/Slider Section */}
        <div className="carousel">
          <div id="slide1" className="carousel-item
            relative w-full">
            <img src={img} className="lg:w-[75%] h-[500px] md:h-[680px] object-cover mx-auto lg:rounded-2xl" alt="Winter Campaign" />
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img className="lg:w-[75%] h-[500px] md:h-[670px] mx-auto lg:rounded-2xl" src={bnr} alt="Winter Campaign"/>
          </div>
          <div className="flex justify-between absolute w-full lg:w-[90%] lg:ml-[5%] px-5 bottom-64 md:bottom-20">
            <a href="#slide1" className="btn btn-circle bg-transparent">❮</a>
            <a href="#slide2" className="btn btn-circle bg-transparent">❯</a>
          </div>
        </div>
  
        {/* About Section */}
        <div className="mb-10 p-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
          <p className="text-center max-w-2xl mx-auto">
            Our mission is to provide essential resources to the community during the winter season. Join us in making a difference by contributing to our donation campaigns.
          </p>
        </div>
  
        {/* How It Works Section */}
        <div className="mb-10 p-6 bg-white">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <ul className="list-disc max-w-xl mx-auto text-lg">
            <li>Choose a campaign from the list of active drives.</li>
            <li>Donate online or drop off goods at collection points.</li>
            <li>Our team ensures timely distribution to those in need.</li>
          </ul>
        </div>

        {/* marquee */}
        <div>
        <Marquee>
        <img className='h-[400px]' src={img2} alt="" />
        <img className='h-[400px] w-[350px]' src={img3} alt="" />
        <img className='h-[400px]' src={img2} alt="" />
        <img className='h-[400px] w-[350px]' src={img3} alt="" />
        </Marquee>
        </div>
  
        {/* Extra Section 1: Testimonials */}
        <div className="p-10 md:p-16 lg:rounded-t-3xl bg-gray-200">
          <h2 className="text-3xl font-bold text-center mb-4">What People Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow rounded">
              <p>"This initiative has changed so many lives!"</p>
              <span className="block text-right font-bold">- Jane D.</span>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <p>"Donating was so easy, and I know my contribution helped."</p>
              <span className="block text-right font-bold">- Mark T.</span>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <p>"A wonderful way to give back during the winter."</p>
              <span className="block text-right font-bold">- Emily R.</span>
            </div>
          </div>
        </div>
  
        {/* Extra Section 2: Newsletter */}
        <div className="p-12 py-10 bg-blue-200">
          <h2 className="text-3xl font-bold text-center mb-4">Stay Updated</h2>
          <p className="text-center max-w-2xl mx-auto mb-4">
            Sign up for our newsletter to receive updates on donation campaigns and success stories.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-md"
            />
            <button className="btn bg-gradient-to-r from-sky-500 to-purple-500 ml-2">Subscribe</button>
          </div>
        </div>
      </div>
    );
};

export default Home;