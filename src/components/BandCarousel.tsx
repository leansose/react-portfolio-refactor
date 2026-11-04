import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import type { BandPhoto } from '../data/music';

interface BandCarouselProps {
  photos: BandPhoto[];
}

function BandCarousel({ photos }: BandCarouselProps) {
  const [active, setActive] = useState(0);
  const slidesRef = useRef<HTMLLIElement[]>([]);
  const lastIndex = photos.length - 1;

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, lastIndex));
    if (clamped === active) return;

    setActive(clamped);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    slidesRef.current[clamped]?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLOListElement>) => {
    const targets: Record<string, number> = {
      ArrowLeft: active - 1,
      ArrowRight: active + 1,
      Home: 0,
      End: lastIndex,
    };
    const target = targets[event.key];
    if (target === undefined) return;

    event.preventDefault();
    goTo(target);
  };

  const photo = photos[active];

  return (
    <div>
      <figure>
        <div className="media-frame">
          <img
            key={photo.src}
            src={photo.src}
            srcSet={photo.srcSet}
            sizes="(min-width: 1024px) 1024px, 100vw"
            decoding="async"
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="mx-auto w-full max-w-[1024px] object-cover"
          />
        </div>

        <figcaption aria-live="polite" className="mt-2 flex flex-wrap items-baseline gap-x-4">
          <p className="meta text-ink">{photo.venue}</p>
          <p className="meta">{photo.photographer}</p>
          <p className="eyebrow ms-auto tabular-nums">
            {String(active + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </p>
        </figcaption>
      </figure>

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous slide"
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
          className="btn btn-icon"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
        </button>

        <ol tabIndex={0} aria-label="Band photos" onKeyDown={handleKeyDown} className="carousel-rail">
          {photos.map((item, index) => (
            <li
              key={item.src}
              ref={(node) => {
                if (node) slidesRef.current[index] = node;
              }}
              aria-current={index === active ? 'true' : undefined}
            >
              <button
                type="button"
                aria-label={`${item.venue} — ${item.photographer}`}
                data-active={index === active}
                onClick={() => goTo(index)}
                className="thumb w-40"
              >
                <img
                  loading="lazy"
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="w-full object-cover"
                />
              </button>
            </li>
          ))}
        </ol>

        <button
          type="button"
          aria-label="Next slide"
          disabled={active === lastIndex}
          onClick={() => goTo(active + 1)}
          className="btn btn-icon"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BandCarousel;
