import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Integrated Systems",
      description: "Most Complete & Fully Integrated Systems",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "LMS in the Philippines",
      description:
        "The FIRST and ONLY school software with INTEGRATED Learning Management System (LMS)",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Continuous Improvement",
      description:
        "The ONLY school software that is CONTINUOUSLY IMPROVED (Since 1998) DOWNLOADABLE, UPGRADEABLE UNIFIED SYSTEM",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Availability",
      description:
        "The ONLY school software which is 100% Desktop and MOBILE friendly (ALL User Interfaces: Admin, Trans, Tools & Reports)",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          SIAS ONLINE (3.x) FEATURES
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          The best and no. 1 school management system provider in the
          Philippines.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full flex justify-center items-center">
        {/* TODO */}
        <img
          src="/images/list-of-products.png"
          alt="list-of-produtcs"
          className="object-center"
        />
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-[120px] bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-[150px] bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const softwares = [
    {
      title: "Moodle",
      creator: "Australian",
    },
    {
      title: "Google Classroom",
      creator: "American",
    },
    {
      title: "Microsoft Teams",
      creator: "American",
    },
    {
      title: "NeoLMS",
      creator: "American",
    },
    {
      title: "Schoology",
      creator: "American",
    },
    {
      title: "Canvas",
      creator: "American",
    },
    {
      title: "Quipper",
      creator: "Japanese",
    },
    {
      title: "SIAS LMS",
      creator: "Filipino",
    },
  ];
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <Table className="px-3">
        <TableBody>
          {softwares.map((software, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{software.title}</TableCell>
              <TableCell className="text-right">{software.creator}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="absolute left-0 z-[100] inset-y-0 w-10 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-10 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
        {/* TODO */}
        <img
          src="/images/continuous.webp"
          alt="header"
          width={"80%"}
          className="object-cover object-center mx-auto"
        />
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <img
        src="/images/availability.webp"
        alt="header"
        width={"80%"}
        className="object-cover object-center mx-auto"
      />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
