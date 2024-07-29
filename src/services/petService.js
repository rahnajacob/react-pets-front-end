const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;


const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    // const text = await res.text(); // Get the raw response text
    // console.log(text); // Log the raw response
    // return JSON.parse(text);
    return res.json()
  } catch (error) {
    console.log(error.message)
  }
};

export { index }