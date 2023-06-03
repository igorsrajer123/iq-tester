interface ClockIconProps {
  width: number | string;
  height: number | string;
}

const ClockIcon: React.FC<ClockIconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99999 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6024 1.66666 9.99999 1.66666C5.39762 1.66666 1.66666 5.39762 1.66666 9.99999C1.66666 14.6024 5.39762 18.3333 9.99999 18.3333Z"
        stroke="#28ABE2"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M10 5V10L13.3333 11.6667"
        stroke="#28ABE2"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default ClockIcon;