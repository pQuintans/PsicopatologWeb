import PurpleLogo from '../../assets/logo_purple.png'

import './styles.scss'

export function TitleBar() {
  return (
    <div className="title">
      <img src={PurpleLogo} alt="Logo" />
      <div className="text">
        <h1>Psicopatolog</h1>
        <h2>Um projeto PIBIC-EM</h2>
      </div>
    </div>
  )
}