import { FirebaseError } from "firebase/app";
import type { Actions } from "./$types";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
      console.log("アカウントの作成に失敗");
    }
  }
}