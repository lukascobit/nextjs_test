import React from 'react'
import { useState } from 'react'
import Meta from '../components/Meta'

function game() {
    const [num, setNum] = useState(0)
    return (
        <>
            <Meta title="Clicking game"></Meta>
            <h1>Clicking game</h1>

            <button className='bigButton' onClick={() => setNum(num + 1)}>{num}</button>
        </>

    )
}

export default game