import { useEffect, useState } from 'react'

import Collaborators from '@/types/collaborators'

import { axiosInstance } from '@/configs/axios-base-config'

export default function useCollab(){
  const [data, setData] = useState<Collaborators[] | null>(null)

  useEffect(() => {
    axiosInstance({
      method: 'GET',
    }).then((res) => {
      setData(res.data)
    })
  })

  return { data }
}