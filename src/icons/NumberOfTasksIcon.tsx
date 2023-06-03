interface NumberOfTasksIconProps {
  width: string | number;
  height: string | number;
}

const NumberOfTasksIcon: React.FC<NumberOfTasksIconProps> = ({
  width,
  height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4598 4.04293C13.7136 3.78909 13.7136 3.37753 13.4598 3.12369C13.206 2.86985 12.7944 2.86985 12.5406 3.12369L6.33352 9.33074L3.4598 6.45703C3.20596 6.20319 2.7944 6.20319 2.54056 6.45703C2.28672 6.71087 2.28672 7.12243 2.54056 7.37627L5.8739 10.7096C6.12774 10.9634 6.5393 10.9634 6.79314 10.7096L13.4598 4.04293ZM13.4598 12.0429C13.7136 11.7891 13.7136 11.3775 13.4598 11.1237C13.206 10.8699 12.7944 10.8699 12.5406 11.1237L6.33352 17.3307L3.4598 14.457C3.20596 14.2032 2.7944 14.2032 2.54056 14.457C2.28672 14.7109 2.28672 15.1224 2.54056 15.3763L5.8739 18.7096C6.12774 18.9634 6.5393 18.9634 6.79314 18.7096L13.4598 12.0429ZM18.3332 7.60006C17.9742 7.60006 17.6832 7.89108 17.6832 8.25006C17.6832 8.60905 17.9742 8.90006 18.3332 8.90006L28.9999 8.90006C29.3588 8.90006 29.6499 8.60905 29.6499 8.25006C29.6499 7.89108 29.3588 7.60006 28.9999 7.60006L18.3332 7.60006ZM16.3332 16.2667C15.9742 16.2667 15.6832 16.5577 15.6832 16.9167C15.6832 17.2757 15.9742 17.5667 16.3332 17.5667L28.9999 17.5667C29.3588 17.5667 29.6499 17.2757 29.6499 16.9167C29.6499 16.5577 29.3588 16.2667 28.9999 16.2667L16.3332 16.2667ZM14.3332 24.9333C13.9742 24.9333 13.6832 25.2243 13.6832 25.5833C13.6832 25.9423 13.9742 26.2333 14.3332 26.2333L28.9999 26.2333C29.3588 26.2333 29.6499 25.9423 29.6499 25.5833C29.6499 25.2243 29.3588 24.9333 28.9999 24.9333L14.3332 24.9333ZM6.33352 29.0667C8.25731 29.0667 9.81685 27.5072 9.81685 25.5834C9.81685 23.6596 8.25731 22.1001 6.33352 22.1001C4.40972 22.1001 2.85018 23.6596 2.85018 25.5834C2.85018 27.5072 4.40972 29.0667 6.33352 29.0667ZM8.51685 25.5834C8.51685 26.7892 7.53934 27.7667 6.33352 27.7667C5.12769 27.7667 4.15018 26.7892 4.15018 25.5834C4.15018 24.3776 5.12769 23.4001 6.33352 23.4001C7.53934 23.4001 8.51685 24.3776 8.51685 25.5834Z"
        fill="#0099FF"
        stroke="#0099FF"
        stroke-width="0.3"
      ></path>
    </svg>
  );
};

export default NumberOfTasksIcon;