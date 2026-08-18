import Link from "next/link";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, isLocale, localePath, type Locale } from "@/lib/i18n/config";

const products = [
  {
    id: "p1",
    name: "Oversized Heavyweight Hoodie",
    price: "€85",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d92fa24?auto=format&fit=crop&q=80&w=800",
    tag: "NEW IN",
  },
  {
    id: "p2",
    name: "Utility Cargo Pants",
    price: "€110",
    image:
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&q=80&w=800",
    tag: "ESSENTIAL",
  },
  {
    id: "p3",
    name: "Box Fit Logo Tee",
    price: "€45",
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=800",
    tag: "",
  },
  {
    id: "p4",
    name: "Archive Denim Jacket",
    price: "€160",
    image:
      "https://images.unsplash.com/photo-1471286174890-9c112cbcd89a?auto=format&fit=crop&q=80&w=800",
    tag: "RESTOCKED",
  },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Locale = isLocale(raw) ? raw : defaultLocale;
  const t = await getDictionary(lang);

  return (
    <main>
      <section
        style={{
          background:
            "url('https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1600') no-repeat center center / cover",
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "3rem 2rem",
          position: "relative",
        }}
        aria-label="Hero promotion"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <p
            className="label-caps"
            style={{ color: "var(--accent)", marginBottom: "1rem" }}
          >
            {t.home.dropLabel}
          </p>
          <h1
            className="heading-condensed"
            style={{
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              color: "var(--white)",
              lineHeight: 0.9,
              marginBottom: "2rem",
            }}
          >
            {t.home.heroTitle.split(". ").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 ? "." : ""}
                {i < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <Link
            href={localePath(lang, "/buy")}
            className="btn"
            style={{
              background: "var(--accent)",
              color: "var(--black)",
              border: "none",
              fontSize: "1rem",
              padding: "1rem 2rem",
              display: "inline-block",
            }}
          >
            {t.home.heroCta}
          </Link>
        </div>
      </section>

      <section
        id="new-arrivals"
        style={{ padding: "4rem 2rem", background: "var(--white)" }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "2.5rem",
            }}
          >
            <h2
              className="heading-condensed"
              style={{ fontSize: "2rem", color: "var(--black)" }}
            >
              {t.home.newArrivals}
            </h2>
            <Link
              href={localePath(lang, "/")}
              style={{
                fontFamily: "var(--font-condensed)",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textDecoration: "underline",
              }}
            >
              {t.home.viewAll}
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="product-card"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3/4",
                    background: "#EFEBE1",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {p.tag && (
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        background: "var(--white)",
                        padding: "0.25rem 0.5rem",
                        fontSize: "0.65rem",
                        fontFamily: "var(--font-condensed)",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        border: "1px solid var(--black)",
                      }}
                    >
                      {p.tag}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                        fontSize: "0.95rem",
                        color: "var(--black)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {p.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                        fontSize: "0.85rem",
                        color: "var(--mid)",
                      }}
                    >
                      {p.price}
                    </p>
                  </div>
                  <button
                    className="btn btn-ghost"
                    style={{
                      padding: "0.5rem 1rem",
                      fontSize: "0.75rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t.home.quickAdd}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
