import Link from "next/link";
import Image from "next/image";

import { formatCurrencyValue } from "@/utils/format-currency-value";
import { useSettingsContext } from "@/context/settings";
import { GitHubIcon, HeartIcon } from "./icons";

function ProductCard({ id, images, name, price, slug }) {
  const { activeCurrency } = useSettingsContext();

  const [primaryImage] = images;

  return (
    <article key={id}>
      <div className="group no-underline w-full h-auto flex flex-col">
        <div className="cursor-pointer w-full h-[560px] px-5 overflow-hidden relative py-6 flex flex-col justify-between">
          <Link
            href={`/products/${slug}`}
            className="absolute top-0 z-0 left-0 w-full h-full rounded-[60px] overflow-hidden"
          >
            {primaryImage ? (
              <Image
                fill
                objectFit="cover"
                src={primaryImage.url}
                //height={primaryImage.height} //primaryImage.height
                //width={primaryImage.width} //primaryImage.width
                alt={name}
                title={name}
                className=""
              />
            ) : null}
          </Link>
          <div className="w-full relative z-20 flex flex-row justify-between items-center pointer-events-auto">
            <div className="w-10 h-10">
              <HeartIcon on />
            </div>
            <p className="text-gray-800 text-2xl font-Staatliches rounded-full bg-white py-2 px-3">
              {formatCurrencyValue({
                currency: activeCurrency,
                value: price,
              })}
            </p>
          </div>
          <div className="w-full relative z-20">
            <p className="w-full text-center h-auto rounded-[60px] bg-white font-Staatliches text-2xl sm:text-5xl font-black hover:text-indigo-600 p-3">
              {name}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
