// Temporary UI workflow state switches for testing Phase 1
function initiateCreateRoomWorkflow() {
    const roomName = document.getElementById('voice-room-input').value.trim();
    if (!roomName) return alert("Bitte gib einen Raumnamen ein!");
    
    document.getElementById('active-room-label').textContent = roomName;
    document.getElementById('voice-lobby-state').classList.add('hidden');
    document.getElementById('voice-call-state').classList.remove('hidden');
}

function initiateJoinRoomWorkflow() {
    initiateCreateRoomWorkflow(); // Uses same panel transitions for visual preview
}

function leaveAudioCallRoom() {
    document.getElementById('voice-call-state').classList.add('hidden');
    document.getElementById('voice-lobby-state').classList.remove('hidden');
}

function toggleMicrophoneMute() {
    const btn = document.getElementById('mic-toggle-btn');
    if (btn.classList.contains('btn-warning')) {
        btn.classList.replace('btn-warning', 'btn-secondary');
        btn.innerHTML = "🔇 Mikrofon eingeschaltet";
    } else {
        btn.classList.replace('btn-secondary', 'btn-warning');
        btn.innerHTML = "🎙️ Mikrofon stummschalten";
    }
}