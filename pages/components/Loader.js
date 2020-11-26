import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = props => {
  const rows = 2
  const columns = 6
  const coverHeight = 275
  const coverWidth = 210
  const padding = 10
  const speed = 1

  const coverHeightWithPadding = coverHeight + padding
  const coverWidthWithPadding = coverWidth + padding
  const initial = 6
  const covers = Array(columns * rows).fill(1)

  return (
    <ContentLoader
    style={{marginLeft:'05px'}}
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
      primaryColor="#242b34"
      secondaryColor="#343d4c"
      {...props}
    >

      {covers.map((g, i) => {
        let vy = Math.floor(i / columns) * coverHeightWithPadding + initial
        let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
        return (
          <rect
            key={i}
            x={vx}
            y={vy}
            rx="0"
            ry="0"
            width={coverWidth}
            height={coverHeight}
          />
        )
      })}
    </ContentLoader>
  )
}


export default Loader