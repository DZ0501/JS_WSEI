document.addEventListener('DOMContentLoaded', () => {
    let activeChannel;
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.id;

            if (id.startsWith('startRecording')) {
                startRecording(id.slice(-8));
            } else if (id.startsWith('stopRecording')) {
                stopRecording(id.slice(-8));
            } else if (id.startsWith('playChannel')) {
                playChannel(id.slice(-8));
            } else if (id === 'play-all-channels') {
                playAllChannels();
            }
        });
    });

    const keyToSound = {
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

    function setActiveChannel(channel) {
        activeChannel = channel
    }

    function onKeyPress(event) {
        const sound = keyToSound[event.key];
        if (sound) {
            playSound(sound);
            recordSound(sound, activeChannel);
        }
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

    document.addEventListener('keypress', onKeyPress);


});