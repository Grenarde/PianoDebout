// Crée un contexte audio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let mediaRecorder;
let audioChunks = [];
let recordedAudioBlobUrl;
let isRecording = false;

// Tableau pour stocker les sons des touches
const sons3 = [
    new Audio('/son/28 touche/blanche/Do1.mp3'),
    new Audio('/son/28 touche/blanche/Ré1.mp3'),
    new Audio('/son/28 touche/blanche/Mi1.mp3'),
    new Audio('/son/28 touche/blanche/Fa1.mp3'),
    new Audio('/son/28 touche/blanche/Sol1.mp3'),
    new Audio('/son/28 touche/blanche/La1.mp3'),
    new Audio('/son/28 touche/blanche/Si1.mp3'),
    new Audio('/son/28 touche/blanche/Do2.mp3'),
    new Audio('/son/28 touche/blanche/Ré2.mp3'),
    new Audio('/son/28 touche/blanche/Mi2.mp3'),
    new Audio('/son/28 touche/blanche/Fa2.mp3'),
    new Audio('/son/28 touche/blanche/Sol2.mp3'),
    new Audio('/son/28 touche/blanche/La2.mp3'),
    new Audio('/son/28 touche/blanche/Si2.mp3'),
    new Audio('/son/28 touche/blanche/Do3.mp3'),
    new Audio('/son/28 touche/blanche/Ré3.mp3'),
    new Audio('/son/28 touche/blanche/Mi3.mp3'),
    new Audio('/son/28 touche/blanche/Fa3.mp3'),
    new Audio('/son/28 touche/blanche/Sol3.mp3'),
    new Audio('/son/28 touche/blanche/La3.mp3'),
    new Audio('/son/28 touche/blanche/Si3.mp3'),
    new Audio('/son/28 touche/blanche/Do4.mp3'),
    new Audio('/son/28 touche/blanche/Ré4.mp3'),
    new Audio('/son/28 touche/blanche/Mi4.mp3'),
    new Audio('/son/28 touche/blanche/Fa4.mp3'),
    new Audio('/son/28 touche/blanche/Sol4.mp3'),
    new Audio('/son/28 touche/blanche/La4.mp3'),
    new Audio('/son/28 touche/blanche/Si4.mp3'),
    new Audio('/son/28 touche/Noire/DoB1.mp3'),
    new Audio('/son/28 touche/Noire/RéB1.mp3'),
    new Audio('/son/28 touche/Noire/FaB1.mp3'),
    new Audio('/son/28 touche/Noire/SolB1.mp3'),
    new Audio('/son/28 touche/Noire/LaB1.mp3'),
    new Audio('/son/28 touche/Noire/DoB2.mp3'),
    new Audio('/son/28 touche/Noire/RéB2.mp3'),
    new Audio('/son/28 touche/Noire/FaB2.mp3'),
    new Audio('/son/28 touche/Noire/SolB2.mp3'),
    new Audio('/son/28 touche/Noire/LaB2.mp3'),
    new Audio('/son/28 touche/Noire/DoB3.mp3'),
    new Audio('/son/28 touche/Noire/RéB3.mp3'),
    new Audio('/son/28 touche/Noire/FaB3.mp3'),
    new Audio('/son/28 touche/Noire/SolB3.mp3'),
    new Audio('/son/28 touche/Noire/LaB3.mp3'),
    new Audio('/son/28 touche/Noire/DoB4.mp3'),
    new Audio('/son/28 touche/Noire/RéB4.mp3'),
    new Audio('/son/28 touche/Noire/FaB4.mp3'),
    new Audio('/son/28 touche/Noire/SolB4.mp3'),
    new Audio('/son/28 touche/Noire/LaB4.mp3'),
    // Ajoute les autres sons ici...
];


let clavierBlanc = document.querySelectorAll(".clavier-blanc button")
let toucheBlanche = document.querySelectorAll("#blanche")


function wait(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}


for (let i = 0; i < clavierBlanc.length; i = i + 1) {
    toucheBlanche[i].addEventListener('click', function () {
        toucheBlanche[i].style.backgroundColor = "hsla(299, 83%, 57%, 1.00)";
    });
    toucheBlanche[i].addEventListener('mouseover', function () {
        toucheBlanche[i].style.backgroundColor = "rgba(196, 189, 246, 1)";
    });
    toucheBlanche[i].addEventListener('mouseout', function () {
        toucheBlanche[i].style.backgroundColor = "rgb(135, 125, 210)";
    });
}

let clavierNoir = document.querySelectorAll(".clavier-noir button")
let toucheNoire = document.querySelectorAll("#noir")


function wait(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}


for (let i = 0; i < clavierNoir.length; i = i + 1) {
    toucheNoire[i].addEventListener('click', function () {
        toucheNoire[i].style.backgroundColor = "hsla(299, 83%, 57%, 1.00)";
    });
    toucheNoire[i].addEventListener('mouseover', function () {
        toucheNoire[i].style.backgroundColor = "rgba(196, 189, 246, 1)";
    });
    toucheNoire[i].addEventListener('mouseout', function () {
        toucheNoire[i].style.backgroundColor = "rgb(247, 161, 255)";
    });
}


