import { ArrowRight } from "iconsax-react";
import React from "react";

interface ConfirmationContentProps {
  title?: string;
  sectionLabel?: string;
  variant: "add" | "edit" | "delete";
  data?: {
    label: string;
    value: string;
    oldValue?: string;
    newValue?: string;
  }[];
}

const ConfirmationContent: React.FC<ConfirmationContentProps> = ({
  title,
  sectionLabel,
  variant,
  data,
}) => {
  return (
    <div className="flex flex-col">
      <p
        className={`text-caption-all-caps uppercase ${
          variant === "add"
            ? "text-greenText"
            : variant === "delete"
            ? "text-error900"
            : "text-szPrimary500"
        }`}
      >
        {title}
      </p>
      <div
        className={`relative rounded-lg ${
          variant === "add"
            ? "bg-success50"
            : variant === "delete"
            ? "bg-error50"
            : "bg-info100"
        } ${sectionLabel ? "top-[8px]" : ""}`}
      >
        {/* Section Label ------------------------------------- */}
        {sectionLabel && (
          <div
            className={`absolute -top-2 left-5 px-[8px] rounded-none items-center flex h-[17px] ${
              variant === "add"
                ? "bg-success700"
                : variant === "delete"
                ? "bg-error700"
                : "bg-szPrimary500"
            } `}
          >
            <p className="text-caption-all-caps uppercase text-white">
              {sectionLabel}
            </p>
          </div>
        )}
        <div
          className={`grid px-[8px] pb-[8px] ${
            sectionLabel ? "pt-[12px]" : "pt-[8px]"
          }`}
        >
          {variant === "edit"
            ? data?.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between gap-[20px] min-h-[32px]"
                >
                  <div className="w-[50%]">
                    <p className="text-caption-all-caps uppercase text-szGrey500">
                      {item.label}
                    </p>
                    <p className="text-body-small-strong">{item.oldValue}</p>
                  </div>
                  <ArrowRight className="icon-sm h-full" />
                  <div className="w-[50%]">
                    <p className="text-caption-all-caps uppercase text-szGrey500">
                      {item.label}
                    </p>
                    <p className="text-body-small-strong">{item.newValue}</p>
                  </div>
                </div>
              ))
            : data?.map((item) => (
                <div
                  key={item.label}
                  className={`flex flex-row gap-[8px] justify-between items-center min-h-[32px]`}
                >
                  <p className="text-caption-all-caps uppercase text-szGrey500">
                    {item.label}
                  </p>
                  <p className="text-body-small-strong">{item.value}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationContent;
