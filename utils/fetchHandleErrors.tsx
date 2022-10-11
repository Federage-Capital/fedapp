// Throw exceptions instead of fetch default behavior.
// https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
export default function handleErrors(response: Response): Response {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
fetch
