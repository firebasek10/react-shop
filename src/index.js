import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import HomeComponent from './components/HomeComponent';
// import DataBindingComponent from './components/DataBindingComponent'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import ShoppingIndexComponent from './shopping/ShoppingIndexComponent';
// import FakestoreDemoComponent from './components/FakestoreDemoComponent';
// import ReducerDemoComponent from './components/ReducerDemoComponent';
// import LoginComponent from './components/LoginComponent';
import { CookiesProvider } from 'react-cookie';
import IshopIndexComponent from './ishop/IshopIndexComponent';
// import FormikValidationComponent from './components/FormikValidationComponent';
// import YupValidationDemo from './components/YupValidationDemo';
// import FormikValidationComponent from './components/FormikValidationComponent';
// import FormikValidationComponenttwo from './components/FormikValidationComponenttwo';
// import FormikDemoComponent from './components/FormikDemoComponent';
// import ValidationDemoComponent from './components/ValidationDemoComponent';
// import FormDemoComponent from './components/FormDemoComponent';
// import FunctionLifeCycleComponent from './components/FunctionLifeCycleComponent';
// import ContextDemoComponent from './components/ContextDemoComponent';
// import ContextUpdateComponent from './components/ContextUpdateComponent';
// import KeyDemoComponent from './components/KeyDemoComponent';
// import LifeCycleDemoComponent from './components/LifeCycleDemoComponent';
// import MainContent from './components/MainContent';
// import FakestoreDemoComponent from './components/FakestoreDemoComponent';
// import JQueryDemoComponent from './components/JQueryDemoComponent';
// import AxiosDemoComponent from './components/AxiosDemoComponent';
// import EvenDemoComponent from './components/EvenDemoComponent';
// import AxiosDemoComponent from './components/AxiosDemoComponent';
// import FakestoreDemoComponent from './components/FakestoreDemoComponent';
// import JQueryDemoComponent from './components/JQueryDemoComponent';
// import NetflixIndexComponent from './netflix/NetflixIndexComponent';
// import NasaComponent from './components/NasaComponent';
// import PropertiesDemoComponent from './components/PropertiesDemoComponent';
// import HomeComponent from './components/HomeComponent';
// import StateDemoClComponent from './components/StateDemoClComponent';
// import StyleDemoComponent from './components/StyleDemoComponent';
// import StyleBindingComponent from './components/StyleBindingComponent';
// import StateDemoCompo from './components/StateDemoCompo';
// import StateDemoComponent from './components/StateDemoComponent';
// import NestedIterationsComponent from './components/NestedIterationsComponent';
// import NestedIterated from './components/NestedIterated';


ReactDOM.render(
  <React.StrictMode>
     <CookiesProvider>
     <IshopIndexComponent/>

</CookiesProvider>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
