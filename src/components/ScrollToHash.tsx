import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    requestAnimationFrame(() => {
      tryScroll();
      setTimeout(tryScroll, 60);
    });
  }, [hash, pathname]);

  return null;
}
