const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2'),
    'd': document.querySelector('#s3'),
    'f': document.querySelector('#s4'),
}

const recordingChannels = {
    channel1: [],
    channel2: [],
    channel3: [],
    channel4: [],
}

function onKeyPress(event) {
    const sound = KeyToSound[event.key];
    if (sound) {
        playSound(sound);
        recordSound(sound, activeChannel);
    }
}

let activeChannel = 'channel1'; 

function setActiveChannel(channel) {
    activeChannel = channel;
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function recordSound(sound, channel) {
    if (recordingChannels[channel]) {
        recordingChannels[channel].push(sound.cloneNode());
    }
}

function startRecording(channel) {
    recordingChannels[channel] = [];
    setActiveChannel(channel);
}

function stopRecording(channel) {
    recordingChannels[channel] = recordingChannels[channel] || [];
}

function playChannel(channel) {
    const sounds = recordingChannels[channel];
    const delay = 300;
    let currentTime = 0;

    sounds.forEach((sound) => {
        setTimeout(() => {
            playSound(sound);
        }, currentTime);

        currentTime += delay;
    });
}

function playAllChannels() {
    for (let channel in recordingChannels) {
        playChannel(channel);
    }
}

window.addEventListener('beforeunload', () => {
    localStorage.setItem('recordedData', JSON.stringify(recordingChannels));
});

if (localStorage.getItem('recordedData')) {
    const savedData = JSON.parse(localStorage.getItem('recordedData'));
    Object.assign(recordingChannels, savedData);
}

document.addEventListener('keypress', onKeyPress);