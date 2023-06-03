interface FacebookIconProps {
  width: string | number;
  height: string | number;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
        fill="#343B43"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6909 8.1588C14.347 8.0908 13.8825 8.04 13.5904 8.04C12.7995 8.04 12.7481 8.38 12.7481 8.924V9.8924H14.7253L14.5529 11.8984H12.7481V18H10.2724V11.8984H9V9.8924H10.2724V8.6516C10.2724 6.952 11.0804 6 13.109 6C13.8138 6 14.3296 6.102 15 6.238L14.6909 8.1588Z"
        fill="#343B43"
      ></path>
    </svg>
  );
};

export default FacebookIcon;
