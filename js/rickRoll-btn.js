const audio = new Audio('audio/RickRoll.mp3');

alert('allow this site to play audio.');

document.querySelector('.btn-rick-roll').addEventListener('mouseover', function(){
    audio.play();
})

document.querySelector('.btn-rick-roll').addEventListener('mouseout', function(){
    audio.pause();
})

document.querySelector('.btn-rick-roll').addEventListener('click', function(){
    window.open(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        '_blank'
      );
})