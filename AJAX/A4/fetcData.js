const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('HTTP error: ' + res.status);
  }
  return await res.json();
};
