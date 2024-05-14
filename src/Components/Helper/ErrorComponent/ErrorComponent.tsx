const ErrorComponent = ({message}: {message: string}) => {
  return (
    <p style={{fontSize: "1.2rem", textAlign: "center"}}>{ message }</p>
  )
}

export default ErrorComponent;