import { useState } from "react";

import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const handleDarkMode = () => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }

  return (
    <div className={`font-inter ${ theme === "dark" && "dark" }`}>
      <Header handleDarkMode={handleDarkMode} theme={theme} />
    </div>
  );
}

export default App;
