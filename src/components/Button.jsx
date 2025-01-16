// Primary Button (Black)
export function PrimaryButton({ children }) {
    return (
      <button
        className="px-6 py-3 font-semibold rounded-lg transition duration-150 transform bg-black text-white shadow-lg shadow-gray-400 hover:bg-gray-800 hover:shadow-xl active:translate-y-1 active:shadow-md"
      >
        {children}
      </button>
    );
  }
  
  // Secondary Button (White with Black Border)
  export function SecondaryButton({ children }) {
    return (
      <button
        className="px-6 py-3 font-semibold rounded-lg transition duration-150 transform bg-white text-black border border-black shadow-lg shadow-gray-300 hover:bg-gray-100 hover:shadow-xl active:translate-y-1 active:shadow-md"
      >
        {children}
      </button>
    );
  }
  