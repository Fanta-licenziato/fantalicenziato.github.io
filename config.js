// ============================================================
//  CONFIGURAZIONE — è l'unico file che devi modificare
// ============================================================

window.FL_CONFIG = {
  // 1) Incolla qui la configurazione che ti dà Firebase
  //    (Impostazioni progetto → Le tue app → icona </> Web → "firebaseConfig")
  firebase: {
    apiKey: "AIzaSyBCCUAzOcwY1op6Lbk50wCOn73qoPg5MQw",
    authDomain: "fanta-licenziato-6577e.firebaseapp.com",
    projectId: "fanta-licenziato-6577e",
    storageBucket: "fanta-licenziato-6577e.firebasestorage.app",
    messagingSenderId: "969871970682",
    appId: "1:969871970682:web:d23152c86cfe7a053d06c3"
  },

  // 2) Il soprannome dell'amministratore (tu).
  //    Solo lui può segnare i licenziati e togliere nomi dalla rosa.
  //    Se lo cambi, cambialo anche nel file firestore.rules.
  adminNick: "erre",

  // 3) Crediti di partenza per ogni giocatore
  startCredits: 1000
};
