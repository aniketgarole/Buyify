import React, { useEffect, useState } from 'react'
import styles from "./paginate.module.css"
import { useSearchParams } from 'react-router-dom'

const Paginate = () => {
        const [searchParams, setSearchParams] = useSearchParams()
        let initpage = +searchParams.get("page")
        
        const [page, setPage] = useState(initpage || 1)
        const order = searchParams.get("order")
        const category = searchParams.getAll("category")
        const sort = searchParams.get("sort")


        const handleClick = (val) => {
            setPage(prev => prev+val)
        }

        useEffect(()=> {

            let params = {page,limit:20}

            category.length !== 0 && (params.category = category)
            order &&  (params.order = order) && (params.sort = sort)

            setSearchParams(params)
        },[page])

        // console.log("page in paginate",page)


  return (
    <div className={styles.paginate}>
        <button onClick={()=> handleClick(-1)} disabled={page == 1}>Prev</button>
        <button>{page}</button>
        <button onClick={()=> handleClick(1)}>Next</button>
        
    </div>
  )
}

export default Paginate