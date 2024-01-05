export const getAllEntry = async (
  url = "https://jsonplaceholder.typicode.com/users"
) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("GET All - ", data);

    return data;
  } catch (error) {
    return [];
  }
};

export const getEntryById = async (
  url = "https://jsonplaceholder.typicode.com/users/",
  entryId = 2
) => {
  try {
    const response = await fetch(`${url}${entryId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("GET By Id - ", data);

    return data;
  } catch (error) {
    console.error("There was an error!", error);
  }
};

export const createNewEntry = async (
  url = "https://jsonplaceholder.typicode.com/users",
  jsObject = {
    username: "Elon Musk",
    email: "elonmusk@gmail.com",
  }
) => {
  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify(jsObject),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Create - ", data);

    return data;
  } catch (error) {
    console.error("There was an error!", error);
  }
};

export const updateExistingEntry = async (
  url = "https://jsonplaceholder.typicode.com/users/",
  entryId = 3,
  jsObject = {
    username: "Elon Musk Updated",
    email: "elonmusk@gmail.com",
  }
) => {
  try {
    const response = await fetch(`${url}${entryId}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PUT",
      body: JSON.stringify(jsObject),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Update - ", data);

    return data;
  } catch (error) {
    console.error("There was an error!", error);
  }
};

export const deleteEntry = async (
  url = "https://jsonplaceholder.typicode.com/users/",
  entryId = 1
) => {

  try {
    const response = await fetch(`${url}${entryId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Delete - ", data);

    return data;
  } catch (error) {
    console.error("There was an error!", error);
  }
};
