import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";
import { PiGoogleLogoFill } from "react-icons/pi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  console.log("data fotter: ", FooterLink2);
  return (
    <div className="w-11/12   mx-auto  ">
      <div className="flex gap-10 py-5 pt-12  justify-evenly  ">
        {/* 1 columns */}
        <div className="text-richblack-500 flex flex-col gap-2">
          <img src={logo} alt="logo" />
          <Link to={"#"}>
            <h2 className="font-bold text-white">Company</h2>
          </Link>
          <Link to={"#"}>
            <p>About</p>
          </Link>
          <Link to={"#"}>Career</Link>
          <Link to={"#"}>Affiliate</Link>

          <div className="flex flex-row gap-3 pl-1 mt-2">
            <Link to="#">
              <FaFacebook size={25} />
            </Link>
            <Link to="#">
              <PiGoogleLogoFill size={25} />
            </Link>
            <Link to="#">
              <AiFillTwitterCircle size={25} />
            </Link>
            <Link to="#">
              <FaYoutube size={25} />
            </Link>
          </div>
        </div>
        {/* 2 columns */}
        <div className="text-richblack-500 flex flex-col gap-2">
          <h2 className="text-white font-bold">Resources</h2>
          <Link to={"#"}>
            <p>Articles</p>
          </Link>
          <Link to={"#"}>
            <p>Blogs</p>
          </Link>
          <Link to={"#"}>
            <p>Chart sheets</p>
          </Link>
          <Link to={"#"}>
            <p>Code Challenges</p>
          </Link>
          <Link to={"#"}>
            <p>Docs</p>
          </Link>
          <Link to={"#"}>
            <p>Projects</p>
          </Link>
          <Link to={"#"}>
            <p>Videos</p>
          </Link>
          <Link to={"#"}>
            <p>Work spaces</p>
          </Link>
          <h2 className="text-white font-bold mt-6">Support</h2>
          <Link to={"#"}>
            <p>Help center</p>
          </Link>
        </div>

        {/* 3 columns */}
        <div className="text-richblack-500 flex flex-col gap-2">
          <h2 className="text-white font-bold">Plans</h2>
          <Link to={"#"}>
            <p>Paid membership</p>
          </Link>
          <Link to={"#"}>
            <p>For students</p>
          </Link>
          <Link to={"#"}>
            <p>Business solutions</p>
          </Link>

          <h2 className="text-white font-bold mt-6">Community</h2>
          <Link to={"#"}>
            <p>Forums</p>
          </Link>
          <Link to={"#"}>
            <p>Chapters</p>
          </Link>
          <Link to={"#"}>
            <p>Events</p>
          </Link>
        </div>
        <div className="border-solid  border-richblack-700 border-[1px]"></div>
        {/* 4 columns */}
        {FooterLink2.length > 0
          ? FooterLink2.map((col, index) => (
              <div className="text-richblack-500 flex flex-col gap-2">
                <h2 className="text-white font-bold">{col.title}</h2>
                {col.links.map((link) => (
                  <Link to={link.link}>
                    <p>{link.title}</p>
                  </Link>
                ))}
              </div>
            ))
          : null}
        {/* 5 columns */}
        {/* 6 columns */}
      </div>
      <div className="flex justify-between w-full py-6 text-richblack-500 border-solid  border-richblack-700 border-t-[1px]">
        <div className="flex gap-4 ">
          <Link to={"#"}>
            <p>Privacy Policy</p>
          </Link>
          <div className="border-solid  border-richblack-700 border-[1px]"></div>
          <Link to={"#"}>
            <p>Cookie Policy</p>
          </Link>
          <div className="border-solid  border-richblack-700 border-[1px]"></div>

          <Link to={"#"}>
            <p>Terms</p>
          </Link>
        </div>
        <div>
          <p>Developed by Sameer Malik</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
