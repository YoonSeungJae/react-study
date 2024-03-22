// // import {Component} from 'react'
// // import ClassComponent from './ClassComponent'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <ul>
// //         <ClassComponent href="https://www.google.com" text="go to Google" />
// //         <ClassComponent href="https://www.X.com" text="go to X" />
// //       </ul>
// //     )
// //   }
// // }

// // // import {Component, ReactNode} from 'react'

// // // export default class App extends Component {
// // //   render() {
// // //     const isLoading = true
// // //     const children = (
// // //       <li>
// // //         <a href="https://google.com">
// // //           <p>go to Google</p>
// // //         </a>
// // //       </li>
// // //     )
// // //     return (
// // //       <div>
// // //         {isLoading && <p>loading...</p>}
// // //         {!isLoading && <ul>{children}</ul>}
// // //       </div>
// // //     )
// // //   }
// // // }

// // export default function App() {
// //   return <div>Hello function-keyword component!</div>
// // }

// const App = () => {
//   return <h1>function component</h1>
// }
// export default App

import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

export default function App() {
  return (
    <ul>
      <ClassComponent href="https://www.google.com" text="go to Google" />
      <ArrowComponent href="https://www.x.com" text="go to X" />
    </ul>
  )
}
