interface IOptions {
  passwordLength: number;
  withUpperCase?: boolean | undefined;
  withLowerCase?: boolean | undefined;
  withNumbers?: boolean | undefined;
  withCharacters?: boolean | undefined;
  avoidAmbiguous?: boolean;
}

export const generateRandomPassword = (options: IOptions) => {
  const alphabet = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '1234567890',
    specialCharacters: '~!@#$%^&*()-_=+[]{};:<>,.?',
  };

  let itemsFromGenerate: string = '';

  let randomCode: string = '';

  if (
    !options.withLowerCase &&
    !options.withNumbers &&
    !options.withCharacters &&
    !options.withUpperCase
  ) {
    options.withCharacters = true;
    options.withLowerCase = true;
    options.withNumbers = true;
    options.withUpperCase = true;
  }

  if (!options.passwordLength) {
    throw new Error('Set password length');
  }
  if (options.passwordLength >= 2048) {
    throw new Error('Max length of generated code is 2048 characters');
  }

  if (options.withUpperCase) {
    options.avoidAmbiguous
      ? (itemsFromGenerate += alphabet.uppercase.replace('I', '').replace('O', ''))
      : (itemsFromGenerate += alphabet.uppercase);
  }
  if (options.withLowerCase) {
    options.avoidAmbiguous
      ? (itemsFromGenerate += alphabet.lowercase.replace('l', ''))
      : (itemsFromGenerate += alphabet.lowercase);
  }
  if (options.withNumbers) {
    options.avoidAmbiguous
      ? (itemsFromGenerate += alphabet.numbers.replace('1', '').replace('0', ''))
      : (itemsFromGenerate += alphabet.numbers);
  }
  if (options.withCharacters) {
    itemsFromGenerate += alphabet.specialCharacters;
  }

  for (let i = 0; i < options.passwordLength; i++) {
    randomCode += itemsFromGenerate.charAt(Math.floor(Math.random() * itemsFromGenerate.length));
  }

  return randomCode;
};
