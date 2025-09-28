import React from 'react';

/**
 * Composant Error Boundary pour capturer les erreurs React
 * et éviter qu'elles cassent l'application
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Met à jour l'état pour afficher l'UI de fallback
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log l'erreur pour le débogage
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // Vous pouvez aussi envoyer l'erreur à un service de reporting d'erreurs
        // logErrorToService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // UI de fallback personnalisée
            return (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        
                        <h2 className="text-lg font-semibold text-gray-900 text-center mb-2">
                            Oups ! Une erreur s'est produite
                        </h2>
                        
                        <p className="text-sm text-gray-600 text-center mb-4">
                            Nous nous excusons pour ce désagrément. L'équipe technique a été notifiée.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => window.location.reload()}
                                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                            >
                                Recharger la page
                            </button>
                            
                            <button
                                onClick={() => window.history.back()}
                                className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
                            >
                                Retour
                            </button>
                        </div>
                        
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mt-4 p-3 bg-gray-100 rounded text-xs">
                                <summary className="cursor-pointer font-medium text-gray-700 mb-2">
                                    Détails de l'erreur (développement)
                                </summary>
                                <pre className="whitespace-pre-wrap text-gray-600">
                                    {this.state.error && this.state.error.toString()}
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
