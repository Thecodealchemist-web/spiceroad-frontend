
import { Card, CardContent, CardHeader, CardTitle } from "../../../common/ui/card";
import Image from 'next/image'
import styles from "./index.module.css";
interface FeatureProps {
  imageUrl: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    imageUrl: 'https://spiceroad.s3.eu-north-1.amazonaws.com/feild.png',
    title: "اختيار الأجود",
    description:
      "في سبايس رود، نجوب شتى بقاع العالم لننتقي لكم من المزارع أجود أنواع البهار",
  },
  {
    imageUrl: "https://spiceroad.s3.eu-north-1.amazonaws.com/manufactor.png",
    title: "عالية الجودة ",
    description:
      "نطبق أحدث طرق معالجة وتجهيز وتغليف البهار لنقدم لكم الأفضل والمتميز دائما بخلطتنا الفريدة",
  },
  {
    imageUrl: "https://spiceroad.s3.eu-north-1.amazonaws.com/pan.png",
    title: " جوهرة الطهي",
    description:
      "الهيل هو جوهرة الطهي، مما يبهر وجباتك ويبهر قلبك وبالعافية عليك ",
  },
  
];

export const HowItWorks = () => {
  return (
    <div>

    <section
      id="howItWorks"
      
    >
      
      <div className="grid grid-cols-1 md:grid-cols-3 md:flex md:flex-row-reverse lg:flex lg:flex-row-reverse  gap-2 ">
        
        {features.map(({ imageUrl, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-transparent border-none shadow-none "
            
          >
            <CardHeader>
              <CardTitle className="text-black grid gap-3 place-items-center">
              <Image
                src={imageUrl}
                width={100}
                height={100}
                alt="Picture of the author"
              />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-black text-center mx-9">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
    </div>
  );
};
