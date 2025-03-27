import { GetAllProducts } from "@/hooks/read-excel";
import { cn } from "@/lib/utils";
import { Facebook, MailIcon, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  className?: string;
}
export default function Footer({ className }: FooterProps) {
  const products = GetAllProducts();
  return (
    <footer className="w-full text-current flex flex-col justify-start items-center bg-[#16294a] text-white border-0 p-0 m-0">
      <section className={cn(className, "w-full")}>
        {/* FOOTER */}
        <div className="h-full w-full flex justify-between gap-4 p-4">
          <div className="block xs:hidden md:block lg:block xl:block 2xl:block">
            <label className="uppercase font-bold tracking-widest text-[#ffa500]">
              products
            </label>
            <ul>
              {products.map((product, index: number) => (
                <li key={index} className="mb-1">
                  <a href={product.href}>{product.code}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="block xs:hidden md:block lg:block xl:block 2xl:block">
            <label className="uppercase font-bold tracking-widest text-[#ffa500]">
              others
            </label>
            <ul>
              <li className="mb-1">
                <Link to={"/list-of-clients"}>List of clients</Link>
              </li>
              <li className="mb-1">
                <Link to={"/list-of-clients"}>Release Notes</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-full">
            <label className="uppercase font-bold tracking-widest xs:text-sm text-[#ffa500]">
              FOR MORE INFORMATION CONTACT
            </label>
            <div className="mb-5 xs:text-xs">
              <h1 className="mt-3 font-semibold">THOMAS C. SADDUL</h1>
              <h4>President / CEO / Chief Architect</h4>
            </div>
            <ul className="xs:text-xs">
              <li className="flex items-center gap-2 mb-1">
                <MailIcon className="w-4" />
                <span>digisoftphofficial@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 mb-1">
                <Phone className="w-4" />
                <span>Globe: 09278591168 | Smart: 09214524212</span>
              </li>
              <li className="flex items-center gap-2 mb-1">
                <MapPin className="w-4" />
                <span>
                  29/F Penthouse, World Plaza, 5th Avenue, Bonifacio Global
                  City, Taguig, Philippines
                </span>
              </li>
              <li className="flex items-center gap-2 mb-1">
                <Facebook className="w-4" />
                <Link
                  to={"https://www.facebook.com/DigiSoftPH/"}
                  target="_blank"
                >
                  DigiSoftPH
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-sm text-center pb-2 xs:text-[12px]">
          <p>All Rights Reserved 2003-2019</p>
          <p>Digital Software &copy; 2003-2019</p>
        </div>
      </section>
    </footer>
  );
}
