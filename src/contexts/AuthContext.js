import React, {useState, useEffect} from 'react'
import { auth } from '../firebase/firebaseIndex';

export const AuthContext = React.createContext();

// Signed in user
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
          setUser(user);
        });
    });

    return (
        <AuthContext.Provider value={ user }>{ children }</AuthContext.Provider>
      );

}