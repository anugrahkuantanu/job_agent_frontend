import JobList from "@/app/(root)/components/JobList"
import KickOff from "@/app/(root)/components/KickOffButton"
import ResumeUploader from "@/app/(root)/components/ResumeUploader"

function RightSidebar() {
    return (
        <section className="rightsidebar">
            <div>
                <ResumeUploader />
            </div>
            <div className="py">
                <KickOff />
            </div>
            <div className="costum-scrollbar ">
                <JobList />
            </div>
        </section>
    )
}

export default RightSidebar