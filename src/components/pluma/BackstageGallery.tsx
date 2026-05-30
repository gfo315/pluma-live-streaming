import backstage from "@/assets/backstage-1.jpg";

const photos = Array.from({ length: 12 });

export function BackstageGallery() {
  return (
    <section aria-label="Mosaico de backstage" className="bg-pluma-cosmo">
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {photos.map((_, i) => (
          <img
            key={i}
            src={backstage}
            alt="Backstage de produção de live streaming"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full object-cover"
          />
        ))}
      </div>
    </section>
  );
}
