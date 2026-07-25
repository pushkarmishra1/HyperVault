import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Zap } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class WebGLErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error.message || 'WebGL Context Creation Error',
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGLErrorBoundary caught an issue:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, errorMessage: '' });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full h-full min-h-[400px] bg-slate-950 flex flex-col items-center justify-center p-8 text-center border border-white/10 rounded-2xl backdrop-blur-xl">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4 animate-pulse">
            <AlertTriangle className="w-8 h-8 text-blue-400" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase mb-2 font-bold block">
            GPU Graphics Mode • 2D Interactive Fallback
          </span>
          <h3 className="text-2xl font-black uppercase text-white font-sans tracking-tight mb-2">
            3D Studio Accelerated Fallback
          </h3>
          <p className="text-xs font-mono text-zinc-400 max-w-md mb-6 leading-relaxed">
            Your browser or device limited high-resolution WebGL contexts. The continuous cinematic film and showroom controls remain fully functional.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={this.handleRetry}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs tracking-wider uppercase font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retry 3D Studio</span>
            </button>
            <a
              href="/collection"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs tracking-wider uppercase font-black flex items-center gap-2 transition-all shadow-lg cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Browse Real Photo Collection</span>
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
