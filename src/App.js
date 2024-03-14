import { useState } from "react";

import Header from "./components/Header";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const handleDarkMode = () => {
    setIsDark(!isDark);
  }

  return (
    <div className={`font-inter ${ isDark && "dark" }`}>
      <Header handleDarkMode={handleDarkMode} isDark={isDark} />
    </div>
  );
}

export default App;
