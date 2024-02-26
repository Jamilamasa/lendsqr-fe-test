import { useState } from "react";
import { getAllUsers } from "../services/users.services";
import { toast } from "react-hot-toast";

interface IUsers {
  _id: string;
  organization: string;
  userName: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Inactive" | "Pending" | "Blacklisted" | "active";
}

// Get users hook.
export const useGetUsers = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<IUsers[]>([]);
  const [error, setError] = useState<Error | any>(null);

  const getUserData = async () => {
    setLoading(true);
    try {
      const res = await getAllUsers();
      if (res) {
        setUsers(res);
        setLoading(false);
      }
    } catch (err: any) {
      if (err) {
        setError(err);
        setLoading(false);
        toast.error(err.message);
      }
    }
  };

  return { getUserData, loading, users, error };
};
