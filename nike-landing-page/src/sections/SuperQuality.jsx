import Button from "../components/Button.jsx";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="About Us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin capitalize lg:max-w-lg">
          We Proivde You <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfication
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center min-sm:mt-8">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
