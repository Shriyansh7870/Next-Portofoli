import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Shriyansh7870" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/shri7870/" },
  { icon: <FaTwitter />, path: "https://x.com/shriyan18776442" },
  {
    icon: <FaYoutube />,
    path: "https://myaccount.microsoft.com/?ref=MeControl",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((items, index) => {
        4;
        return (
          <Link key={index} href={items.path} className={iconStyles}>
            {items.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
