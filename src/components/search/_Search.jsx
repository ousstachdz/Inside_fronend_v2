import React, { useEffect, useState } from 'react'
import { useAxiosPrivate } from '../../api/useAxiosPrivate'
import PageLayout from '../_commun/_PageLayout'
import SearchBox from './SearchBox'
import SearchResultDisplay from './SearchResultDisplay'

export default function Search() {
  const axiosPrivate = useAxiosPrivate()

  const [result, setResult] = useState(null)
  const [kw, setKW] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    const data = { kw: kw }
    search(data, pageNumber)
    if (kw == '') {
      setResult(null)
    }
  }, [kw, pageNumber])

  const search = (data, pageNumber) => {
    if (data.kw != '') {
      axiosPrivate
        .post(`/api/user/search/?page=${pageNumber}`, data)
        .then((response) => {
          setResult(response.data)
          console.log(response)
        })
    }
  }
  const page = (
    <div className='pt-16 bottom-16 overflow-hidden '>
      <SearchBox setKW={setKW} />
      <SearchResultDisplay result={result} />
    </div>
  )
  return <PageLayout page={page} />
}
