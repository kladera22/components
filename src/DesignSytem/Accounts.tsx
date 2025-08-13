import { HambergerMenu } from "iconsax-react";

interface AccountsProps {
    onToggleSidebar: () => void;
}

const Accounts: React.FC<AccountsProps> = ({ onToggleSidebar }) => {
    return (
        <div className="flex items-center gap-2 p-4">
            <div className="block md:hidden">
                <HambergerMenu onClick={onToggleSidebar} />
            </div>
            <span>Accounts</span>
        </div>
    );
};

export default Accounts;
