import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './style.css';

// Lazy loading para todas as páginas
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const QuemSomosPage = lazy(() => import('./pages/QuemSomosPage.jsx'));
const ComoFazerPage = lazy(() => import('./pages/ComoFazerPage.jsx'));
const ResiduosPage = lazy(() => import('./pages/ResiduosPage.jsx'));
const PorqueSepararPage = lazy(() => import('./pages/PorqueSepararPage.jsx'));
const TotalColetadoPage = lazy(() => import('./pages/TotalColetadoPage.jsx'));
const ContatoPage = lazy(() => import('./pages/ContatoPage.jsx'));

// Mapeando os nomes de arquivo HTML para rotas amigáveis
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'quem-somos', element: <QuemSomosPage /> },
      { path: 'como-fazer-a-separacao', element: <ComoFazerPage /> },
      { path: 'quais-sao-os-residuos', element: <ResiduosPage /> },
      { path: 'porque-separar-os-residuos', element: <PorqueSepararPage /> },
      { path: 'total-coletado', element: <TotalColetadoPage /> },
      { path: 'contato', element: <ContatoPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2em' }}>Carregando...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);