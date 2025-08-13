import React, { useState } from "react";
import ButtonsIcon from "./ButtonsIcon";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react"; // optional default

export interface MenuItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface SideMenuProps {
  menuItems: MenuItem[];
  selected: string;
  setSelected: (selected: string) => void;
  children?: React.ReactNode;
}

const SideMenu: React.FC<SideMenuProps> = ({
  menuItems,
  selected,
  setSelected,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-row h-full w-full">
      <div className="rounded-l-2xl flex flex-col">
        <div
          className={`flex ${isExpanded ? "justify-end" : "justify-center"}`}
        >
          <ButtonsIcon
            size="medium"
            variant="ghost"
            icon={
              <>
                {isExpanded ? (
                  <ArrowLeft2 className="icon-md" />
                ) : (
                  <ArrowRight2 className="icon-md" />
                )}
              </>
            }
            onClick={() => setIsExpanded((prev) => !prev)}
          />
        </div>
        <div className="flex flex-col bg">
          {menuItems.map((item) => {
            const isSelected = selected === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelected(item.id)}
                title={item.label}
                className={`flex flex-row items-center gap-3 py-3 px-3 cursor-pointer rounded-lg transition-all
                                    
                                    ${
                                      isSelected
                                        ? "bg-szPrimary900 text-szWhite100"
                                        : "hover:bg-szPrimary100"
                                    }
                                `}
              >
                {item.icon}
                {isExpanded && (
                  <p
                    className={`text-body-small-strong hidden md:block ${
                      isSelected ? "text-szWhite100" : "text-szBlack800"
                    }`}
                  >
                    {item.label}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default SideMenu;
