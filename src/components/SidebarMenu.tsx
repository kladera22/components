import { HambergerMenu } from "iconsax-react";

export interface SidebarMenuItem {
    id: string;
    label: string;
}

interface SidebarMenuProps {
    sidebarMenuItems: SidebarMenuItem[];
    selected: string;
    setSelected: (selected: string) => void;
    onToggleSidebar: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ sidebarMenuItems, selected, setSelected, onToggleSidebar }) => {
    return (
        <div className="h-full bg-szPrimary900 flex flex-col py-4 transition-all duration-300 w-[200px] rounded-l-2xl">
            <div className="flex flex-row items-center gap-3 py-3 px-6">
                <HambergerMenu className="text-szPrimary500 cursor-pointer block md:hidden" onClick={onToggleSidebar} />
                <h6 className="text-h6 font-montserrat text-szSecondary200">Settings</h6>
            </div>
            <div className="flex flex-col">
                {sidebarMenuItems.map((item) => {
                    const isSelected = selected === item.id;

                    return (
                        <div
                            key={item.id}
                            onClick={() => {
                                setSelected(item.id);
                                // setIsSidebarOpen(false);
                            }}
                            title={item.label}
                            className={`flex flex-row items-center gap-3 py-3 px-6 cursor-pointer ${
                                isSelected ? "bg-szPrimary500 text-szWhite100" : "text-szWhite100"
                            }`}
                        >
                            <p
                                className={`text-body-small-strong transition-all duration-200  md:block ${
                                    isSelected ? "text-szWhite100" : "text-szWhite100"
                                }`}
                            >
                                {item.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SidebarMenu;
