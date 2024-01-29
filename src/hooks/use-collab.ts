import useSWR from 'swr'

import { axiosInstance } from '@/configs/axios-base-config'

const fetcher = (url: string) => axiosInstance({
  method: 'GET',
  url: url,
}).then((res) => res.data)

export default function useCollab(){
  const {data, isLoading, error} = useSWR('https://dummyjson.com/products/1', fetcher)

  return { data, isLoading, error}
}