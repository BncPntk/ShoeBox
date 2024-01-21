const fetchData = async (url, setData, setIsLoading, setError) => {
  const abortController = new AbortController();

  setIsLoading(true);

  try {
    const response = await fetch(url, {
      signal: abortController.signal,
    });
    const data = await response.json();
    setData(data.data.shoes);
  } catch (err) {
    if (err.name === 'AbortError') {
      return;
    }
    setError(err);
    console.error('Error fetching data:', err);
  } finally {
    setIsLoading(false);
  }
};

export default fetchData;
