// import React from 'react'
// import ReactDOM from 'react-dom/client'

// const CE = React.createElement

// const rootVirtualDOM = CE('ul', null, [
//   CE('li', null, [
//     CE('a', {href: 'https://google.com', target: '_blank'}, [
//       CE('p', null, 'go to google')
//     ])
//   ])
// ])

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDOM)

// import ReactDOM from 'react-dom/client'

// const rootVirtualDOM = (
//   <ul>
//     <li>
//       <a href="https://www.google.com" target="_blank">
//         <p>go to Google</p>
//       </a>
//     </li>
//   </ul>
// )

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDOM)

// import ReactDOM from 'react-dom/client'

// const children = [
//   <li>
//     <a href="https://www.google.com" target="_blank">
//       <p>go to Google</p>
//     </a>
//   </li>,
//   <li>
//     <a href="https://www.facebook.com" target="_blank">
//       <p>go to Facebook</p>
//     </a>
//   </li>,
//   <li>
//     <a href="https://www.x.com" target="_blank">
//       <p>go to X</p>
//     </a>
//   </li>
// ]
// const rootVirtualDOM = <ul>{children}</ul>

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDOM)

// import ReactDOM from 'react-dom/client'

// const children = [0, 1, 2].map((n: number) => <h3> Hello World! {n}</h3>)
// const rootVirtualDOM = <div>{children}</div>

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDOM)

import ReactDOM from 'react-dom/client'
import * as D from './data'

const children = D.makeArray(1).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))

const rootVirtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)
