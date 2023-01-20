import { Component } from "react/cjs/react.production.min";
import ErrorMessage from "../errorMessage/ErrorMessage";


class ErrorBoundary extends Component {

    state = {
        error: false
    } 

    componentDidCatch(err , info) {
        console.log(err , info);
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error === true) {
            return <ErrorMessage/>
        }

        return this.props.children;

    }

}

export default ErrorBoundary;