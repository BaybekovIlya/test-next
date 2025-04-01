import { FC } from "react";

import { IBackgrountImageProps } from "../types/IBackgrountImageProps";

const AboutBackgrountImage: FC<IBackgrountImageProps> = ({
  imageUrl = "https://picsum.photos/1900/1200",
}) => {
  return (
    <>
      <div className="absolute inset-0"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      ></div>
    </>
  );
};

export default AboutBackgrountImage;
