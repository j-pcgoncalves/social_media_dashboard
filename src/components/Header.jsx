const Header = ({ handleDarkMode, isDark }) => {
    return (
        <div className="bg-gray-100 transition-all duration-200 dark:bg-black-400 flex justify-between items-center pr-right pl-left pt-9 pb-[154px] rounded-b-[20px]">
            <div>
                <h1 className="font-bold text-[28px] text-black-200 dark:text-white">Social Media Dashboard</h1>
                <p className="text-black-100 font-bold text-sm dark:text-gray-600">Total Followers: 23,004</p>
            </div>
            <div className="flex gap-[13px] items-center">
                <p className="text-gray-500 text-sm font-bold dark:text-white">Dark Mode</p>
                <div 
                    onClick={handleDarkMode} 
                    className="relative h-[24px] w-12 rounded-full bg-gray-400 cursor-pointer hover:bg-gradient-to-tr hover:from-blue-100 hover:to-green-100 dark:bg-gradient-to-tr dark:from-blue-100 dark:to-green-100"
                >
                    <div className={`absolute h-[18px] w-[18px] transition-all duration-200 bg-gray-200 dark:bg-black-300 rounded-full top-[2.6px] ${ isDark ? "left-[3px]" : "left-[27px]"}`}></div>
                </div>
            </div>
        </div>
    );
}

export default Header;