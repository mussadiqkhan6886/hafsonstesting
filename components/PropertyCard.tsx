import { instrumentSerif } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropertyCardProps {
  address: string;
  price: number;
  description: string;
  images: string[];
  type: string;
  size: string;
  id: number
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  address,
  price,
  description,
  images,
  type,
  size,
  id
}) => {
  return (
    <div className="bg-white  shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={images[0]}
          alt={address}
          width={600}
          height={400}
          className="object-cover w-full h-64 md:h-full"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
        {/* Header */}
        <div>
            <Link href={`${type === "buying" ? "sales" : "lettings"}/${id}`}>
              <h3 className={`${instrumentSerif.className} hover:text-font text-[45px] sm:text-[60px] leading-9`}>{address}</h3>
            </Link>
          <h4 className="text-lg text-font font-bold mt-1">
            {price === 0 ? "POA" : "$" + price.toLocaleString()}
          </h4>
          <h4 className="text-[12px] sm:text-sm text-gray-500">{size} • {type}</h4>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-3 line-clamp-3">{description}</p>

        {/* Contact Info */}
        <div className="mt-5 border-t pt-3">
          <h5 className="font-semibold text-gray-800">Hafsons</h5>
          <p className="text-gray-500 text-sm">info@hafsons.co.uk</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
