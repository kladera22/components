import React from "react";
import TextContent from "./TextContent";
// import watermark2 from "../assets/watermark2.svg";

export type HeaderType = {
    header: string;
    accessor: string;
};

interface UserProfile {
    name: string;
    role: string;
    department: string;
}

interface PayslipProps {
    backgroundColor?: string;
    backgroundImage?: string;
    user: UserProfile;
    dateRange: string;
    atm: boolean;
    title?: string[];
    headers?: HeaderType[];
    dataGroups: Record<string, React.ReactNode>[][];
    totalbackgroundColors: string[];
    bottomTitle?: string[];
    textcolor?: string;
}

const Payslip: React.FC<PayslipProps> = ({
    backgroundColor,
    backgroundImage,
    user,
    dateRange,
    atm,
    headers,
    dataGroups,
    totalbackgroundColors,
    title,
    bottomTitle,
    textcolor,
}) => {
    return (
        <div
            className={`flex flex-col w-full gap-6 p-4 bg-cover bg-center bg-no-repeat ${backgroundColor ?? ""}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-col gap-2">
                <p className="text-caption-all-caps uppercase text-szGrey600 mb-2">PAY STATEMENT - EMPLOYEE'S COPY</p>
                <TextContent header="Name" sidetext={user.name} />
                <TextContent header="Position" sidetext={user.role} />
                <TextContent header="Period Covered" sidetext={dateRange} />
                <TextContent header="ATM" sidetext={atm ? "ATM" : "Cash"} />
            </div>

            {dataGroups.map((data, groupIndex) => {
                const totalAmount = data.reduce((sum, item) => {
                    const rawAmount = item.amount?.toString().replace(/[₱,]/g, "") || "0";
                    return sum + parseFloat(rawAmount);
                }, 0);

                const groupTotalColor = totalbackgroundColors?.[groupIndex] ?? "";
                const groupTitle = title?.[groupIndex] ?? "";
                const groupBottomTitle = bottomTitle?.[groupIndex] ?? "";
                return (
                    <div key={groupIndex} className="overflow-x-auto">
                        <p className="text-caption-all-caps uppercase text-szGrey600 mb-2">{groupTitle}</p>

                        <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg bg-transparent">
                            {headers && headers.length > 0 && (
                                <thead className="text-szGrey800">
                                    <tr className="border-t border-gray-200">
                                        {headers.map((header, index) => (
                                            <th
                                                key={index}
                                                className={`px-4 py-2 ${index < headers.length - 1 ? "border-r border-gray-200" : ""}`}
                                            >
                                                {header.header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                            )}
                            <tbody className="text-szGrey800">
                                {data.map((row, rowIndex) => (
                                    <tr key={rowIndex} className="border-t border-gray-200">
                                        {(headers ?? Object.keys(row).map((key) => ({ accessor: key }))).map((header, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className={`px-4 py-2 ${
                                                    colIndex < Object.keys(row).length - 1
                                                        ? "border-r border-gray-200 text-caption-all-caps uppercase text-szGrey600 mb-2"
                                                        : ""
                                                } ${colIndex === Object.keys(row).length - 1 ? "text-body-small-reg" : ""}`}
                                            >
                                                {row[header.accessor]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}

                                {/* Total Row */}
                                <tr className={`border-t border-gray-300 font-semibold ${groupTotalColor}`}>
                                    <td
                                        className={`px-4 py-2 border-r border-gray-200 text-caption-all-caps uppercase ${
                                            textcolor ?? "text-szWhite100"
                                        }
                                    `}
                                    >
                                        {groupBottomTitle}
                                    </td>
                                    <td className={`px-4 py-2 text-body-small-strong ${textcolor ?? "text-szWhite100"} `}>
                                        ₱{totalAmount.toLocaleString()}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    );
};

export default Payslip;
