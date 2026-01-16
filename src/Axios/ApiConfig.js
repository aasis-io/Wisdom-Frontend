const response = await fetch('/config.json')
const config = await response.json()
 
export const backendBaseUrl = config.BACKEND_URL ;
 