import UserCard from "@/components/UserCard";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Admin Left area */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        
      </div>
      {/* Admin Right area */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
       <h3>Admin Right Area</h3>
      </div>
    </div>
  );
}
