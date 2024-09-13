import Image from "next/image";

interface IFeatureCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  direction?: "ltr" | "rtl";
  bgColor?: string;
}

const FeatureCard = ({
  altText,
  description,
  imageSrc,
  title,
  bgColor,
  direction,
}: IFeatureCardProps) => {
  return (
    <section
      className={`bg-${bgColor} flex justify-center gap-20 py-20 ${
        direction === "rtl" && "flex-row-reverse"
      }`}
    >
      <Image alt={altText} src={imageSrc} />
      <div className="max-w-sm">
        <h1 className="text-5xl font-bold pb-6">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
    </section>
  );
};

export default FeatureCard;
