import axios from 'axios'

export const baseURL = 'https://n8n.empresavida.com.br/webhook/v1/auth/portal'

export const axiosInstance = axios.create({
  baseURL: baseURL
})