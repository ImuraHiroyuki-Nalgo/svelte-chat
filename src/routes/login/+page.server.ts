import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    let isSuccess: Boolean | null = null;
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      isSuccess = true;
    } catch (e) {
      console.log("ログイン失敗");
      isSuccess = false;
    }

    return { isSuccess: isSuccess }
  }
}