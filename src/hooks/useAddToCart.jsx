import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAddToCart = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data : carts = [], refetch } = useQuery({
        queryKey : ['carts', user?.email],
        queryFn : async() => {
            const res = await axiosPublic.get(`/addToCart/${user?.email}`)

            return res.data
        }
    })

    return [carts, refetch];

};

export default useAddToCart;