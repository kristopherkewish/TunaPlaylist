const getUserId = async (token) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if(!response.ok) {
        throw new Error('response not ok');
      }

      const data = await response.json();
      
      return data.id;

    } catch (error) {
      console.log(error);
    }
};

export default getUserId;
