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
        recordSound(sound, activeChannel); // Use the active channel
    }
}

let activeChannel = 'channel1'; // Initialize the active channel

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
    const delay = 300; // Adjust this value to control the delay between sounds (in milliseconds)
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

// Save recording data to localStorage
window.addEventListener('beforeunload', () => {
    localStorage.setItem('recordedData', JSON.stringify(recordingChannels));
});

// Load recording data from localStorage
if (localStorage.getItem('recordedData')) {
    const savedData = JSON.parse(localStorage.getItem('recordedData'));
    Object.assign(recordingChannels, savedData);
}

document.addEventListener('keypress', onKeyPress);