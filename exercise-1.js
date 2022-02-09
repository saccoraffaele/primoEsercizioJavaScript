function canPlay() {
  let personName = 'Paul';

  if (true) {
    personName = 'Paul'; // Argh! personName is not defined
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();