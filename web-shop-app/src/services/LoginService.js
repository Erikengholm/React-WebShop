import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const LoginService = (LoginUserJson) =>{
    const firebaseConfig = {
        "type": "service_account",
        "project_id": "react-web-shop",
        "private_key_id": "b1699b4e44154a83d4d36f37dab367eee6c9b2ac",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDUEkc32yiWYd8t\nO19kzGH8ptdcKV+jtk8AosJ/1rdI0AnTOva6emEPoc9XveEwAFFZLAK3glrNeN2e\nLDFqNbBiR+NbZ48DWirxGSHPbtRteFCqWWwJf2HC/+0ppsH5YLzPJV0wIM/E9ZoY\niP7r1ukKpnDs13NfT1yp89mEiK00zv51QcLCCYzmVWRG9yB34vqjH/FdvUNjDTpJ\nzFIgCpYbSQ451XGo3axmYXl+KvFo9tIoWmDss64e2LDZGiRazHQ70OWT7bkP2aMY\nz7sTOW3iBwCLDNpE3IJrHwiGp41COed8r7oCx5NgqLYjkaPpABDKB9UJCOJdbwyd\nEjLYd0NFAgMBAAECggEAJltV+ULQ4P47vPUfqF4VHPraOeebzkMDoARQNIoT5X4H\nQObJyGmpE4g7Nc34pFNyYzQEG8fef4psXxb0Kxch22zQMPCWm88btDbM+DU+A7y+\nrkj1MvSQrJHYhe+M5vt5uuexpqpQmfmoEOb6YJKi3NPE2fmP+v2iL3UU8xU7arDv\naK5J1kff1nvXWAYBrtFrXgInS7lgioYknknFyVYCoh8SeE/h0yE8JziiaM2BnH9n\n78XA5sLrsYL0+MGwdO2zSv9t5+wdUhkAzXYu2JePlk6o/KEQgHL2FND2Lo+RVRQs\n6/6bLGtU1sXjBFlrBB+5NRR1f57oz0uXG70YkiQJwwKBgQDp5c/zjEns9xd62bEu\njunAcV43V+jIXLzZi6HabGKdsDSpLhd1fB1i2NFBwa1EJM+Rk+h9WKQUIxM5+H4n\nvNpj/ugJKHOIKaI75k0tgewGC3JaPvO5KahYQvRf+IkniEK6fkkdHaXnM3AJvFD7\na5rWOtgfyR0z3AqyCgB0KF/qKwKBgQDoHHf8W2M1aREO/2xfUwB1VBh0IHHPF9YB\nmUfTvCt0HLtshVumpoOB23fiyS5U0M2rWf/SGGO7y4f9Ju+8PpzvIB2zPNEJwAln\nVqReBA9dR7YQiZVtkfSlsk+W3eHBW/xsfv0eY9zTmYaDeM/1B1dQKRrEnT5FI9uJ\n9kVND5oATwKBgQDTdbOFqoWDOPj/ViR7xTTLiTL2sgGAc2dA/p47jNWzXoSdl1Aa\nJTWkEgVNf74X53fJU4FTIXplwjg1ptTXNEP1N5WsAehBZ/KGWPXZeKZb6KlfsZ5C\n/sh100KAKYBGP0iktlt/eThuR/C4vIoyY9w+ZkDSq848/milAanbWk0stQKBgQCL\n4AwWkeQZXbWf+iEO2PAfxIvv/1VWXaDj2cFFQdJV6LKx1TPEG/iIGwAGNQKsriAj\nMNtPes8vbpoG3p3+LSVZnVsIlo/KdmW0Vqw60+uGZR68nIzmONzbtbbszc2sPojB\nwU08MSX0hkJfnECGAuSFNCAjeDb8Z313iGd+5vYBVQKBgAjUj0JunzzYIY2bwj4j\nivDkWcnW7HJNmxFxTPMReiVh8/80zY0fbdLqDN24h5BMu90ZB4XgphzHV8UUVs/b\nvDCAkOjpvGg7z6EwGvpUXCaFvVVSFkE5zWLteNYyXicTw2ITKhG7FOsmUjWN9Eex\nTh59aYykrTvhrvSY1NEP+lzG\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-jhqab@react-web-shop.iam.gserviceaccount.com",
        "client_id": "109536675196171624369",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jhqab%40react-web-shop.iam.gserviceaccount.com"
      };
      
      
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      const UserRef = db.collection('UserCollection');

      
}

export default LoginService