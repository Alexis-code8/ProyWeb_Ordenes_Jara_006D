(async function() {
    const url = 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=-33.5110502,-70.7528141&language=es';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0e4812adf0msh587c93badf52602p119a86jsn7c83c674a6f2',
        'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
  
      // Ver la respuesta completa en la consola
      console.log(data);
  
      // Extraer la dirección formateada de la respuesta si está disponible
      const formattedAddress = data.results[1]?.formatted_address;
  
      // Mostrar la dirección en el elemento con id "result" en la página HTML
      document.getElementById('result').innerHTML = data.results[0].address;

    } catch (error) {
      console.error(error);
    }
  })();
  