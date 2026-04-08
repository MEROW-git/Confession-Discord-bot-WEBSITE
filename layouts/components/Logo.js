import ImageFallback from "@components/ImageFallback";
import config from "@config/config.json";
import darkModeLogo from "../../logo/darkmode2.png";
import lightModeLogo from "../../logo/lightmode2.png";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { logo, logo_white, logo_width, logo_height, logo_text, title } =
    config.site;
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const themedLogo =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? darkModeLogo
      : lightModeLogo;
  const logoSource = src || logo || themedLogo;
  const width = Number.parseInt(logo_width.replace("px", ""), 10) || 150;
  const height = Number.parseInt(logo_height.replace("px", ""), 10) || 39;

  return (
    <Link href="/" className="navbar-brand inline-flex items-center gap-3">
      {logoSource ? (
        <>
          <ImageFallback
            width={width * 2}
            height={height * 2}
            src={logoSource}
            alt={title}
            priority
            style={{
              height: `${height}px`,
              width: `${width}px`,
            }}
            className="m-auto object-contain"
          />
          <span className="max-w-[220px] text-left text-base font-bold leading-tight text-dark dark:text-darkmode-light sm:text-xl">
            {logo_text || title}
          </span>
        </>
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
