import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const contentBody = document.querySelector(".content-body");
    if (contentBody) {
      contentBody.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
