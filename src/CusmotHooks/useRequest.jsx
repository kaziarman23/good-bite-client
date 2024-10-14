import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";


const useRequest = () => {
  const axiosPublic = UseAxios();

  const { data: request = [], refetch } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/requests");
      return res.data;
    },
  });
  return [request, refetch];
};
export default useRequest;
