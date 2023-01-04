import { useNavigate } from "react-router";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
// import BannerImage from "@/assets/BannerImage.png";
import Item1 from "@/assets/Item1.png";
import Logo from "@/assets/logo.svg";
import { useState } from "react";
// import { Button } from '@/components/Elements';
// import { Head } from '@/components/Head';
// import { useAuth } from '@/lib/auth';

export const Home = () => {
  const navigate = useNavigate();
  //   const { user } = useAuth();

  //   const handleStart = () => {
  //     if (user) {
  //       navigate('/app');
  //     } else {
  //       navigate('/auth/login');
  //     }
  //   };

  const Card = () => {
    const [hover, setHover] = useState(false);
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex justify-center"
      >
        <div className="rounded-t-xl bg-main-White max-w-sm">
          {/* <a href="#!"> */}
          <img
            className="rounded-t-xl"
            // src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            src={Item1}
            alt="Item 1"
          />
          {/* </a> */}
          {hover ? (
            <div className="flex flex-1 bg-main-White backdrop-blur-sm opacity-50 -mt-8 py-2">
              <div className="mx-auto font-bold text-xs">ADD TO CART</div>
            </div>
          ) : undefined}
          <div className="py-2">
            <h3 className="text-main-Black text-sm font-regular mb-2">
              Lira Earrings
            </h3>
            <p className="text-main-Accent text-base">$20.00</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* This is just for testing will be removed to header feature */}
      <header className="fixed inset-x-0 z-50 bg-main-White max-w-3xl mx-auto">
        <nav className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="h-16 w-16" src={Logo} alt="logo" />
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a className="px-3 font-medium hover:text-alt" href="#home">
                    Shop
                  </a>
                  <a className="px-3 font-medium hover:text-alt" href="#about">
                    Blog
                  </a>
                  <a className="px-3 font-medium hover:text-alt" href="#skills">
                    Our Story
                  </a>
                  <p>|</p>
                  <a>
                    <MagnifyingGlassIcon className="h-4 w-4 text-main-Black" />
                  </a>
                  <a>
                    <ShoppingCartIcon className="h-4 w-4 text-main-Black" />
                  </a>
                  <a>
                    <UserIcon className="h-4 w-4 text-main-Black" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button className="items-center justify-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-white h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className="md:hidden z-10 hidden">
          <div className="flex flex-col items-center divide-y px-2 py-2 sm:px-3">
            <a className="py-4 text-base font-medium" href="#home">
              Home
            </a>
            <a className="py-4 text-base font-medium" href="#about">
              About
            </a>
            <a className="py-4 text-base font-medium" href="#skills">
              Portfolio
            </a>
            <a className="py-4 text-base font-medium" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </header>
      <section className="container mx-auto pt-16 flex ">
        <div className="flex h-96 w-full rounded-lg bg-cover items-center bg-[url('https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ">
          {/* <img className="rounded-md " src={BannerImage} /> */}
          <div className="flex flex-1 justify-items-start m-4 my-auto">
            {/* <div className="max-w-sm"> */}
            <div className="flex flex-col py-2 content-center">
              <h3 className="text-main-White text-3xl font-regular mb-2">
                Lira Earrings
              </h3>
              <p className="text-main-White text-lg">$20.00</p>
              <button className="border-main-White font-bold text-sm px-2 py-1 mt-4 border-2 text-main-White rounded-md">
                View Product
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-between mt-8">
        <h1 className="font-medium">Shop the Latest</h1>
        <h4 className="font-medium text-main-Accent">View All</h4>
      </section>
      <section className="grid grid-cols-3 gap-4 mt-8">
        {/* Map the cards of the products */}

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};
