# random-password-generator
=======
Hello, this function will allow you to generate a random password.
EASY TO USE!

Function accepts the following options:

!Obligated:
- passwordLength: (number) = password length.
  
!Optional settings with which you can combine the password:
- withUpperCase: (boolean) = Code with uppercase letters;
- withLowerCase: (boolean) = Code with lowercase letters;
- withNumbers: (boolean) = Code with numbers;
- withCharacters: (boolean) = Code with symbols;
- avoidAmbiguous: (boolean) = Avoid ambiguous characters (l/I/1, 0/O).

EXAMPLE USE:
import { generateRandomPassword } from '....';

const password = generateRandomPassword({
  passwordLength: 6,
  withNumbers: true,
  withCharacters: true,
});
console.log(password)
//result example = 7_(>=3
>>>>>>> 556c62f (firstcommit)
