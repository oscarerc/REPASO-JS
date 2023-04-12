const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    // console.log(position);

    $id.innerHTML = `
    <p>Tu pocision actual es:</p>
    <ul>
    <li>Latitud:<b>${coords.latitude}</b></li>
    <li>Longitud:<b>${coords.longitude}</b></li>
    <li>Precision:<b>${coords.accuracy}</b>Metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">ver Enlace</a>
    `;
  };

  const error = (err) => {
    // console.log(err);
    err;
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
