export default function CalendarControls({ className, title, icon, onClick }) {
  return (
    <button onClick={onClick} className={className} title={title}>
      {icon}
    </button>
  );
}
