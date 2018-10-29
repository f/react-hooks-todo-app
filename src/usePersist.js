export function usePersistedContext(context, key = "state") {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}

export function usePersistedReducer([state, dispatch], key = "state") {
  localStorage.setItem(key, JSON.stringify(state));
  return [state, dispatch];
}
