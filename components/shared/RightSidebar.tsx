import JobList from "@/app/(root)/components/JobList"
import KickOff from "@/app/(root)/components/KickOffButton"

function RightSidebar() {
    return (
        <section className="rightsidebar">
            <div className="flex">
                    <KickOff/>
            </div>
            <div className="costum-scrollbar ">
                <JobList/>
            </div>
        </section>
    )
}

export default RightSidebar