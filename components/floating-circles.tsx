export function FloatingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Círculos grandes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-green-300/15 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-20 h-20 bg-orange-300/15 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Círculos medianos */}
      <div
        className="absolute top-1/3 left-1/3 w-16 h-16 bg-white/8 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-14 h-14 bg-green-400/12 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-10 w-18 h-18 bg-orange-400/12 rounded-full animate-float"
        style={{ animationDelay: "5s" }}
      ></div>

      {/* Círculos pequeños */}
      <div
        className="absolute top-1/2 left-20 w-8 h-8 bg-white/6 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-3/4 left-2/3 w-10 h-10 bg-green-500/10 rounded-full animate-float"
        style={{ animationDelay: "2.5s" }}
      ></div>
      <div
        className="absolute bottom-40 right-1/4 w-12 h-12 bg-orange-500/10 rounded-full animate-float"
        style={{ animationDelay: "3.5s" }}
      ></div>

      {/* Círculos adicionales para más densidad */}
      <div
        className="absolute top-10 right-1/3 w-6 h-6 bg-white/5 rounded-full animate-float"
        style={{ animationDelay: "4.5s" }}
      ></div>
      <div
        className="absolute bottom-10 left-1/2 w-22 h-22 bg-green-300/8 rounded-full animate-float"
        style={{ animationDelay: "6s" }}
      ></div>
      <div
        className="absolute top-1/4 right-1/4 w-28 h-28 bg-orange-200/8 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  )
}
