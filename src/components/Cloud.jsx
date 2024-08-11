import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,

      
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {}, // Definir aProps como un objeto vacío
  });
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("light"); // Manejo del tema manualmente
  
  useEffect(() => {
    const rootElement = document.documentElement; // Usualmente es <html>

    const updateTheme = () => {
      const isDarkMode = rootElement.classList.contains('dark');
      setTheme(isDarkMode ? "dark" : "light");
    };

    // Inicializar el tema según la clase actual
    updateTheme();

    // Crear un MutationObserver para observar cambios en la clase del rootElement
    const observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(rootElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme),
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
