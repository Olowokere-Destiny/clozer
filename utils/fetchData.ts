function fetchTabsData() {
  fetch(process.env.NEXT_PUBLIC_TABS_DATA as string)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error fetching data:", error));
}

export { fetchTabsData };