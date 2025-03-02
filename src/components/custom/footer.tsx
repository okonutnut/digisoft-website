import { GetAllProducts } from "@/hooks/read-excel";
import { cn } from "@/lib/utils";
import { Facebook, MailIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  className?: string;
}
export default function Footer({ className }: FooterProps) {
  const products = GetAllProducts();
  return (
    <footer className="w-full bg-white flex flex-col justify-start items-center">
      <section className={cn(className, "w-full")}>
        {/* FOOTER */}
        <div className="h-full w-full flex justify-between gap-4 p-4">
          <div className="block xs:hidden md:block lg:block xl:block 2xl:block">
            <label className="text-slate-900 uppercase font-bold tracking-widest">
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
          {/* <div className="block xs:hidden md:block lg:block xl:block 2xl:block">
            <label className="text-slate-900 uppercase font-bold tracking-widest">
              LIST OF CLIENT
            </label>
            <ul>
              {listOfClient.map((client, index: number) => (
                <li key={index} className="mb-1">
                  <a href={client.link}>{client.title}</a>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="col-span-full">
            <label className="text-slate-900 uppercase font-bold tracking-widest">
              FOR MORE INFORMATION CONTACT
            </label>
            <div className="mb-5">
              <h1 className="mt-3 font-semibold">THOMAS C. SADUL</h1>
              <h4>President / CEO / Chief Architect</h4>
            </div>
            <ul>
              <li className="flex items-center gap-2 mb-1">
                <MailIcon />
                <span>tcsadul@yahoo.com</span>
              </li>
              <li className="flex items-center gap-2 mb-1">
                <Phone />
                <span>Globe: 09278591168 | Smart: 09214524212</span>
              </li>
              <li className="flex items-center gap-2 mb-1">
                <Facebook />
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
        <div className="text-center pb-2">
          <p className="text-sm">All Rights Reserved 2003-2019</p>
          <p className="text-sm">Digital Software &copy; 2003-2019</p>
        </div>
      </section>
    </footer>
  );
}
