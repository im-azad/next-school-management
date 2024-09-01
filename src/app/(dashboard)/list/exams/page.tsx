// import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, examsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Exams = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
};


const columns = [

  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teachers",
    accessor: "teacher",
    className: "hidden md:table-cell",

  },

  {
    header: "Date",
    accessor: "date",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];
export default function ExamListPage() {

  const renderRow = (item: Exams) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-akaPurpleLight"
    >
      
      <td className="flex items-center gap-4 p-4 md:table-cell">{item.subject}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td >{item.date}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-akaSky">
              <Image src="/update.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-akaPurple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
            // <FormModal table="teacher" type="delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-akaYellow">
                <Image src="/filter.png" alt="" width={14} height={14} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-akaYellow">
                <Image src="/sort.png" alt="" width={14} height={14} />
              </button>
              {role === "admin" && (
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-akaYellow">
                  <Image src="/create.png" alt="" width={14} height={14} />
                </button>
                // <FormModal table="teacher" type="create"/>
              )} 
            </div>
          </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={examsData} />
        {/* PAGINATION */}
        <Pagination />
      </div>
    );
  }
  