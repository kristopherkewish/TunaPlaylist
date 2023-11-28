// This module is designed to contain the functions required to get the authentication token needed to access the Spotify API data

// onClick handler for the login with Spotify button, which will redirect the user to the Spotify authorisation page. The redirectUri variable SHOULD redirect them back to the app, with the authToken appended to the URL.
const handleLoginClick = () => {
    const clientId = 'YOUR_CLIENT_ID';
    const redirectUri = 'http://localhost:3000/callback'; // Your redirect URI

    const scopes = ['user-read-private', 'user-read-email']; // Add scopes as needed

    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token`;

    window.location = authorizeUrl;
};

// This function will get called with the useEffect function in the main container (e.g it will get called everytime the app renders, such as when the app is redirected after authentication). The first three lines of code access the authentication token from the url. The if statement checks that the URL actually had an authentication token before returning it as a string. The main app will then set this as a state variable for later use to access the Spotify API.
const getAccessTokenFromUrl = () => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');
    const expiresIn = params.get('expires_in');

    if (token && expiresIn) {
        const currentTime = Date.now();
        const expiry = currentTime + expiresIn * 1000; 
        return [token, expiry];
    }
};

export {handleLoginClick, getAccessTokenFromUrl};


