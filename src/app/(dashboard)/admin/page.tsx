import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Admin Left area */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Cards area */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
         {/* Middle charts */}
         <div className="flex gap-4 flex-col lg:flex-row">
          {/* Student count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <h2>Attendance chart</h2>
          </div>
        </div>
        {/* Bottom charts*/}
        <div className="w-full h-[500px]">
           <h2>Admin Bottom Chart Area</h2>
        </div>
        
      </div>
      {/* Admin Right area */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
       <h3>Admin Right Area</h3>
      </div>
    </div>
  );
}
