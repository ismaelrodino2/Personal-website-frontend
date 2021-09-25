import { AiOutlineLoading } from 'react-icons/ai';

export function Loading() {
  return (
    <div
      Style="height: 100vh"
      className="flex items-center justify-center text-white bg-color_dark "
    >
      <div className="animate-spin">
        <AiOutlineLoading size={36} />
      </div>
    </div>
  );
}
