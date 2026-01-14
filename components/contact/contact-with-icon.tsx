import { LucideIcon } from "lucide-react";
type PropsType = {
  icon: LucideIcon;
  label: string;
  contact: string;
};
export default function ContactWithIcon({
  icon: Icon,
  label,
  contact,
}: PropsType) {
  return (
    <div className='mt-6 p-1 border hover:border-dashed rounded cursor-pointer'>
      <div className='flex flex-row items-center gap-2'>
        <div className='p-2 border rounded'>
          <Icon size={30} />
        </div>
        <div>
          <h1 className='font-bold text-xl'>{label}</h1>
          <h1 className='text-lg'>{contact}</h1>
        </div>
      </div>
    </div>
  );
}
