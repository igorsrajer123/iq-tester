interface BrainIconProps {
  width: string | number;
  height: string | number;
}

const BrainIcon: React.FC<BrainIconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0676 14.565C12.5556 13.9877 12.8238 13.2566 12.8248 12.5008V12.0005C12.8248 11.8149 12.7511 11.6368 12.6198 11.5056C12.4885 11.3743 12.3105 11.3005 12.1248 11.3005C11.9392 11.3005 11.7611 11.3743 11.6298 11.5056C11.4986 11.6368 11.4248 11.8149 11.4248 12.0005V12.5005C11.4248 12.9779 11.2352 13.4358 10.8976 13.7733C10.56 14.1109 10.1022 14.3005 9.6248 14.3005C9.14742 14.3005 8.68958 14.1109 8.35201 13.7733C8.01445 13.4358 7.8248 12.9779 7.8248 12.5005V12.0005C7.8248 11.8149 7.75105 11.6368 7.61978 11.5056C7.4885 11.3743 7.31046 11.3005 7.1248 11.3005C6.93915 11.3005 6.76111 11.3743 6.62983 11.5056C6.49855 11.6368 6.4248 11.8149 6.4248 12.0005V12.5008C6.42585 13.2566 6.69404 13.9877 7.18196 14.565C7.63236 15.0978 8.24324 15.4678 8.9206 15.6214C8.89096 16.0544 8.70577 16.4638 8.39694 16.7727C8.05945 17.1102 7.60186 17.3 7.12458 17.3005H6.6248C6.43915 17.3005 6.26111 17.3743 6.12983 17.5056C5.99855 17.6368 5.9248 17.8149 5.9248 18.0005C5.9248 18.1862 5.99855 18.3642 6.12983 18.4955C6.26111 18.6268 6.43915 18.7005 6.6248 18.7005H7.12503C7.97337 18.6996 8.78668 18.3621 9.38654 17.7623C9.95755 17.1913 10.2908 16.4269 10.3223 15.6229C11.0024 15.4703 11.6158 15.0996 12.0676 14.565Z"
        fill="#0099FF"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.9467 2.17862C13.0657 1.29754 11.8711 0.801937 10.625 0.800537C9.96763 0.800729 9.31729 0.938796 8.71655 1.20582C8.11581 1.47285 7.57776 1.8629 7.13713 2.35079C6.6965 2.83867 6.36309 3.41355 6.15843 4.03829C5.96809 4.61931 5.89306 5.23146 5.93702 5.8404C5.07161 6.29623 4.36865 7.01116 3.92764 7.88678C3.48436 8.76691 3.32909 9.76302 3.48196 10.7345C2.70162 11.3485 2.06708 12.1287 1.62479 13.0189C1.16439 13.9455 0.924805 14.9661 0.924805 16.0008C0.924805 17.0355 1.16439 18.0561 1.62479 18.9827C2.06709 19.8729 2.70163 20.653 3.48196 21.2671C3.32915 22.2385 3.48445 23.2346 3.92773 24.1146C4.36873 24.9902 5.07165 25.7051 5.93702 26.1609C5.8945 26.7498 5.96329 27.3418 6.14022 27.906C6.33092 28.514 6.64327 29.0769 7.05828 29.5604C7.47329 30.044 7.98229 30.4381 8.55435 30.7188C9.12642 30.9995 9.74959 31.161 10.386 31.1933C11.0224 31.2257 11.6587 31.1283 12.2563 30.9071C12.8539 30.6859 13.4003 30.3455 13.8623 29.9066C14.3242 29.4677 14.6921 28.9394 14.9435 28.3539C15.1949 27.7683 15.3247 27.1378 15.3248 26.5005V5.50031C15.3234 4.25428 14.8278 3.05969 13.9467 2.17862ZM14.125 5.50049C14.125 4.57223 13.7563 3.68199 13.0999 3.02561C13.709 3.63469 14.0702 4.4452 14.1191 5.30054C14.1229 5.36694 14.125 5.43362 14.125 5.50049ZM8.91793 26.4298C8.32446 26.5362 7.71566 26.5224 7.12764 26.3891C7.16916 26.3985 7.21131 26.4075 7.25302 26.4157C7.2774 26.4205 7.30182 26.4251 7.32626 26.4295C7.85199 26.524 8.3911 26.5243 8.91793 26.4298ZM8.29136 28.834C7.70374 28.2464 7.36062 27.46 7.32747 26.6328C7.86495 26.725 8.41503 26.7232 8.95305 26.6267C9.57287 26.5155 10.1641 26.281 10.6915 25.937C11.219 25.593 11.672 25.1466 12.0237 24.6243C12.3753 24.1021 12.6185 23.5147 12.7388 22.8968C12.757 22.8064 12.7571 22.7133 12.7392 22.6229C12.7213 22.5322 12.6855 22.4459 12.6341 22.3691C12.5826 22.2923 12.5164 22.2265 12.4393 22.1754C12.3623 22.1243 12.2759 22.089 12.1851 22.0715C12.0943 22.054 12.0009 22.0546 11.9104 22.0734C11.8199 22.0922 11.734 22.1287 11.6576 22.1809C11.5813 22.233 11.516 22.2998 11.4656 22.3773C11.4155 22.4545 11.381 22.5408 11.3642 22.6314C11.2721 23.1034 11.078 23.5496 10.7954 23.9388C10.5126 24.3283 10.1481 24.6512 9.72739 24.885C9.30669 25.1188 8.83996 25.2578 8.3599 25.2923C7.87983 25.3267 7.39803 25.2558 6.94825 25.0845L6.91363 25.0714C6.16695 24.7759 5.55296 24.2183 5.18707 23.5026C4.81563 22.776 4.72612 21.9376 4.93574 21.1489C4.97298 21.0087 4.96571 20.8603 4.91494 20.7244C4.86416 20.5884 4.77227 20.4715 4.65221 20.39C3.93534 19.9042 3.34839 19.2501 2.94268 18.485C2.53697 17.7199 2.32484 16.8671 2.32484 16.0011C2.32484 15.1351 2.53696 14.2823 2.94268 13.5172C3.34839 12.7521 3.93546 12.0979 4.65233 11.6121C4.7724 11.5306 4.86416 11.4138 4.91494 11.2778C4.96571 11.1419 4.97297 10.9935 4.93573 10.8532C4.72611 10.0646 4.81563 9.22624 5.18707 8.49963C5.55296 7.78386 6.16719 7.22634 6.91386 6.93079L6.94825 6.91769C7.39804 6.74639 7.87984 6.67549 8.35991 6.70995C8.83998 6.74442 9.30671 6.88342 9.72741 7.11722C10.1481 7.35101 10.5126 7.67396 10.7954 8.06343C11.078 8.45267 11.2722 8.89894 11.3643 9.37104C11.3982 9.55282 11.5052 9.71676 11.6579 9.82098C11.8071 9.92278 12.0076 9.96428 12.185 9.93007C12.2757 9.91257 12.362 9.87729 12.439 9.82627C12.5935 9.72394 12.7028 9.56106 12.739 9.37935L12.7428 9.36002V9.34031C12.7428 9.25098 12.711 9.10906 12.6716 8.96369C12.6297 8.80887 12.571 8.62241 12.5031 8.43018C12.3693 8.05167 12.1912 7.6267 12.0237 7.37794C11.672 6.85558 11.219 6.40918 10.6915 6.06521C10.1641 5.72125 9.57287 5.48672 8.95305 5.37554C8.41502 5.27903 7.86492 5.27717 7.32742 5.3694C7.3603 4.54184 7.70347 3.75498 8.29136 3.16708C8.91023 2.54821 9.7496 2.20054 10.6248 2.20054C11.5 2.20054 12.3394 2.54821 12.9583 3.16708C13.5298 3.73865 13.8701 4.49828 13.9188 5.30054H12.6248C12.4392 5.30054 12.2611 5.37429 12.1298 5.50556C11.9986 5.63684 11.9248 5.81489 11.9248 6.00054C11.9248 6.18619 11.9986 6.36424 12.1298 6.49551C12.2611 6.62679 12.4392 6.70054 12.6248 6.70054H13.9248V19.7892C13.5212 19.7436 13.1426 19.5626 12.8527 19.2727C12.5152 18.9352 12.3254 18.4776 12.3248 18.0003V17.5005C12.3248 17.3149 12.2511 17.1368 12.1198 17.0056C11.9885 16.8743 11.8105 16.8005 11.6248 16.8005C11.4392 16.8005 11.2611 16.8743 11.1298 17.0056C10.9986 17.1368 10.9248 17.3149 10.9248 17.5005V18.0008C10.9258 18.8491 11.2632 19.6624 11.8631 20.2623C12.4157 20.8149 13.1494 21.1448 13.9248 21.1941V26.5005C13.9248 27.3758 13.5771 28.2151 12.9583 28.834C12.3394 29.4529 11.5 29.8005 10.6248 29.8005C9.7496 29.8005 8.91023 29.4529 8.29136 28.834Z"
        fill="#0099FF"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.9324 14.565C19.4444 13.9877 19.1762 13.2566 19.1752 12.5008V12.0005C19.1752 11.8149 19.2489 11.6368 19.3802 11.5056C19.5115 11.3743 19.6895 11.3005 19.8752 11.3005C20.0608 11.3005 20.2389 11.3743 20.3702 11.5056C20.5014 11.6368 20.5752 11.8149 20.5752 12.0005V12.5005C20.5752 12.9779 20.7648 13.4358 21.1024 13.7733C21.44 14.1109 21.8978 14.3005 22.3752 14.3005C22.8526 14.3005 23.3104 14.1109 23.648 13.7733C23.9856 13.4358 24.1752 12.9779 24.1752 12.5005V12.0005C24.1752 11.8149 24.2489 11.6368 24.3802 11.5056C24.5115 11.3743 24.6895 11.3005 24.8752 11.3005C25.0608 11.3005 25.2389 11.3743 25.3702 11.5056C25.5014 11.6368 25.5752 11.8149 25.5752 12.0005V12.5008C25.5741 13.2566 25.306 13.9877 24.818 14.565C24.3676 15.0978 23.7568 15.4678 23.0794 15.6214C23.109 16.0544 23.2942 16.4638 23.6031 16.7727C23.9406 17.1102 24.3981 17.3 24.8754 17.3005H25.3752C25.5608 17.3005 25.7389 17.3743 25.8702 17.5056C26.0014 17.6368 26.0752 17.8149 26.0752 18.0005C26.0752 18.1862 26.0014 18.3642 25.8702 18.4955C25.7389 18.6268 25.5608 18.7005 25.3752 18.7005H24.875C24.0266 18.6996 23.2133 18.3621 22.6135 17.7623C22.0424 17.1913 21.7092 16.4269 21.6777 15.6229C20.9976 15.4703 20.3842 15.0996 19.9324 14.565Z"
        fill="#0099FF"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.0533 2.17862C18.9343 1.29754 20.1289 0.801937 21.375 0.800537C22.0324 0.800729 22.6827 0.938796 23.2835 1.20582C23.8842 1.47285 24.4222 1.8629 24.8629 2.35079C25.3035 2.83867 25.6369 3.41355 25.8416 4.03829C26.0319 4.61931 26.1069 5.23146 26.063 5.8404C26.9284 6.29623 27.6314 7.01116 28.0724 7.88678C28.5156 8.76691 28.6709 9.76302 28.518 10.7345C29.2984 11.3485 29.9329 12.1287 30.3752 13.0189C30.8356 13.9455 31.0752 14.9661 31.0752 16.0008C31.0752 17.0355 30.8356 18.0561 30.3752 18.9827C29.9329 19.8729 29.2984 20.653 28.518 21.2671C28.6708 22.2385 28.5155 23.2346 28.0723 24.1146C27.6313 24.9902 26.9283 25.7051 26.063 26.1609C26.1055 26.7498 26.0367 27.3418 25.8598 27.906C25.6691 28.514 25.3567 29.0769 24.9417 29.5604C24.5267 30.044 24.0177 30.4381 23.4456 30.7188C22.8736 30.9995 22.2504 31.161 21.614 31.1933C20.9776 31.2257 20.3413 31.1283 19.7437 30.9071C19.1461 30.6859 18.5997 30.3455 18.1377 29.9066C17.6758 29.4677 17.3079 28.9394 17.0565 28.3539C16.8051 27.7683 16.6753 27.1378 16.6752 26.5005V5.50031C16.6766 4.25428 17.1722 3.05969 18.0533 2.17862ZM17.8752 20.0005C17.8751 20.0005 17.8752 20.0005 17.8752 20.0005V20.0005ZM24.8724 26.3892C24.2843 26.5225 23.6755 26.5362 23.0821 26.4298C23.6089 26.5243 24.148 26.524 24.6737 26.4295C24.6982 26.4251 24.7226 26.4205 24.747 26.4157C24.7887 26.4075 24.8308 26.3986 24.8724 26.3892ZM25.1239 6.73079C25.1239 6.7308 25.1238 6.73077 25.1239 6.73079V6.73079ZM23.6256 6.51042C23.1164 6.54697 22.6214 6.69439 22.1752 6.94235C21.7291 7.19031 21.3425 7.53281 21.0426 7.94588C20.7427 8.35894 20.5367 8.83258 20.439 9.33361C20.415 9.46338 20.3382 9.58135 20.2292 9.65572C20.124 9.72748 19.9777 9.75775 19.8527 9.73363C19.8526 9.73362 19.8528 9.73365 19.8527 9.73363C19.9777 9.75775 20.124 9.72748 20.2292 9.65572C20.3382 9.58135 20.415 9.46338 20.439 9.33361C20.5367 8.83258 20.7427 8.35894 21.0426 7.94588C21.3425 7.53281 21.7291 7.19031 22.1752 6.94235C22.6214 6.69439 23.1164 6.54697 23.6256 6.51042ZM21.3752 2.00054C20.4469 2.00054 19.5567 2.36929 18.9003 3.02566C18.2912 3.63474 17.9298 4.4452 17.8809 5.30054C17.8771 5.36694 17.8752 5.43362 17.8752 5.50049C17.8752 4.57223 18.2439 3.68204 18.9003 3.02566C19.5567 2.36929 20.4469 2.00054 21.3752 2.00054ZM23.7086 28.834C24.2963 28.2464 24.6394 27.46 24.6725 26.6328C24.135 26.725 23.585 26.7232 23.047 26.6267C22.4271 26.5155 21.8359 26.281 21.3085 25.937C20.781 25.593 20.328 25.1466 19.9763 24.6243C19.6247 24.1021 19.3815 23.5147 19.2612 22.8968C19.243 22.8064 19.2429 22.7133 19.2608 22.6229C19.2787 22.5322 19.3145 22.4459 19.3659 22.3691C19.4174 22.2923 19.4836 22.2265 19.5607 22.1754C19.6377 22.1243 19.7241 22.089 19.8149 22.0715C19.9057 22.054 19.9991 22.0546 20.0896 22.0734C20.1801 22.0922 20.266 22.1287 20.3424 22.1809C20.4187 22.233 20.484 22.2998 20.5344 22.3773C20.5845 22.4545 20.619 22.5408 20.6358 22.6314C20.7279 23.1034 20.922 23.5496 21.2046 23.9388C21.4874 24.3283 21.8519 24.6512 22.2726 24.885C22.6933 25.1188 23.16 25.2578 23.6401 25.2923C24.1202 25.3267 24.602 25.2558 25.0518 25.0845L25.0864 25.0714C25.833 24.7759 26.447 24.2183 26.8129 23.5026C27.1844 22.776 27.2739 21.9376 27.0643 21.1489C27.027 21.0087 27.0343 20.8603 27.0851 20.7244C27.1358 20.5884 27.2277 20.4715 27.3478 20.39C28.0647 19.9042 28.6516 19.2501 29.0573 18.485C29.463 17.7199 29.6752 16.8671 29.6752 16.0011C29.6752 15.1351 29.463 14.2823 29.0573 13.5172C28.6516 12.7521 28.0645 12.0979 27.3477 11.6121C27.2276 11.5306 27.1358 11.4138 27.0851 11.2778C27.0343 11.1419 27.027 10.9935 27.0643 10.8532C27.2739 10.0646 27.1844 9.22624 26.8129 8.49963C26.447 7.78386 25.8328 7.22634 25.0861 6.93079L25.0518 6.91769C24.602 6.74639 24.1202 6.67549 23.6401 6.70995C23.16 6.74442 22.6933 6.88342 22.2726 7.11722C21.8519 7.35101 21.4874 7.67396 21.2046 8.06343C20.922 8.45267 20.7278 8.89894 20.6357 9.37104C20.6018 9.55282 20.4948 9.71676 20.3421 9.82098C20.1929 9.92278 19.9924 9.96428 19.815 9.93007C19.7243 9.91257 19.638 9.87729 19.561 9.82627C19.4065 9.72394 19.2972 9.56106 19.261 9.37935L19.2572 9.36002V9.34031C19.2572 9.25098 19.289 9.10906 19.3284 8.96369C19.3703 8.80887 19.429 8.62241 19.4969 8.43018C19.6307 8.05167 19.8088 7.6267 19.9763 7.37794C20.328 6.85558 20.781 6.40918 21.3085 6.06521C21.8359 5.72125 22.4271 5.48672 23.047 5.37554C23.585 5.27903 24.1351 5.27717 24.6726 5.3694C24.6397 4.54184 24.2965 3.75498 23.7086 3.16708C23.0898 2.54821 22.2504 2.20054 21.3752 2.20054C20.5 2.20054 19.6606 2.54821 19.0417 3.16708C18.4702 3.73865 18.1299 4.49828 18.0812 5.30054H19.3752C19.5608 5.30054 19.7389 5.37429 19.8702 5.50556C20.0014 5.63684 20.0752 5.81489 20.0752 6.00054C20.0752 6.18619 20.0014 6.36424 19.8702 6.49551C19.7389 6.62679 19.5608 6.70054 19.3752 6.70054H18.0752V19.7892C18.4788 19.7436 18.8574 19.5626 19.1473 19.2727C19.4848 18.9352 19.6746 18.4776 19.6752 18.0003V17.5005C19.6752 17.3149 19.7489 17.1368 19.8802 17.0056C20.0115 16.8743 20.1895 16.8005 20.3752 16.8005C20.5608 16.8005 20.7389 16.8743 20.8702 17.0056C21.0014 17.1368 21.0752 17.3149 21.0752 17.5005V18.0008C21.0742 18.8491 20.7368 19.6624 20.1369 20.2623C19.5843 20.8149 18.8506 21.1448 18.0752 21.1941V26.5005C18.0752 27.3758 18.4229 28.2151 19.0417 28.834C19.6606 29.4529 20.5 29.8005 21.3752 29.8005C22.2504 29.8005 23.0898 29.4529 23.7086 28.834Z"
        fill="#0099FF"
      ></path>
    </svg>
  );
};

export default BrainIcon;
