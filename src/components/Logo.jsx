const logo = new URL('storm-full-logo.png', import.meta.url)

export function Logo(props) {
  return <img src={logo} alt="logo" {...props} />
}
