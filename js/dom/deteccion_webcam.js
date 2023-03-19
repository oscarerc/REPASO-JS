
const d= document,
n= navigator;

export default function webcam(id){
    const $video = d.getElementById(id);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true, audio:true})
    }
}