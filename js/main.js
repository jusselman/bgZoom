const people = [
  { name: 'Josue', year: 1985},
  { name: 'Irene', year: 1986},
  { name: 'David', year: 2003},
  { name: 'Jovette', year: 2010}
];

const comments = [
  { text: 'Delicious!', id: 456738 },
  { text: 'Que Verga!', id: 393874 },
  { text: 'Ca c\'est superb!', id: 393874 },
  { text: 'Je l\'adore!', id: 393874 }

];

const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19 );

console.log({isAdult});

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19 );

console.log({allAdults});

const comment = comments.find(comment => comment.id === 393874);

console.log(comment);

const index = comments.findIndex(comment => comment.id === 456738);

console.log(index);

comments.splice(index, 1);

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
]
