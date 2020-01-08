var age = prompt('How old are you?');

if (age < 0) {
  alert('Error');
} else if (age == 21) {
  alert('happy 21st birthday!!');
} else if (age % 2 === 1) {
  alert('your age is odd!');
} else if (age % Math.sqrt(age) === 0) {
  alert('Perfect sqaure!');
}