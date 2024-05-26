import './index.css'

const Tab = props => {
  const {item, updateApps, isActive} = props
  const {displayText, tabId} = item

  const changeApps = () => {
    updateApps(tabId)
  }
  const color = isActive ? 'activeColor' : ''
  return (
    <li className="listButton">
      <button className={`button${color}`} type="button" onClick={changeApps}>
        {displayText}
      </button>
    </li>
  )
}
export default Tab
