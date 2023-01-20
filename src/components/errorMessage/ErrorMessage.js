import err from './error.gif'

const ErrorMessage = () => {
    return (
        <div style={{display: 'flex' , width: '100%' , justifyContent: 'center' , alignItems: 'center'}}><img src={err} alt="упс..."></img></div>
    )
}

export default ErrorMessage;