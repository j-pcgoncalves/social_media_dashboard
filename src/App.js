import { useState } from "react";

import { ReactComponent as FacebookIcon } from "./assets/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "./assets/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "./assets/icon-instagram.svg";
import { ReactComponent as YoutubeIcon } from "./assets/icon-youtube.svg";

import Header from "./components/Header";
import CardToday from "./components/CardToday";

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
    <div className={`dark:bg-black-200 font-inter pb-[75px] ${ theme === "dark" && "dark" }`}>
      <Header handleDarkMode={handleDarkMode} theme={theme} />

      <div className="pl-left-mobile pr-right-mobile md:pl-left md:pr-right mt-9">
        <p className="font-bold text-2xl text-black-100 mb-6 dark:text-white">Overview - Today</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-6">
          <CardToday
            title="Page Views"
            icon={() => <FacebookIcon />}
            total="87"
            isGrowing={true}
            percentage="3"
          />
          <CardToday
            title="Likes"
            icon={() => <FacebookIcon />}
            total="52"
            isGrowing={false}
            percentage="2"
          />
          <CardToday
            title="Likes"
            icon={() => <InstagramIcon />}
            total="5462"
            isGrowing={true}
            percentage="2257"
          />
          <CardToday
            title="Profile Views"
            icon={() => <InstagramIcon />}
            total="53k"
            isGrowing={true}
            percentage="1375"
          />
          <CardToday
            title="Retweets"
            icon={() => <TwitterIcon />}
            total="117"
            isGrowing={true}
            percentage="303"
          />
          <CardToday
            title="Likes"
            icon={() => <TwitterIcon />}
            total="507"
            isGrowing={true}
            percentage="553"
          />
          <CardToday
            title="Likes"
            icon={() => <YoutubeIcon />}
            total="107"
            isGrowing={false}
            percentage="19"
          />
          <CardToday
            title="Total Views"
            icon={() => <YoutubeIcon />}
            total="1407"
            isGrowing={false}
            percentage="12"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
