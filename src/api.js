export const apiMenu = async () => {
  try {
    const res = await fetch('https://order.sweetgreen.com/api/menus/7/');
    const data = await res.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}
