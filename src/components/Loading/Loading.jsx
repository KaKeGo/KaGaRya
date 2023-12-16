import React, { useEffect } from 'react'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'
import './Loading.css'


const Loading = () => {
    useEffect(() => {
        NProgress.start()
        NProgress.done()

        return () => {
            NProgress.remove()
        }
    }, [])

    return (
    <div className='container'>
        <div></div>
    </div>
    )
}

export default Loading