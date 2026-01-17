import { cva } from "class-variance-authority";
import Image from "next/image";

const mapSectionStyles = cva([
    "w-full relative h-[450px] overflow-hidden",
])

const mapContainerStyles = cva([
    "absolute inset-0 bg-gray-200 dark:bg-gray-800",
    "grayscale contrast-[1.1] opacity-80",
])

const mapImageStyles = cva([
    "w-full h-full object-cover",
])

const mapOverlayStyles = cva([
    "absolute inset-0 flex items-center justify-center pointer-events-none",
])

const mapPinOuterStyles = cva([
    "bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center animate-pulse",
])

const mapPinInnerStyles = cva([
    "bg-primary text-white p-4 rounded-full shadow-2xl pointer-events-auto cursor-pointer",
])

const mapDetailsStyles = cva([
    "absolute bottom-10 left-10 bg-white/90 dark:bg-bg-inverse/90",
    "backdrop-blur-md p-4 rounded-lg shadow-xl border border-white/20",
    "hidden md:block",
])

const mapDetailsLabelStyles = cva([
    "text-xs font-black text-primary uppercase mb-1",
])

const mapDetailsTextStyles = cva([
    "text-sm font-bold",
])

function LocationPinIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
        </svg>
    )
}

interface MapContentProps {
    image: string;
    imageAlt: string;
    label: string;
    address: string;
}

const mapContent: MapContentProps = {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwoKNpVbXITc5JP24bHYiKxjsfcRVnY7xCRMplF8yt6eeyCpjo0wBguIveoBM80qH4ZzqJThZ8GUTKO93iG4RAC7o-Q6S33ccfcE8AFwdiXX_2mBLhsxwg4KBxUVqRw1Qpea3afqV8Kn0o2N46wxwdkeTocpcEueNIKgJWMurSy4VRnjcH9CN_HHswDAStfYjCW3JHZ4z4wsO3bmfCFRKztfYFSJyC3gJKLw0KAOLF8oJi-yVZOabZ3PBBUw1X77dsA5TrkNG6gstN",
    imageAlt: "Topographic street map view of downtown San Francisco",
    label: "HQ Location",
    address: "1200 Market Street, San Francisco"
}

export default function MapSection() {
    return (
        <section className={mapSectionStyles()}>
            <div className={mapContainerStyles()}>
                <Image
                    src={mapContent.image}
                    alt={mapContent.imageAlt}
                    fill
                    className={mapImageStyles()}
                />
            </div>

            {/* Map Overlay Pin */}
            <div className={mapOverlayStyles()}>
                <div className={mapPinOuterStyles()}>
                    <div className={mapPinInnerStyles()}>
                        <LocationPinIcon />
                    </div>
                </div>
            </div>

            {/* Map Details Float */}
            <div className={mapDetailsStyles()}>
                <p className={mapDetailsLabelStyles()}>{mapContent.label}</p>
                <p className={mapDetailsTextStyles()}>{mapContent.address}</p>
            </div>
        </section>
    )
}
