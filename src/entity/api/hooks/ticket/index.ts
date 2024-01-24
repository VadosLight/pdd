import { useQuery } from "react-query"
import { getAllTickets, getTicket } from "shared/api/tickets"

export const useGetTicket = (name: string) => {
    return useQuery({
        queryFn: () => getTicket(name),
        queryKey: ['ticket', name],
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })
}

export const useGetAllTickets = () => {
    return useQuery({
        queryFn: getAllTickets,
        queryKey: 'all-tickets'
    })
}