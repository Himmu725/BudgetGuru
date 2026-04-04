// Video Modal
const YOUTUBE_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

const videoModal = document.getElementById('video-modal');
const videoTrigger = document.getElementById('video-trigger');
const videoFrame = document.getElementById('video-frame');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

if (videoTrigger) {
    videoTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        videoModal.classList.add('active');
        videoFrame.src = YOUTUBE_URL;
    });
}

function closeModal() {
    videoModal.classList.remove('active');
    videoFrame.src = '';
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeModal();
    }
});
