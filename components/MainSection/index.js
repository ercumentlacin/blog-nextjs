import React from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

function MainSection({ items }) {
  console.log(items)

  return (
    <div className="col-lg-6">
      <div className="d-flex flex-column">
        {items.map(({ thumbnail, title }) => {
          console.log(thumbnail)
          return (
            <Image
              key={uuidv4()}
              src={thumbnail}
              alt={title}
              width={474}
              height={262}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MainSection
