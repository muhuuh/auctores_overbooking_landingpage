import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const SocialProof = () => {
  const isMobile = useIsMobile();
  const logos = [1, 2, 3, 4, 5, 6];

  const renderLogoItem = (key: number) => (
    <div key={key} className="flex items-center justify-center p-1"> {/* Added p-1 for spacing in carousel item */}
      <div className="h-20 w-full bg-offWhite rounded-md flex items-center justify-center border border-gray-200">
        <div className="text-gray text-[0.625rem]">Premium Hotel Partner</div>
      </div>
    </div>
  );

  return (
    <section className="section-padding-sm bg-white">
      <div className="container max-w-7xl mx-auto">
        {isMobile ? (
          <Carousel
            opts={{
              align: "start",
              slidesPerView: 3,
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-sm mx-auto"
          >
            <CarouselContent>
              {logos.map((i) => (
                <CarouselItem key={i} className="basis-1/2 xs:basis-1/3"> {/* Adjust basis for slidesPerView */}
                  {renderLogoItem(i)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-12px] xs:left-[-16px] sm:left-[-24px] bg-white/80 hover:bg-white border-champagne/50 text-navy hover:text-navy/80" />
            <CarouselNext className="right-[-12px] xs:right-[-16px] sm:right-[-24px] bg-white/80 hover:bg-white border-champagne/50 text-navy hover:text-navy/80" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-6 gap-8 items-center justify-center">
            {logos.map((i) => renderLogoItem(i))}
          </div>
        )}
        
        <div className="max-w-4xl mx-auto mt-16">
          <p className="text-center text-muted">6 pilot properties, 1,200 rooms under management</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
