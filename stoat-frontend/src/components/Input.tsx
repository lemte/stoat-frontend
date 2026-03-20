// src/components/Input.tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <div className="w-full flex flex-col items-start gap-1.5">
      {label && <label className="text-xs font-medium text-neutral-500 ml-1 uppercase tracking-wider">{label}</label>}
      <input 
        className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-neutral-50 text-sm 
                   placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 
                   focus:border-neutral-900 outline-none transition-all"
        {...rest} 
      />
    </div>
  );
}