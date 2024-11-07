import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.svg";

export default function Header() {
  const headerRef = useRef();
  const [links, setLinks] = useState(["Features", "Team", "SignIn"]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);

  return (
    <header  ref={headerRef} className="pt-20 fixed  w-full top-0 z-50 transition-all duration-200">
      <div className="container flex mx-auto justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        {/* container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row */}
        <a href="#">
          {" "}
          <img src={logo} alt="logo" />
        </a>

        <nav className="flex items-center">
          <ul className="flex items-center gap-9">
            {links.map((link) => (
              <li key={link}>
                <a
                  className="hover:underline text-white transition-opacity duration-200 hover:opacity-[1] opacity-[.7]"
                  href={`/${link.toLocaleLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// function Header() {
//   const [links, setLinks] = useState(["Features", "Team", "Signin"]);
//   const headerRef = useRef();
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         headerRef.current.style.background = "#0c1524";
//         headerRef.current.style.padding = "20px 0";
//       } else {
//         headerRef.current.style.background = "transparent";
//         headerRef.current.style.padding = "60px 0";
//       }
//     });
//   }, []);
//   return (
//     <header
//       ref={headerRef}
//       className="pt-20 fixed top-0 left-0 w-full z-50 transition-all duration-200"
//     >
//       <div className="container mx-auto   flex justify-between items-center gap-8  ">
//         <a to="/">
//           <img
//             src="/src/assets/images/logo.svg"
//             alt="logo-img"
//           />
//         </a>
//         <nav>
//           <ul className="flex items-center gap-[50px] ">
//             {links.map((link) => (
//               <li key={link}>
//                 <a
//                   to={`/${link.toLowerCase()}`}
//                   className={`${link} opacity-[0.9] hover:opacity-[1] text-white  hover:underline duration-200 transition-all`}
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;