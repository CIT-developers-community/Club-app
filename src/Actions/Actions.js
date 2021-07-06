export const logIn = (details) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
        details.email,
        details.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }
  
  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }
  
  export const signUp = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        user.email, 
        user.password
      ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
          name:user.name,
          contact_number:user.number,
          email:user.email,
          password:user.password
        });
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }
