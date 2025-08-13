import { ArrowRight } from "iconsax-react";

interface PendingRequestContentProps {
  title: string;
  variant: "add" | "edit";
  previous: { label: string; value: string; newValue: string }[];
  current: { label: string; value: string; newValue: string }[];
  onSelect: (
    type: "previous" | "current",
    data: { label: string; value: string; newValue: string }[]
  ) => void;
  selectedType?: "previous" | "current";
}

const PendingRequestContent = ({
  title,
  previous,
  current,
  onSelect,
  selectedType,
}: PendingRequestContentProps) => {
  return (
    <div
      className={`flex flex-col gap-[4px] rounded-lg border border-szGrey300 p-[8px]`}
    >
      <p className="text-caption-strong">{title}</p>
      <div
        onClick={() => onSelect("previous", previous)}
        className={`flex flex-col py-[4px] px-[8px] bg-szGrey150 border-2 rounded-lg ${
          selectedType === "previous"
            ? "border-szPrimary500 bg-szPrimary50"
            : "border-szGrey150 hover:border-szPrimary500"
        } cursor-pointer`}
      >
        <p className="text-caption-strong text-szPrimary700">Previous</p>
        {previous.map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-center gap-[20px] min-h-[32px]"
          >
            <div className="w-[50%]">
              <p className="text-caption-all-caps uppercase text-szGrey500 h-[18px]">
                {item.label}
              </p>
              <p className="text-body-small-reg">{item.value}</p>
            </div>
            <ArrowRight className="icon-sm h-full" />
            <div className="w-[50%]">
              <p className="text-caption-all-caps uppercase text-szGrey500 h-[18px]">
                {item.label}
              </p>
              <p className="text-body-small-reg">{item.newValue}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => onSelect("current", current)}
        className={`flex flex-col py-[4px] px-[8px] border-2 rounded-lg bg-success50 ${
          selectedType === "current"
            ? "border-success700"
            : "border-success50 hover:border-success700"
        } cursor-pointer`}
      >
        <p className="text-caption-strong text-greenText">Current Update</p>
        {current.map((item) => (
          <div
            key={item.label}
            className="flex justify-between gap-[20px] min-h-[32px]"
          >
            <div className="w-[50%]">
              <p className="text-caption-all-caps uppercase text-szGrey500 h-[18px]">
                {item.label}
              </p>
              <p className="text-body-small-reg">{item.value}</p>
            </div>
            <ArrowRight className="icon-sm h-full" />
            <div className="w-[50%]">
              <p className="text-caption-all-caps uppercase text-szGrey500 h-[18px]">
                {item.label}
              </p>
              <p className="text-body-small-reg">{item.newValue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingRequestContent;
