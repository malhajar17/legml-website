import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect from the root to the home page
  redirect('/home');
}