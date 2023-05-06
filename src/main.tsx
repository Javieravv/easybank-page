import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainComponent } from './components'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './scss/easybank-styles.scss';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MainComponent />
    </React.StrictMode>,
)
