import image from "../assets/images/illustration-stay-productive.png";
export default function Productive() {
  return (
    <div className="container bg-[#171d29ff]">
      <div className="grid grid-cols-2 text-white">
        <div>
          <img src={image} alt="" />
        </div>
        <div className=" flex justify-center items-start flex-col">
          <h1 className="text-3xl font-bold ">
            Stay productive,  <br /> stay ahead lorem
          </h1>
          <p className="pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, ducimus! Lorem ipsum dolor sit amet.
            <br /> <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae magni culpa quod suscipit, quo eos.
          </p>
          <a className="text-[#63e0daff] text-lg  underline pt-14" href="/">see how fylo works </a>
        </div>
      </div>
    </div>
  );
}
