import * as D from './data'

export default function APP() {
  console.log('App called.')
  return (
    <div>
      <h1>Hello World!</h1>

      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthyear()}
      </p>
      <img src={D.randomAvatar()} height="50" />
      <img src={D.randomImage()} height="300" />
    </div>
  )
}
