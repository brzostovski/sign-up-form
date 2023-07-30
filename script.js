const PWD_CONFIRM_INPUT = document.querySelector('#pwd-confirm');
const PWD_INPUT = document.querySelector('#pwd');

function confirmPwd(pwd, pwdConfirm) {
  if (pwd !== pwdConfirm) {
    PWD_CONFIRM_INPUT.setCustomValidity(`Passwords don't match`);
    PWD_CONFIRM_INPUT.checkValidity();
    PWD_CONFIRM_INPUT.reportValidity();
  } else if (pwd === pwdConfirm) {
    PWD_CONFIRM_INPUT.setCustomValidity('');
  }
}

PWD_CONFIRM_INPUT.addEventListener('change', () => {
  confirmPwd(PWD_INPUT.value, PWD_CONFIRM_INPUT.value);
});