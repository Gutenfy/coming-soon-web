import Image from "next/image";
import CardProps from "./card.types";

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div
      className="flex flex-col items-center text-center mb-4 px-2 rounded-lg overflow-hidden transition duration-100 ease-in-out transform hover:scale-105 hover:shadow-2xl"
      style={{
        width: "260px",
        height: "280px",
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div
        className="flex-none relative w-16 h-16 mt-4"
        style={{ maxWidth: "65px", maxHeight: "65px" }}
      >
        <Image src={imageUrl} alt={title} height={60} width={60} />
      </div>
      <div className="flex-grow p-4">
        <div className="mb-2">
          <div
            className="font-bold"
            style={{
              color: "#323232",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "32px",
              textAlign: "center",
            }}
          >
            {title}
          </div>
        </div>
        <p
          style={{
            color: "#696969",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "26px",
            textAlign: "center",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
