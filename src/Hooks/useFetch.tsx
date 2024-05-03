import React from 'react'

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit | undefined) {
 
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const optRef = React.useRef(options);
  optRef.current = options;

  React.useEffect(() => {
    const { signal } = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setData(null); 
        setError(null);

        const response = await fetch(url, {
          signal,
          ...optRef.current
        });
        const json = await response.json();
        if (!response.ok) throw new Error('Houve um problema na requisição');
        setData(json);
      } catch (erro) {
        if (erro instanceof Error) setError(erro.message);
      }
      finally {
        if (!signal.aborted) setLoading(false);
      }
    }
    
    fetchData();

  }, [url]);

  return { data, loading, error };

}

export default useFetch;