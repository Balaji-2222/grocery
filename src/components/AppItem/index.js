import './index.css'

const App = props => {
  const {item} = props
  const {appName, imageUrl} = item
  return (
    <li className="appItem">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="appHeading">{appName}</p>
    </li>
  )
}

export default App
