import { ReactComponent as UpIcon } from "../assets/icon-up.svg";
import { ReactComponent as DownIcon } from "../assets/icon-down.svg";

const CardTotal = ({ icon, profileName, total, colorClass, subtitle, isGrowing, growth }) => {
    return (
        <div className={`rounded-[5px] ${colorClass} pt-1`}>
            <div className="flex items-center justify-center flex-col transition-all duration-200 rounded-b-[5px] bg-gray-200 w-full h-full cursor-pointer hover:bg-gray-300 dark:bg-black-500 dark:hover:bg-black-300">
                <div className="flex gap-2 items-center mb-7 mt-8">
                    {icon()}
                    <p className="font-bold text-xs text-black-100 dark:text-gray-600">{profileName}</p>
                </div>

                <p className="font-bold text-[56px] text-black-200 dark:text-white">{total}</p>
                <p className="mt-[-9px] text-sm tracking-[5px] text-black-100 font-normal mb-[25px] dark:text-gray-600">{subtitle}</p>

                <div className="flex items-center gap-1 mb-6">
                    {isGrowing ? <UpIcon /> : <DownIcon />}
                    <p className={`font-bold text-xs ${isGrowing ? "text-green-200" : "text-red-100"}`}>{growth} Today</p>
                </div>
            </div>
        </div>
    );
}

export default CardTotal;