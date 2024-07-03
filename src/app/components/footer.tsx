import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "../constants/social-media";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center text-center w-full text-gray bg-footer bg-footer-texture">
        <div className="flex flex-col items-center gap-6 py-28">
          <Link href="#">
            <Image width={100} height={100} src="/images/logo.png" alt="Logo" />
          </Link>
          <p className="text-black">
            Start working with Template that can provide everything you need to
            generate <br /> awareness, drive traffic, connect.
          </p>

          <ul className="flex gap-4">
            {socialMedia.map((social, index) => (
              <li
                key={index}
                className="flex justify-center items-center w-8 h-8 border-solid border-[1px] border-gray border-opacity-35 rounded-md"
              >
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-8" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="w-full opacity-20" />

        <div className="w-full my-8">
          <p>
            © 2024 Template. Design & Develop with{" "}
            <FavoriteIcon className="text-red" /> by Kayke.
          </p>
        </div>
      </footer>
    </>
  );
}
