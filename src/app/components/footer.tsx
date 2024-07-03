import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center text-center w-full text-paragraph bg-footer bg-footer-texture">
        <div className="flex flex-col items-center gap-6 py-28">
          {/* Adicionar Logo */}
          <Link href="#">
            <Image width={100} height={100} src="/images/next.svg" alt="Logo" />
          </Link>
          <p className="text-black">
            Start working with Landrick that can provide everything you need to
            generate <br /> awareness, drive traffic, connect.
          </p>

          {/* Finalizar */}
          <ul>
            <li>Insta</li>
            <li>Facebook</li>
          </ul>
        </div>

        <hr className="w-full opacity-20" />

        <div className="w-full my-8">
          <p>
            © 2024 Landrick. Design & Develop with{" "}
            <FavoriteIcon className="text-red" />
            by Shreethemes.
          </p>
        </div>
      </footer>
    </>
  );
}
