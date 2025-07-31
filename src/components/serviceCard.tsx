import Image, { StaticImageData } from "next/image";

type ServiceCardProps = {
  heading: string;
  content: string;
  img: StaticImageData;
};

const serviceCard = ({ heading, content, img }: ServiceCardProps) => {
  return (
    <div className="w-1/3 flex flex-col gap-2 items-center px-8 py-5">
      <div className="w-32">
        <Image src={img} alt="Service svg" />
      </div>
      <div className="text-center">
        <h3 className="text-2xl">{heading}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default serviceCard;
