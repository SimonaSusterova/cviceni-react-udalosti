/*
Zadání 1: Pomocí události `change` a vlastnosti `event.target.value` vypisujte do konzole, co
  postupně uživatel do inputu píše ve formátu
  console.log('Uživatel napsal: ' + DOPLŇ_TEXT_OD_UŽIVATELE).
Zadání 2: Pokud uživatel z textového políčka vše smaže, vypište „Uživatel nenapsal nic“.
*/

// export const Uloha4 = () => {
//   return <input />;
// };

//správně
export const Uloha4 = () => {
  const handleChange = (event) => {
    const text = event.target.value;
    if (text === '') {
      console.log('Uživatel nenapsal nic');
    } else {
      console.log('Uživatel napsal: ' + text);
    }
  };

  return <input onChange={handleChange} />;
};