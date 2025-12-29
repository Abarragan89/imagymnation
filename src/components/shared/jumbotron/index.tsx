// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
import { imageUrls } from './image-urls'
import { Button } from '@/components/ui/button'

export default function Jumbotron() {
    // const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

    console.log('imageUrls:', imageUrls)
    return (
        // <div className="embla" ref={emblaRef}>
        //     <div className="embla__container">
        //         {imageUrls.map((url, index) => (
        //             <div className="embla__slide" key={url}>
        //                 <img 
        //                 width={1280} 
        //                 height={900} 
        //                 src={url} 
        //                 alt={`Jumbotron Image ${index + 1}`} 
        //                 className="embla__slide__img w-full h-100" />
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <section
            className="
        relative
        h-[75vh]
        min-h-105
        w-full
        shadow-md
        overflow-hidden
        bg-[url('/images/hero-image.png')]
        bg-cover
        bg-center
      "
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/75 to-black/10" />
            <div className="relative z-10 px-8 pt-10 text-primary">
                <h1 className="text-5xl md:text-6xl max-w-70 font-bold text-background">
                    Fun, Safe <span className="text-primary">Gymnastics</span> for Kids
                </h1>
                <p className="mt-4 text-2xl max-w-60 text-primary">
                    We Build Children from the Inside!
                </p>
                <div className="flex-start gap-x-4">
                    <Button size="lg" className="text-lg mt-6">
                        View Classes
                    </Button>
                    <Button size="lg" variant="secondary" className="mt-6 text-lg">
                        Free Trial!
                    </Button>
                </div>
            </div>
            <Button className="flex flex-col gap-0 absolute bottom-3 left-3 text-background bg-accent text-xl h-26 w-30 diamond-button border-2 border-yellow-400">
                <span>Have Your</span>
                <span>Party Here!</span>
            </Button>
        </section>
    )
}
