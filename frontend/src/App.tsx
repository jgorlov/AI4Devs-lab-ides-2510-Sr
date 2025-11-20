import React from 'react';
import './App.css';
import AddCandidateForm from './components/AddCandidateForm';
import './i18n'; // Initialize i18n

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LTI ATS</h1>
      </header>
      <main>
        <AddCandidateForm />
      </main>
    </div>
  );
}

export default App;
