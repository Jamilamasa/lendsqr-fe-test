// Import icons
import users from "../../assets/icons/dashboard/iconusers.svg";
import activeUsers from "../../assets/icons/dashboard/iconactiveusers.svg";
import usersWithLoan from "../../assets/icons/dashboard/iconusers_loan.svg";
import usersWithSaving from "../../assets/icons/dashboard/iconuser_savings.svg";

// Type for card information
type CardInfo = {
  id: number;
  icon: string;
  title: string;
  value: string;
};

// Card information
export const cardInfo: CardInfo[] = [
  {
    id: 1,
    icon: users,
    title: "Users",
    value: "2,453",
  },
  { id: 2, icon: activeUsers, title: "Active users", value: "2,452" },
  { id: 3, icon: usersWithLoan, title: "Users with loans", value: "12,453" },
  {
    id: 4,
    icon: usersWithSaving,
    title: "Users with savings",
    value: "102,453",
  },
];
