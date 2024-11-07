import image from '../assets/images/illustration-intro.png';
import image2 from '../assets/images/bg-curvy-desktop.svg'
export default function Landing() {
  return (
    <section className='bg-[#1c2230] pt-36'>
      <div className="container">
        <div className='w-[750px] max-w-full mx-auto'>
          <img className='w-full' src={image} alt="" />
        </div>
        <div className="text-white text-center">
          <h1 className='text-3xl md:text-4xl font-semibold mb-4'>
            All Your Files In One Secure Location <br />
            accessible any where
          </h1>
          <p className='font-normal text-lg px-4 md:w-[600px] max-w-full mx-auto text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            reprehenderit voluptates quia error. Nobis sapiente adipisci porro
            dolores. Tempora, aspernatur.
          </p>
        </div>
        <div className=" flex justify-center  mt-5">
        <a  href='/' className="btn   text-center   px-6 py-3 rounded-full font-medium text-white">
          Get Started
        </a>
        </div>
        
        
      </div>
      <div className=" w-full h-60 ">
        <img src={image2}  className='w-full ' alt="" />
      </div>
    </section>
  );
}
