const passField = document.getElementById('user-pass');
const passConfirmField = document.getElementById('user-pass-confirmation');
const passErrorMsg = document.querySelector('.passwords-match-error');

passField.addEventListener('input', checkPassMatch);
passConfirmField.addEventListener('input',checkPassMatch);

function checkPassMatch() {
   if(passField.value === passConfirmField.value) {
      passErrorMsg.textContent = '';
      passConfirmField.classList.remove('error');
      passField.classList.remove('error');
   } else {
      passErrorMsg.textContent = '* Passwords do no match';
      passConfirmField.classList.add('error');
      passField.classList.add('error');
   }
}