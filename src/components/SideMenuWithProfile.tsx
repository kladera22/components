// SideMenuWithProfile.tsx
import React from "react";
import noAvatar from "../assets/noAvatar.png";
import { Briefcase } from "iconsax-react";
import Avatar from "./Avatar";
import { useMediaQuery } from "react-responsive";

export interface MenuItem {
    id: string;
    icon: React.ReactNode;
    label: string;
}

interface UserProfile {
    name: string;
    role: string;
    department: string;
    avatar?: string;
}

interface SideMenuWithProfileProps {
    user: UserProfile;
    menuItems: MenuItem[];
    selected: string;
    setSelected: (selected: string) => void;
    children?: React.ReactNode;
    backgroundColor?: string;
    showEdit?: boolean;
    src?: string;
    onProfileUpdate?: (file: { name: string; url: string; mimeType?: string; isLocal?: boolean } | null) => void;
}

const SideMenuWithProfile: React.FC<SideMenuWithProfileProps> = ({
    user,
    menuItems,
    selected,
    setSelected,
    children,
    backgroundColor,
    showEdit,
    src,
    onProfileUpdate,
}) => {
    const isLargeScreen = useMediaQuery({ minWidth: 768 }); // 768px is Tailwind's 'md'

    return (
        <div className="rounded-2xl flex flex-row h-full w-full">
            <div className="bg-szPrimary900 flex flex-col py-4 transition-all duration-300 w-54 rounded-l-2xl">
                <div className="flex flex-col items-center px-4 py-4 gap-2 ">
                    <Avatar
                        size={isLargeScreen ? "large" : "medium"}
                        src={src || noAvatar}
                        showEdit={showEdit}
                        onProfileUpdate={onProfileUpdate}
                    />
                    <div className="hidden md:flex flex-col items-center px-4 py-4 gap-2">
                        <p className="text-body-base-strong text-szWhite100 font-montserrat text-center uppercase hidden md:block">
                            {user.name}
                        </p>
                        <hr className="border-szGrey300 w-2/3 hidden md:block" />
                        <div className="flex flex-col items-center hidden md:flex">
                            <p className="flex flex-row items-center gap-1 text-body-small-strong font-dmSans text-szSecondary200 text-center">
                                <Briefcase size="16" />
                                {user.role}
                            </p>
                            <p className="text-caption-all-caps text-szGrey300 text-center uppercase leading-normal">{user.department}</p>
                        </div>
                    </div>
                </div>
                {/* Menu Items */}

                <div className="flex flex-col">
                    {menuItems.map((item) => {
                        const isSelected = selected === item.id;

                        return (
                            <div
                                key={item.id}
                                onClick={() => setSelected(item.id)}
                                title={item.label}
                                className={`flex flex-row items-center gap-3 py-3 px-6 cursor-pointer ${
                                    isSelected ? "bg-szPrimary500 text-szWhite100" : "text-szWhite100"
                                }`}
                            >
                                {item.icon}
                                <p
                                    className={`text-body-small-strong ${
                                        isSelected ? "text-szWhite100" : "text-szWhite100"
                                    } hidden md:block`}
                                >
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Main Content */}
            <div className={`p-4 w-full rounded-r-2xl shadow-lg ${backgroundColor || "bg-[#F2F3F7]"}`}>{children}</div>
        </div>
    );
};

export default SideMenuWithProfile;
