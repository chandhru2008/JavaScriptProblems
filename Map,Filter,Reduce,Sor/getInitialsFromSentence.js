const input = 'George Raymond Richard Martin';

const initials = input
  .split(' ')
  .map(word => word[0])
  .join('');

console.log("Initials:", initials)