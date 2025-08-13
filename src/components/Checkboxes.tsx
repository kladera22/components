import React from "react";
import check from "../assets/check.png";
import mix from "../assets/mix.png";

interface CheckboxesProps {
    label?: string;
    checked?: boolean;
    mixed?: boolean;
    onChange: () => void;
    disabled?: boolean;
}

const Checkboxes: React.FC<CheckboxesProps> = ({ label, checked, mixed, onChange, disabled = false }) => {
    return (
        <div className="flex items-center gap-2 pb-1">
            <div className="relative flex items-center">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className={`appearance-none h-4 w-4 border-2 rounded hover:border-szPrimary700 focus:ring-szPrimary900 border-szPrimary200
          disabled:bg-szLightGrey400 disabled:border-szLightGrey400 disabled:hover:border-szLightGrey400 disabled:opacity-50 disabled:cursor-not-allowed  
          ${checked || mixed ? "bg-szPrimary500 border-szPrimary500" : "bg-white"}
          `}
                />
                {(checked || mixed || disabled) && (
                    <span
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <img src={mixed ? mix : check} alt="checkboxmark" />
                    </span>
                )}
            </div>
            <label className="flex items-center text-caption-md text-szBlack800 font-dmSans">{label}</label>
        </div>
    );
};

export default Checkboxes;
