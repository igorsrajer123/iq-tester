import { Box } from "@mui/material";

interface DisplayImageProps {
  alt: string;
  src: string;
  width?: number | string;
  height?: number | string;
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
