import { LEAD_SERVICE_OPTIONS } from "@/lib/business";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ServiceSelect({ value, onChange }: Props) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">What do you need?</label>
      <select
        required
        name="service"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
      >
        <option value="" disabled>
          Select a service
        </option>
        {LEAD_SERVICE_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
