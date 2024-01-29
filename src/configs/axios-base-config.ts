import axios from 'axios'

export const baseURL = ''

export const axiosInstance = axios.create({
  baseURL: baseURL
})