// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import axios from 'axios';
export const prerender = true;

export async function load () {
}


