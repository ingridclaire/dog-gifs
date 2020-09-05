// $(document).ready(() => {
  const API_KEY = '8af3d33a-3910-4049-ba5f-696497573d42'
  const dogUrl = "https://api.thedogapi.com/v1/images/search?mime_types=gif";

  const getGIF = async () => {
    let response = await fetch(dogUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      }
    });
    let gifData = await response.json()
    return gifData[0].url;
  }

  const buttonSubmit = () => {
    let $dogContainer = $('#dog-container');
    $dogContainer.empty();
    getGIF()
    .then(result => {
      let $dogImg = $(`<img src=${result}>`);
      $dogContainer.html($dogImg);
      });
  }

  $('#dog-button').on('click', buttonSubmit)

// })



