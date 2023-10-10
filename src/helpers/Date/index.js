export const MONTHS = {};
for (let i = 1; i <= 12; i += 1) {
  MONTHS[i] = i;
}

// Ajoutez ensuite les noms des mois en français à l'objet MONTHS
MONTHS[0] = 'janvier';
MONTHS[1] = 'février';
MONTHS[2] = 'mars';
MONTHS[3] = 'avril';
MONTHS[4] = 'mai';
MONTHS[5] = 'juin';
MONTHS[6] = 'juillet';
MONTHS[7] = 'août';
MONTHS[8] = 'septembre';
MONTHS[9] = 'octobre';
MONTHS[10] = 'novembre';
MONTHS[11] = 'décembre';

export const getMonth = (date) => MONTHS[date.getMonth()];
