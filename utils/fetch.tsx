export const fetchWithCSRFToken = (fetchUrl: string, fetchOptions: any) => {
  if (!fetchOptions.headers.get('X-CSRF-Token')) {
    const csrfUrl = `${baseUrl}/session/token`;
    return fetch(csrfUrl)
      .then((response) => response.text())
      .then((csrfToken) => {
        fetchOptions.headers.append('X-CSRF-Token', csrfToken);
        return fetch(fetchUrl, fetchOptions);
      });
  }
  return fetch(fetchUrl, fetchOptions);
};
