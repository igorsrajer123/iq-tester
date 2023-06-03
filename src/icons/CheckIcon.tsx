interface CheckIconProps {
  width: number | string;
  height: number | string;
}

const CheckIcon: React.FC<CheckIconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M20.7009 12.1215L20.1639 10.5956L14.3713 16.3884C13.8053 16.9554 13.0514 17.2672 12.2503 17.2672C11.4495 17.2672 10.6955 16.9554 10.1295 16.3884L5.87969 12.1385C5.31264 11.5726 5.00065 10.8186 5.00065 10.0177C5.00065 9.21671 5.31264 8.46272 5.87969 7.89677C6.44564 7.32991 7.19963 7.01791 8.00049 7.01791C8.80153 7.01791 9.55552 7.32991 10.1215 7.89677L12.2503 10.0247L17.9541 4.3211L17.57 3.23113L17.3931 2.17321C17.2821 1.4952 16.835 0.933285 16.2 0.670176C15.5621 0.405237 14.8503 0.487264 14.2913 0.888243L11.5124 2.9001L8.70247 0.883116C8.13854 0.48525 7.42465 0.406153 6.79059 0.67219C6.16074 0.936214 5.71765 1.49722 5.6067 2.17119L5.06272 5.55791L1.65586 6.12386C0.978957 6.235 0.417037 6.68193 0.153014 7.31691C-0.11101 7.9539 -0.0289831 8.66779 0.371996 9.22678L2.38293 12.0056L0.365954 14.8154C-0.0309971 15.3793 -0.11101 16.0943 0.155028 16.7273C0.419967 17.3573 0.979873 17.8002 1.65385 17.9114L5.04075 18.4563L5.6067 21.862C5.71674 22.538 6.16074 23.099 6.79059 23.363C7.42557 23.6289 8.14055 23.55 8.70961 23.147L11.4885 21.1351L14.2913 23.147C14.6342 23.392 15.0332 23.5179 15.4382 23.5179C15.6951 23.5179 15.9531 23.4679 16.2 23.365C16.8361 23.101 17.2821 22.5391 17.3931 21.864L17.938 18.4773L21.3438 17.9114C22.0197 17.8002 22.5798 17.3573 22.8448 16.7273C23.1108 16.0943 23.0317 15.3793 22.6287 14.8084L20.7009 12.1215Z"
          fill="#0099FF"
        ></path>
        <path
          d="M12.2505 15.2676C11.9945 15.2676 11.7386 15.1696 11.5436 14.9746L7.29373 10.7248C6.90282 10.3339 6.90282 9.70186 7.29373 9.31096C7.68482 8.91986 8.31668 8.91986 8.70778 9.31096L12.2505 12.8537L22.2929 2.81125C22.684 2.42034 23.3159 2.42034 23.707 2.81125C24.0979 3.20216 24.0979 3.8342 23.707 4.22511L12.9574 14.9746C12.7624 15.1696 12.5065 15.2676 12.2505 15.2676Z"
          fill="#FFD128"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckIcon;
