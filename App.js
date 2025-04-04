

import React, { useEffect } from 'react';
import './App.css';

// ✅ Import Firestore and helpers
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  // ✅ useEffect will run once on load
  useEffect(() => {
    const testFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'test'));
        console.log("✅ Firebase connected! Firestore returned:", querySnapshot.empty ? "No data (yet)" : "Data found");
      } catch (error) {
        console.error("❌ Firebase connection failed:", error);
      }
    };

    testFirebase();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Firebase connection test in progress...</p>
    </div>
  );
}

export default App;

