export function ProfileAvatar({
    size = 80,
    strokeColor = "#CCCCCC",
    fillColor = "#DDDDDD"
  }) {
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 80 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="38" stroke={strokeColor} strokeWidth="2"/>
        {/* Versão com espaçamento embutido (3 unidades) */}
        <path 
          d="M40 39C46.075 39 51 34.075 51 28C51 21.925 46.075 17 40 17C33.925 17 29 21.925 29 28C29 34.075 33.925 39 40 39Z" 
          fill={fillColor}
        />
        <path 
          d="M40 41C27.297 41 17 49.059 17 59.2V61C17 62.105 17.895 63 19 63H61C62.105 63 63 62.105 63 61V59.2C63 49.059 52.703 41 40 41Z" 
          fill={fillColor}
        />
      </svg>
    );
  }