const sons = [
    new Audio('/son/28 touche/blanche/Do1.mp3'),
    new Audio('/son/28 touche/blanche/Ré1.mp3'),
    new Audio('/son/28 touche/blanche/Mi1.mp3'),
    new Audio('/son/28 touche/blanche/Fa1.mp3'),
    new Audio('/son/28 touche/blanche/Sol1.mp3'),
    new Audio('/son/28 touche/blanche/La1.mp3'),
    new Audio('/son/28 touche/blanche/Si1.mp3'),
    new Audio('/son/28 touche/blanche/Do2.mp3'),
    new Audio('/son/28 touche/blanche/Ré2.mp3'),
    new Audio('/son/28 touche/blanche/Mi2.mp3'),
    new Audio('/son/28 touche/blanche/Fa2.mp3'),
    new Audio('/son/28 touche/blanche/Sol2.mp3'),
    new Audio('/son/28 touche/blanche/La2.mp3'),
    new Audio('/son/28 touche/blanche/Si2.mp3'),
    new Audio('/son/28 touche/blanche/Do3.mp3'),
    new Audio('/son/28 touche/blanche/Ré3.mp3'),
    new Audio('/son/28 touche/blanche/Mi3.mp3'),
    new Audio('/son/28 touche/blanche/Fa3.mp3'),
    new Audio('/son/28 touche/blanche/Sol3.mp3'),
    new Audio('/son/28 touche/blanche/La3.mp3'),
    new Audio('/son/28 touche/blanche/Si3.mp3'),
    new Audio('/son/28 touche/blanche/Do4.mp3'),
    new Audio('/son/28 touche/blanche/Ré4.mp3'),
    new Audio('/son/28 touche/blanche/Mi4.mp3'),
    new Audio('/son/28 touche/blanche/Fa4.mp3'),
    new Audio('/son/28 touche/blanche/Sol4.mp3'),
    new Audio('/son/28 touche/blanche/La4.mp3'),
    new Audio('/son/28 touche/blanche/Si4.mp3'),
];


for (let i = 0; i < toucheBlanche.length; i++) 
    toucheBlanche[i].addEventListener('click', function() {
        if (sons[i]) {
            sons[i].currentTime = 0;
            sons[i].play();
        }
    });

const sonsN = [
    new Audio('/son/28 touche/Noire/DoB1.mp3'),
    new Audio('/son/28 touche/Noire/RéB1.mp3'),
    new Audio('/son/28 touche/Noire/FaB1.mp3'),
    new Audio('/son/28 touche/Noire/SolB1.mp3'),
    new Audio('/son/28 touche/Noire/LaB1.mp3'),
    new Audio('/son/28 touche/Noire/DoB2.mp3'),
    new Audio('/son/28 touche/Noire/RéB2.mp3'),
    new Audio('/son/28 touche/Noire/FaB2.mp3'),
    new Audio('/son/28 touche/Noire/SolB2.mp3'),
    new Audio('/son/28 touche/Noire/LaB2.mp3'),
    new Audio('/son/28 touche/Noire/DoB3.mp3'),
    new Audio('/son/28 touche/Noire/RéB3.mp3'),
    new Audio('/son/28 touche/Noire/FaB3.mp3'),
    new Audio('/son/28 touche/Noire/SolB3.mp3'),
    new Audio('/son/28 touche/Noire/LaB3.mp3'),
    new Audio('/son/28 touche/Noire/DoB4.mp3'),
    new Audio('/son/28 touche/Noire/RéB4.mp3'),
    new Audio('/son/28 touche/Noire/FaB4.mp3'),
    new Audio('/son/28 touche/Noire/SolB4.mp3'),
    new Audio('/son/28 touche/Noire/LaB4.mp3'),
];


for (let i = 0; i < toucheNoire.length; i++) 
    toucheNoire[i].addEventListener('click', function() {
        if (sonsN[i]) {
            sonsN[i].currentTime = 0;
            sonsN[i].play();
        }
    });



// Crée un nœud de destination pour capturer le son
const destination = audioContext.createMediaStreamDestination();
mediaRecorder = new MediaRecorder(destination.stream);

// Écoute les événements des touches du piano
for (let i = 0; i < toucheBlanche.length; i++) {
    toucheBlanche[i].addEventListener('click', function() {
        toucheBlanche[i].style.backgroundColor = "hsla(299, 83%, 57%, 1.00)";
        if (sons3[i]) {
            // Crée une source audio pour le son de la touche
            const source = audioContext.createMediaElementSource(sons3[i]);
            source.connect(destination);
            source.connect(audioContext.destination); // Envoie aussi le son aux haut-parleurs
            sons3[i].currentTime = 0;
            sons3[i].play();
        }
    });
}

// Bouton "Enregistrer"
document.getElementById('enregistrer').addEventListener('click', () => {
    audioChunks = [];
    mediaRecorder.start();
    isRecording = true;
    document.getElementById('enregistrer').disabled = true;
    document.getElementById('arreter').disabled = false;
});

// Bouton "Arrêter"
document.getElementById('arreter').addEventListener('click', () => {
    mediaRecorder.stop();
    isRecording = false;
    document.getElementById('enregistrer').disabled = false;
    document.getElementById('arreter').disabled = true;
});

// Écoute l'événement "dataavailable" pour stocker les morceaux audio
mediaRecorder.addEventListener('dataavailable', (event) => {
    audioChunks.push(event.data);
});

// Écoute l'événement "stop" pour créer l'URL de l'audio enregistré
mediaRecorder.addEventListener('stop', () => {
    recordedAudioBlobUrl = URL.createObjectURL(new Blob(audioChunks, { type: 'audio/wav' }));
    document.getElementById('jouer').disabled = false;
});

// Bouton "Jouer"
document.getElementById('jouer').addEventListener('click', () => {
    if (recordedAudioBlobUrl) {
        const audio = new Audio(recordedAudioBlobUrl);
        audio.play();
    }
});