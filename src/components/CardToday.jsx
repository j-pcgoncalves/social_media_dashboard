import { ReactComponent as UpIcon } from "../assets/icon-up.svg";
import { ReactComponent as DownIcon } from "../assets/icon-down.svg";

const CardToday = ({ title, icon, total, isGrowing, percentage }) => {
    return (
        <div className="bg-gray-200 dark:bg-black-500 hover:bg-gray-300 dark:hover:bg-black-300 transition-all duration-200 cursor-pointer rounded-[5px] px-6 pt-[26px] pb-[19px]">
            <div className="flex items-center justify-between mb-[23px]">
                <p className="font-bold text-sm text-black-100 dark:text-gray-600">{title}</p>
                {icon()}
            </div>

            <div className="flex items-center justify-between">
                <p className="font-bold text-[32px] text-black-200 dark:text-white">{total}</p>
                <div className="flex items-center gap-[2px]">
                    {isGrowing ? <UpIcon /> : <DownIcon />}
                    <p className={`font-bold text-xs ${isGrowing ? "text-green-200" : "text-red-100"}`}>{percentage}%</p>
                </div>
            </div>
        </div>
    );
}

export default CardToday;