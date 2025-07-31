import left from "../assets/testimonial/left.svg"
import right from "../assets/testimonial/right.svg"
import Image from "next/image"

const TestimonialNextArrows = (props: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
  const { onClick } = props;
  return (
    <div className='bg-gray-300 w-28 h-10 p-2 cursor-pointer transition duration-300 hover:bg-black flex justify-center items-center rounded-full' onClick={onClick}>
        <Image src={right} alt="" />
    </div>
  )
}

const TestimonialPrevArrows = (props: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
    const { onClick } = props;
    return (
      <div className='bg-gray-300 w-28 h-10 p-2 cursor-pointer transition duration-300 hover:bg-black flex justify-center items-center rounded-full' onClick={onClick}>
          <Image src={left} alt="" />
      </div>
    )
  }

export { TestimonialNextArrows, TestimonialPrevArrows }
