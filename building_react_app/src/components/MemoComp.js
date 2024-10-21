import React from 'react'

function MemoComp(name) {
    console.log('Rendering Memo Component')
  return (
    <div>MemoComp</div>
  )
}

export default React.memo(MemoComp) 