import { useRouter } from "next/router";
import Link from "next/link";

import { FacebookIcon, InstaIcon } from "@/icons";
import { Select } from "@/ui/form";
import { currencies, locales } from "hygraph.config";
import { useSettingsContext } from "@/context/settings";

function Footer({ categories = [], collections = [] }) {
  const router = useRouter();
  const { activeCurrency, switchCurrency } = useSettingsContext();

  const activeLocale = locales.find((locale) => locale.value === router.locale);

  const updateCurrency = (event) => {
    const currency = currencies.find(
      (currency) => currency.code === event.target.value
    );

    switchCurrency(currency);
  };

  const updateLocale = (event) => {
    const path = ["/cart"].includes(router.asPath) ? router.asPath : "/";

    router.push(path, path, { locale: event.target.value });
  };

  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className="bg-body_color" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              {categories.length ? (
                <div>
                  <h3 className="font-Staatliches text-4xl font-black text-black tracking-wider uppercase">
                    Categories
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/${category.type.toLowerCase()}/${
                            category.slug
                          }`}
                          className="font-Staatliches text-xl text-black"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {collections.length ? (
                <div>
                  <h3 className="font-Staatliches text-4xl font-black text-black tracking-wider uppercase">
                    Collections
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {collections.map((collection) => (
                      <li key={collection.id}>
                        <Link
                          href={`/${collection.type.toLowerCase()}/${
                            collection.slug
                          }`}
                          className="font-Staatliches text-xl text-black"
                        >
                          {collection.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="font-Staatliches text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Language &amp; Currency
            </h3>
            <form className="mt-4 space-y-4 sm:max-w-xs font-Staatliches text-xs">
              <Select
                className="w-full "
                defaultValue={activeLocale.value}
                field="language"
                label="Language"
                onChange={updateLocale}
                options={locales}
              />
              <Select
                className="w-full "
                defaultValue={activeCurrency.code}
                field="currency"
                label="Currency"
                onChange={updateCurrency}
                options={currencies.map((currency) => ({
                  label: currency.code,
                  value: currency.code,
                }))}
              />
            </form>
          </div>
        </div>
        <div className="mt-8 font-Poppins border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link
              href="https://www.facebook.com/flexrowdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <FacebookIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/flexrowdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <InstaIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {currentYear} Flexrow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
