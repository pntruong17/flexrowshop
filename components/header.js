import Link from "next/link";
import { useCart } from "react-use-cart";

import { formatCurrencyValue } from "@/utils/format-currency-value";
import { ShoppingCartIcon } from "@/icons";
import { useSettingsContext } from "@/context/settings";

function Header({ pages = [] }) {
  console.log(pages);
  const { cartTotal } = useCart();
  const { activeCurrency } = useSettingsContext();

  return (
    <header className="max-w-7xl mx-auto bg-body_color flex-grow flex items-center justify-between px-4 sm:px-6">
      <div className="py-6 w-full">
        <nav className="flex items-center justify-between flex-wrap space-x-4">
          <Link href="/">
            <h3 className="text-2xl w-32 font-black font-Abril">Flexrow</h3>
          </Link>
          {pages.length ? (
            <ul className="hidden md:mx-auto md:block md:flex-grow">
              {pages.map((page) => (
                <li key={page.id} className="block md:inline-block md:my-0">
                  <Link
                    href={`/${page.type.toLowerCase()}/${page.slug}`}
                    className="font-Outfit hover:text-slategray hover:underline rounded-full py-2 px-3 font-medium"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="flex items-center">
            <Link href="/cart" className="flex space-x-2">
              <ShoppingCartIcon
                className="h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
              <span className="text-gray-900">
                {formatCurrencyValue({
                  currency: activeCurrency,
                  value: cartTotal,
                })}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;