import readUserSession from '@/lib/actions';
import { redirect } from 'next/navigation';
import MonacoEditorComponent from './components/MonacoEditor';
import JobList from './components/JobList';
import JobComponent from './components/TestJob';

export default async function Home() {
  const { data } = await readUserSession();

  if (!data.session) {
    return redirect("/auth-server-action")
  }
  return (

    <main>
      <div>
        <h1 className='text-white'>Lets your agent do magic</h1>
        <JobComponent/>
      </div>
    </main>
  )
}
