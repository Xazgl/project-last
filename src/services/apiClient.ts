import axios, {AxiosError} from "axios";
import { Router, useRouter } from "next/router";
import { useQuery } from "react-query";
const host = process.env.HOST || 'http://localhost:3000'
// axios instance
export const apiClient = axios.create({
    baseURL: host + "/api",
    withCredentials: true,
    headers: {
        "Content-type": "application/json"
    },
});

export type Admin = {
    id: string
    login: string
}
export type RedirectError = {
    redirectUrl: string
}

export const getSession = async () => {
    const response = await apiClient.get<Admin>('getSession')
    return response.data
}

export const useSession = () => {
    const router = useRouter()
    const { isLoading, error, data, isSuccess } = useQuery<Admin, AxiosError<RedirectError>>('sid', getSession)
    if (error) router.push(error.response.data.redirectUrl)
    return { isLoading, error, data, isSuccess }
}