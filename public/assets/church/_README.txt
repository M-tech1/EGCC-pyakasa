CHURCH IMAGE ASSETS
===================

Place your church photos in this folder. The About section and gallery reference
these paths. Replace the gradient placeholders by updating the component files.

SLIDESHOW IMAGES  (recommended: 1920 x 1080 px, landscape)
  slide-1.jpg   — Church exterior / sanctuary
  slide-2.jpg   — Sunday worship service
  slide-3.jpg   — Community / congregation
  slide-4.jpg   — Youth & children ministry
  slide-5.jpg   — Outreach / mission activities

GALLERY IMAGES  (recommended: 800 x 600 px, 4:3 ratio)
  gallery-1.jpg — Sunday service
  gallery-2.jpg — Worship night
  gallery-3.jpg — Community outreach
  gallery-4.jpg — Youth fellowship
  gallery-5.jpg — Praise & worship
  gallery-6.jpg — Church family

HOW TO USE REAL IMAGES
-----------------------
In About.tsx, replace each placeholder <div> with a Next.js Image component:

  import Image from "next/image";

  // Inside each slide:
  <Image
    src="/assets/church/slide-1.jpg"
    fill
    style={{ objectFit: "cover" }}
    alt="Sunday Worship Service"
    priority
  />

  // Inside each gallery item:
  <Image
    src="/assets/church/gallery-1.jpg"
    fill
    style={{ objectFit: "cover" }}
    alt="Sunday Service"
  />

Other assets (logos, banners, etc.) can also live in subfolders here.
