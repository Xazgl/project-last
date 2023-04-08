import axios, { AxiosError } from "axios";
import { Router, useRouter } from "next/router";
import { useQuery } from "react-query";


const host = process.env.HOST || 'http://localhost:3000'

// axios instance
// export const apiClient = axios.create({
//     baseURL: host + "/api",
//     withCredentials: true,
//     headers: {
//         "Content-type": "application/json"
//     },
// });

export const apiClient = (req?: any) => axios.create({
    baseURL: host + "/api",
    withCredentials: true,
    headers: {
        "Content-type": "application/json"
    },
    ...(req ? { headers: { cookie: `sid=${req.headers.cookie}` } } : {}),
});


export type Admin = {
    id: string
    login: string
}
export type RedirectError = {
    redirectUrl: string
}



export const getSession = async (req?: any) => {
    try {
      const response = await apiClient(req).get<Admin>('getSession')
      return response.data
    } catch (error) {
      if (error.response && error.response.data && error.response.data.redirectUrl) {
        throw new Error(error.response.data.redirectUrl)
      } else {
        throw new Error("Ошибка сервера")
      }
    }
  }

// export const getSession = async () => {
//     const response = await apiClient.get<Admin>('getSession')
//     return response.data
// }



// export const useSession = () => {
//     const router = useRouter()
//     const { isLoading, error, data, isSuccess } = useQuery<Admin, AxiosError<RedirectError>>('sid', getSession)
//     if (error) router.push(error.response.data.redirectUrl)
//     return { isLoading, error, data, isSuccess }
// }



export const useSession = () => {
    const router = useRouter()
    try {
      const { isLoading, error, data, isSuccess } = useQuery<Admin, AxiosError<RedirectError>>('sid', getSession)
      if (error && error.response && error.response.data && error.response.data.redirectUrl) {
        router.push(error.response.data.redirectUrl)
      }
      return { isLoading, error, data, isSuccess }
    } catch (e) {
      router.push(host + '/admin/login') // редирект на страницу логина в случае ошибки
      return { isLoading: true, error: null, data: null, isSuccess: false }
    }
  }