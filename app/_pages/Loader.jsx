export default function Loader() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black font-nohemi-regular">
      {/* Écran de chargement */}
      <div className="loader">
        <div className="counter">0%</div>
      </div>
    </div>
  );
}
