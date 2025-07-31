import star from "../assets/testimonial/star.svg";
import Image, { StaticImageData } from "next/image";

type TestimonialCardProps = {
  name: string; 
    img: StaticImageData;
    college: string;
    content: string;
};

const TestimonialCardCom = ({name, img, college, content}: TestimonialCardProps) => {
  return (
    <div className='flex flex-col gap-4 border rounded-xl p-10 mx-2.5'>
        <div className='flex'>
            <Image src={star} alt="" width={25}/>
            <Image src={star} alt="" width={25}/>
            <Image src={star} alt="" width={25}/>
            <Image src={star} alt="" width={25}/>
            <Image src={star} alt="" width={25}/>
        </div>
        <p className=''>
            {content}
        </p>
        <div className='flex gap-4'>
            <Image src={img} alt="" width={70}/>
            <div className='self-center'>
                <h4> {name} </h4>
                <p> {college} </p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCardCom
