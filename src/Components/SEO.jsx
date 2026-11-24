import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = `https://thecoolaxolotl.com${pathname}`;

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}

export default SEO;
