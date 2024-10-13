import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";

const UseFood = () => {
  const axiosPublic = UseAxios();
  const { data: food = [], refetch } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axiosPublic.get("/foods");
      return res.data;
    },
  });
  return [food, refetch];
};

export default UseFood;
