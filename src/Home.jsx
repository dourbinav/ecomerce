import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Signup from "./Signup";

export default function Home() {
  const user=localStorage.getItem("user")
  
  let [cur, setcur] = useState(0);

    if(!user || user===undefined){
      return <Signup />
    }


  const slides = [
    {
      url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29abad8d7ae64654b001adb90136819e_9366/RUNMAGICA_SHOES_Blue_EY2972_01_standard.jpg",
      id: "1",
    },
    {
      url: "https://media.istockphoto.com/id/510615049/photo/mens-trousers.jpg?s=612x612&w=0&k=20&c=gdVhFuzt-Kbk4NG8cjaL1afjKoz_Z5Wddv2ssHFg2bM=",
      id: "2",
    },
    {
      url: "https://www.creativeideas.store/media/catalog/product/cache/f7fe0c39a88bd276837542f863d0cbe2/o/v/oversize-tshirt-back_2.jpg",
      id: "3",
    },
    {
      url: "https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?s=612x612&w=0&k=20&c=yeFNfkQmcVV9BTUlZO8vY_oLOQgDAt23LfCbF1e3fbI=",
      id: "4",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxJMiNJ_CjsTwpODVvTLhw3vOU9NoEUI4jQ&usqp=CAU",
      id: "5",
    },
  ];

  setInterval(next, 3000);

  let newindex = cur;
  function next() {
    if (newindex === slides.length - 1) {
      cur = 0;
      newindex = cur;
    } else {
      newindex++;
    }
    setcur(newindex);
  }

  return (
    <>
    <Navbar />
      <div className="bg-red-300 m-auto ">
        <div className=" bg-red-300 flex m-auto gap-x-4">
          <img
            src={slides[cur].url}
            className="object-contain min-w-[20rem] sm:mx-auto h-64 "
            alt="no"
          ></img>
        </div>
      </div>
      <h2 className="my-4 text-2xl font-bold">Shop by brands</h2>
      <div className="grid grid-cols-2 m-auto sm:flex gap-3">
        <div className="bg-black text-white h-[136px] w-[140px] rounded-full flex justify-center items-center ">
          <div className="">
            <img
              className="w-[80px] bg-black "
              src="https://mir-s3-cdn-cf.behance.net/projects/404/066a25140313655.6283e2ba7e06e.png"
              alt="src"
            />
          </div>
        </div>
        <div className="bg-black text-white h-[136px] w-[140px] rounded-full flex justify-center items-center ">
          <div className="">
            <img
              className="w-[80px] bg-black "
              src="https://seeklogo.com/images/A/adidas-logo-49D5BEBA90-seeklogo.com.png"
              alt="src"
            />
          </div>
        </div>
        <div className="bg-black text-white h-[136px] w-[140px] rounded-full flex justify-center items-center ">
          <div className="">
            <img
              className="w-[100px] bg-black "
              src="https://static.vecteezy.com/system/resources/previews/017/339/609/original/puma-transparent-background-free-png.png"
              alt="src"
            />
          </div>
        </div>
        <div className="bg-black text-white h-[136px] w-[140px] rounded-full flex justify-center items-center ">
          <div className="">
            <img
              className="w-[100px] bg-black "
              src="https://www.seekpng.com/png/detail/391-3910645_nike-logo-transparent-white-pictures-png-nike-png.png"
              alt="src"
            />
          </div>
        </div>
        <div className="bg-black text-white h-[136px] w-[140px] rounded-full flex justify-center items-center ">
          <div className="">
            <img
              className="w-[100px] bg-black "
              src="https://seeklogo.com/images/A/asics-logo-FA9DDC0E4A-seeklogo.com.png"
              alt="src"
            />
          </div>
        </div>
        <div className="bg-black text-white h-[136px] w-[140px] rounded-full flex justify-center items-center ">
          <div className="">
            <img
              className="w-[100px] bg-black "
              src="https://zeevector.com/wp-content/uploads/New-Balance-Logo-Black-and-White.png"
              alt="src"
            />
          </div>
        </div>
      </div>
    </>
  );
}
