// import { useState } from "react";
import { Notification, HambergerMenu } from "iconsax-react";
import profile from "../assets/profile.png";
import Avatar from "./Avatar";

interface HeaderProps {
    src?: string;
    text: string;
    onClick?: () => void;
    iconClick?: () => void;
    notifClick?: () => void;
    logoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ src, text, onClick, iconClick, notifClick, logoClick }) => {
    return (
        <div className="w-full flex flex-row items-center justify-between rounded-b-xl  shadow-lg px-6 bg-szWhite100">
            <div className="flex flex-row items-center gap-2">
                <HambergerMenu className="cursor-pointer" onClick={onClick} />
                <img src={src} />
                <div className="cursor-pointer text-h3 font-montserrat text-szPrimary500" onClick={logoClick}>
                    {text}
                </div>
            </div>
            <div className="flex flex- gap-5 items-center py-2">
                <Notification variant="Bulk" className="text-szSecondary500 w-6 h-6 cursor-pointer" onClick={notifClick} />

                <button onClick={iconClick}>
                    <Avatar size="small" src={profile} />
                </button>
            </div>
        </div>
    );
};

export default Header;
