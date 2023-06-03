import { Box } from "@mui/material";

interface DisplayImageProps {
  alt: string;
  src: string;
  width?:
    | number
    | string
    | {
        xs: number | string;
        sm?: number | string;
        md?: number | string;
        lg?: number | string;
        xl?: number | string;
      };
  height?:
    | number
    | string
    | {
        xs: number | string;
        sm?: number | string;
        md?: number | string;
        lg?: number | string;
        xl?: number | string;
      };
  lazyLoad?: boolean;
}

const DisplayImage: React.FC<DisplayImageProps> = ({
  src,
  alt,
  width = "100%",
  height = "100%",
  lazyLoad = false,
}) => {
  return (
    <Box
      component="img"
      loading={lazyLoad ? "lazy" : "eager"}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default DisplayImage;
