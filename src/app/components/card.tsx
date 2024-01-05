import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import goober from "../../../public/goober-gabe.jpg";

export default function IndustriesCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1 */}
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Industries</p>
          <small className="text-default-500">View More</small>
          <h4 className="font-bold text-large">Industries</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={goober.src}
            width={270}
          />
        </CardBody>
      </Card>

      {/* Card 2 */}
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Services</p>
          <small className="text-default-500">View More</small>
          <h4 className="font-bold text-large">Services</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={goober.src}
            width={270}
          />
        </CardBody>
      </Card>

      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Services</p>
          <small className="text-default-500">View More</small>
          <h4 className="font-bold text-large">Services</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={goober.src}
            width={270}
          />
        </CardBody>
      </Card>

      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Services</p>
          <small className="text-default-500">View More</small>
          <h4 className="font-bold text-large">Services</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={goober.src}
            width={270}
          />
        </CardBody>
      </Card>

      {/* Add two more cards here with similar structure */}

    </div>
  );
}