import { ReactComponent as FacebookLogo } from "../assets/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../assets/icon-twitter.svg";
import { ReactComponent as InstagramLogo } from "../assets/icon-instagram.svg";
import { ReactComponent as YoutubeLogo } from "../assets/icon-youtube.svg";

import CardTotal from "./CardTotal";

const Header = ({ handleDarkMode, theme }) => {
    return (
        <>
            <div className="bg-gray-100 transition-all duration-200 dark:bg-black-400 flex flex-col md:flex-row md:justify-between md:items-center pr-right-mobile pl-left-mobile md:pr-right md:pl-left pt-9 pb-[154px] rounded-b-[20px]">
                <div>
                    <h1 className="font-bold text-[28px] text-black-200 dark:text-white">Social Media Dashboard</h1>
                    <p className="text-black-100 font-bold text-sm dark:text-gray-600">Total Followers: 23,004</p>
                </div>
                <hr className="border-gray-500 dark:border-black-300 mt-6 mb-4" />
                <div className="flex gap-[13px] justify-between md:items-center">
                    <p className="text-gray-500 text-sm font-bold dark:text-gray-600 dark:md:text-white">Dark Mode</p>
                    <div 
                        onClick={handleDarkMode} 
                        className="relative h-[24px] w-12 rounded-full bg-gray-400 cursor-pointer hover:bg-gradient-to-tr hover:from-blue-100 hover:to-green-100 dark:bg-gradient-to-tr dark:from-blue-100 dark:to-green-100"
                    >
                        <div className={`absolute h-[18px] w-[18px] transition-all duration-200 bg-gray-200 dark:bg-black-300 rounded-full top-[2.6px] ${ theme === "dark" ? "left-[3px]" : "left-[27px]"}`}></div>
                    </div>
                </div>
            </div>
            <div className="pl-left-mobile pr-right-mobile md:pl-left md:pr-right grid md:grid-cols-2 lg:grid-cols-4 mt-[-120px] gap-[30px]">
                <CardTotal 
                    icon={() => <FacebookLogo />}
                    profileName="@nathanf"
                    total="1987"
                    colorClass="bg-blue-fb"
                    subtitle="FOLLOWERS"
                    isGrowing={true}
                    growth="12"
                />
                <CardTotal 
                    icon={() => <TwitterLogo />}
                    profileName="@nathanf"
                    total="1044"
                    colorClass="bg-blue-twitter"
                    subtitle="FOLLOWERS"
                    isGrowing={true}
                    growth="99"
                />
                <CardTotal 
                    icon={() => <InstagramLogo />}
                    profileName="@realnathanf"
                    total="11k"
                    colorClass="bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300"
                    subtitle="FOLLOWERS"
                    isGrowing={true}
                    growth="1099"
                />
                <CardTotal 
                    icon={() => <YoutubeLogo />}
                    profileName="Nathan F."
                    total="8239"
                    colorClass="bg-red-yt"
                    subtitle="SUBSCRIBERS"
                    isGrowing={false}
                    growth="144"
                />
            </div>
        </>
    );
}

export default Header;