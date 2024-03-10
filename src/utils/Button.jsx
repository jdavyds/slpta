import { useNavigate } from "react-router-dom";

export function BtnPurpleGradient({ name, slug, style }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(slug)}
      className={`w-full h-14 font-medium text-2xl text-white rounded-xl flex items-center justify-center px-12 gap-2 transition-all ease-in-out duration-1000 bg-gradient-to-r from-[#C371C3] to-[#280F44] ${style}`}
    >
      {name}
    </button>
  );
}
