// Get the token from localStorage
function getItemFromLocalStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    // Handle possible security error or other issues
    console.error(`Failed to retrieve ${key} in localStorage:`, error);
    return null;
  }
}

// Set the token in localStorage
function setItemInLocalStorage(key, value) {
  try {
    return localStorage.setItem(key, value);
  } catch (error) {
    // Handle possible quota exceeded error or other issues
    console.error(`Failed to store ${key} in localStorage:`, error);
  }
}

function removeItemFromLocalStorage(key) {
  try {
    console.log(`Removed item with key: ${key} from localStorage.`);
    return localStorage.removeItem(key);
  } catch (error) {
    console.error(
      `Failed to remove item with key: ${key} from localStorage.`,
      error
    );
  }
}
export {
  setItemInLocalStorage,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
};
