import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
        // You can render any custom fallback UI
            return (
                <div className="flex justify-center items-center h-screen w-full text-center text-3xl font-bold text-red-700">
                    <div>
                        App Crashed
                    </div>
                </div>
            );
        }

        return this.props.children; 
    }
}

export default ErrorBoundary