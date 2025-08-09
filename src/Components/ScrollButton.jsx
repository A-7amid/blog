import { useEffect, useState } from "react";
import { cn } from "../utils/clsx";

export const ScrollButton = () => {
  const [isShown, setIsShown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {
    const handleVisibleButton = () => {
      setScrollPosition(pageYOffset);

      if (scrollPosition >= 300) {
        setIsShown(true);
        console.log("shown");
      } else if (scrollPosition <= 300) {
        setIsShown(false);
        console.log("not shown");
      }
    };

    addEventListener("scroll", handleVisibleButton);
  }, [scrollPosition]);

  const scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed cursor-pointer right-4 bottom-4 border bg-pink-100 p-12 rounded-full",
        {
          "fixed border": isShown,
          "hidden border": !isShown,
        }
      )}
    >
      Click
    </button>
  );
};
