// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const emptyHeart = document.querySelector('.like-glyph');
emptyHeart.addEventListener('click', handleClick);
function handleClick() {
  mimicServerCall()
    .then(() => {
      emptyHeart.innerText = '♥'; 
  emptyHeart.classList.add('activated-heart'); 
    })
    .catch(() => {
      const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');

  modal.classList.remove('hidden'); 
  modalMessage.innerText = 'Server error message goes here';

  setTimeout(() => {
    modal.classList.add('hidden');
  }, 3000);
    });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
