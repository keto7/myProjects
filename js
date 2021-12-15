function main() {
    const share = document.getElementById('share');
    const social = document.querySelector('.article__socialLinks');

    share.addEventListener('click', function e() {
        social.classList.toggle('appear');
        social.classList.toggle('clicked');
    });
}

window.addEventListener('DOMContentLoaded', main);
