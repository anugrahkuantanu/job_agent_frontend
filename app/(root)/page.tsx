import readUserSession from '@/lib/actions';
import { redirect } from 'next/navigation';
import TextEditor from '@/app/(root)/components/TextEditor'
import JobList from "@/app/(root)/components/JobList"
import KickOff from "@/app/(root)/components/KickOffButton"
import ResumeUploader from "@/app/(root)/components/ResumeUploader"

export default async function Home() {
  const { data } = await readUserSession();

  if (!data.session) {
    return redirect("/auth-server-action")
  }
  return (
    <main>
      <div>
        <h1 className='text-white py-3 text-heading2-bold'>Lets your agent do magic</h1>
        <div className='py-2'>
          <ResumeUploader />
        </div>
        <div className="">
          <KickOff />
        </div>
        <JobList />
      </div>
    </main>
  )
}
