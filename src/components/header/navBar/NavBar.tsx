import { Link } from "react-scroll";

import logo from "../../../assets/icons/logo.png"


const Navbar = () => {


    const links = [
        {
            id: 1,
            link: "projects",
        },
        {
            id: 2,
            link: "contact",
        },
    ];

    return (
        <nav>
            <div className="flex flex-row justify-between items-center w-[100%] md:w-[60%] px-6 pt-2 bg-transparent h-18 fixed z-50">
                <figure className="w-12 cursor-pointer mt-2 hover:scale-105 duration-100">
                    <img src={logo} alt="logo" />
                </figure>
                <ul className="flex">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer bg-transparent capitalize font-bold text-[#232323] hover:scale-105 duration-100"
                        >
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar