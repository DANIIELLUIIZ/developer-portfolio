async function fetchProfileData() {
  const url =
    'https://raw.githubusercontent.com/DANIIELLUIIZ/developer-portfolio/main/data/index.json'
  const fetching = await fetch(url)
  return fetching.json
}
