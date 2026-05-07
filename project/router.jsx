// router.jsx — RouterCtx + useRouter + Router (hash sync)
// Valeur par défaut no-op : les composants fonctionnent sans Router (canvas design).
const RouterCtx = React.createContext({ page: 'landing', navigate: () => {} });

function useRouter() {
  return React.useContext(RouterCtx);
}

function Router({ children }) {
  const getPage = () => window.location.hash.slice(1) || 'landing';
  const [page, setPage] = React.useState(getPage);

  React.useEffect(() => {
    const onHash = () => setPage(getPage());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = React.useCallback((p) => {
    window.location.hash = p;
  }, []);

  return (
    <RouterCtx.Provider value={{ page, navigate }}>
      {children}
    </RouterCtx.Provider>
  );
}

Object.assign(window, { useRouter, Router });
