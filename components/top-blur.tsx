export default function TopBlur() {
  return (
    <div className="fixed inset-x-0 top-0 isolate z-[10] h-[100px]">
      <div
        className="absolute inset-0 gradient-mask-t-0 blur-12px"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
      />
      <div
        className="absolute inset-0 gradient-mask-t-0 blur-6px"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
      />
      <div
        className="absolute inset-0 gradient-mask-t-0 blur-3px"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
      />
      <div
        className="absolute inset-0 gradient-mask-t-0 blur-2px"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
      />
      <div
        className="absolute inset-0 gradient-mask-t-0 blur-1px"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
      />
    </div>
  );
}
