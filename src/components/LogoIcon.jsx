const logo = new URL('storm-logo.png', import.meta.url)

export function LogoIcon(props) {
  return <img src={logo} alt="logo" {...props} />
}
