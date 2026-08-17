import { Web3ModalProvider } from "@/app/context/Web3ModalProvider";
import { I18nProvider } from "@/app/context/I18nProvider";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : defaultLocale;
  const t = await getDictionary(lang);

  return {
    title: {
      default: t.meta.defaultTitle,
      template: `%s | ${t.meta.siteName}`,
    },
    description: t.meta.defaultDescription,
    icons: { icon: "/favicon.ico" },
    openGraph: {
      siteName: t.meta.siteName,
      type: "website",
    },
    alternates: {
      languages: Object.fromEntries(locales.map((code) => [code, `/${code}`])),
    },
  };
}

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Locale = isLocale(raw) ? raw : defaultLocale;
  const messages = await getDictionary(lang);

  return (
    <I18nProvider locale={lang} messages={messages}>
      <Web3ModalProvider>
        <SiteHeader />
        {children}
        <SiteFooter />
      </Web3ModalProvider>
    </I18nProvider>
  );
}
