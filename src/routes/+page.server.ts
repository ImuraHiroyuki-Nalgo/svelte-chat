import type { PageServerLoad } from "./$types";
import { firebaseConfig } from '$lib/firebase';

export const load: PageServerLoad = async ({ params }) => {
    return {
        firebaseConfig: firebaseConfig
    };
}