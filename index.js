const button = document.querySelector('.btn');

const options = {
  passwordLength: null,
  specialCharacters: null,
  numbers: null,
  lowercase: null,
  uppercase: null,
};

const usersCharacters = [];

const chooseCharacter = () => {
  return Math.floor(Math.random() * usersCharacters.length);
};

const generatePassword = () => {
  options.passwordLength = prompt(
    'choose a length of at least 8 characters and no more than 128 characters'
  );

  //TODO: need to create check to confirm if a number was provided
  //TODO: need to check if lenght is 8 or greater
  //TODO: need to check if length is 128 or less
  //TODO: need to provide messages for each case above.  If it does not match, go back

  options.specialCharacters = confirm(
    'Click OK to confirm including special characters'
  );
  options.nummbers = confirm(
    'Click OK to confirm including numeric characters'
  );

  options.lowercase = confirm(
    'Click OK to confirm including lowercase characters'
  );
  options.uppercase = confirm(
    'Click OK to confirm including uppercase characters'
  );
};

button.addEventListener('click', generatePassword);
