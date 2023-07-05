import { useQuery } from "react-query"
import { fetcher } from "../config"

export const getData = async() => {
    return await fetcher({
        method : "Get",
        url : '',
    })
}

export const useGetData= () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey : ["all-stores"],
        queryFn : () => getData(),
        retry : false,
        enabled : true,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        keepPreviousData : true,
        onError(err){
            console.log(err)
        }
    })
    return {
        data,
        isLoading,
        refetch
    }
}