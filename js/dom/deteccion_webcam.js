const d = document,
  n = navigator;

export default function webcam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log(stream);
        $video.srcObject= stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentElement("afterend",`<p><mark> Error${err}</mark></p>`)
        console.log(err);
      });
  }
}
