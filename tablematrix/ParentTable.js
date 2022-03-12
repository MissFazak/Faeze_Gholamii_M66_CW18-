import React from 'react'

import TableMatrix from './TableMatrix'

export default function ParentTable() {
    const matrix=[
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ]

  return (
    <div>
        <table>
          <TableMatrix matrix={matrix}/>
        </table>
    </div>
  )
}
