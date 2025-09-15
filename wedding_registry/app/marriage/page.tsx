"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { OrthodoxDivider } from "@/components/orthodox-divider";
import { Dove } from "@/components/dove";
import Nav from "@/components/nav";

export default function MarriagePage() {
  return (
    <div className="min-h-screen bg-[#f6f2ec] text-[#4b2e0d] overflow-x-hidden">
      <Nav />
      
      {/* Hero Section */}
      <header className="relative py-20 text-center">
        <Image
          src="/registry_imgs/wedding_at_cana.jpg"
          alt="Wedding at Cana"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 header">The Sacred Mystery of Marriage</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#6b5840] paragraph-message">
            Reflections on Orthodox Christian Marriage and Family Life
          </p>
        </div>
      </header>

      
      <Dove />

      {/* YouTube Video Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <Card className="border-2 border-[#d4af37] bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-[#7B4019] mb-6 text-center header">Sacred Marriage Reflections</h2>
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/bR3_ZD9uo4c"
                title="Sacred Marriage Reflections"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
      
          </CardContent>
        </Card>
      </section>

      <Dove />

      {/* Icon Images Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Adam and Eve saved by Christ */}
          <div className="relative h-84 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/marriage-icons/adam-eve-saved-by-christ.jpg"
              alt="Adam and Eve saved by Christ"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 mb-4 px-3 py-1 bg-white/90 text-[#4b2e0d] rounded shadow text-sm font-semibold transition-opacity duration-300">
                Adam and Eve saved by Christ
              </span>
            </div>
          </div>
          {/* Peter and Fevronia */}
          <div className="relative h-84 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/marriage-icons/Peter-and-Fevronia.jpg"
              alt="Peter and Fevronia"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 mb-4 px-3 py-1 bg-white/90 text-[#4b2e0d] rounded shadow text-sm font-semibold transition-opacity duration-300">
                Peter and Fevronia
              </span>
            </div>
          </div>
          {/* Sts Adrian and Natalia */}
          <div className="relative h-84 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/marriage-icons/Sts-Adrian-Natalia.jpg"
              alt="Sts Adrian and Natalia"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 mb-4 px-3 py-1 bg-white/90 text-[#4b2e0d] rounded shadow text-sm font-semibold transition-opacity duration-300">
                Sts Adrian and Natalia
              </span>
            </div>
          </div>
          {/* Sts Aquila and Priscilla */}
          <div className="relative h-84 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/marriage-icons/Sts-Aquila-Priscilla.jpg"
              alt="Sts Aquila and Priscilla"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 mb-4 px-3 py-1 bg-white/90 text-[#4b2e0d] rounded shadow text-sm font-semibold transition-opacity duration-300">
                Sts Aquila and Priscilla
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-12">
      <Card className="border-2 border-[#d4af37] bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-8">
        <p className="text-center text-[#6b5840] paragraph-message mt-4">
            In the Orthodox Church, the saints show us how love in marriage and relationships can become a path to holiness. Saints Peter and Fevronia of Murom embody faithfulness and sacrificial love despite trials. Saints Aquila and Priscilla reveal how marriage can be a partnership of faith and service, open and hospitable to others. Saints Adrian and Natalia inspire us through their mutual courage and loyalty in the face of suffering. And in the lives of the Theotokos and Saint Joseph the Betrothed, we see trust, obedience, and selfless devotion. Together, these saints remind us that Christian love is steadfast, self-giving, and sanctifying.
            </p>
        </CardContent>
        </Card>
      </section>
      <Dove />
      <Dove />

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Article 1 */}
        <article className="mb-16">
          <Card className="border-2 border-[#d4af37] bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
             
                <div>
                  <h2 className="text-2xl font-semibold text-[#7B4019] header">The Foundation of Christian Marriage</h2>
   
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-[#6b5840] paragraph-message leading-relaxed mb-4">
                  In the Orthodox Christian tradition, marriage is not merely a social contract or legal arrangement, 
                  but a sacred mystery that reflects the relationship between Christ and His Church. As we prepare 
                  for our own wedding, we are reminded that this union is a calling to grow together in faith, 
                  love, and service to God.
                </p>
                
                <p className="text-[#6b5840] paragraph-message leading-relaxed mb-4">
                  The wedding ceremony itself is rich with symbolism. The crowning ceremony, where crowns are placed 
                  upon the heads of the bride and groom, represents the glory and responsibility of their new life 
                  together. These crowns are not symbols of earthly royalty, but of the martyrdom that comes with 
                  selfless love and sacrifice for one another.
                </p>
                
                <p className="text-[#6b5840] paragraph-message leading-relaxed">
                  As we walk around the altar three times, we are reminded of the Holy Trinity and our journey 
                  together through Christ. This sacred dance symbolizes our commitment to follow God's path 
                  throughout our married life, always keeping Him at the center of our relationship.
                </p>
              </div>
            </CardContent>
          </Card>
        </article>

        <Dove />

        {/* Icon Images Between Articles */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* St Moses Icon */}
            <div className="relative h-120 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/marriage-icons/st-moses.jpg"
                alt="St Moses Icon"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">St Moses Icon</span>
              </div>
            </div>
            {/* St Olga Icon */}
            <div className="relative h-120 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/marriage-icons/st-olga.jpeg"
                alt="St Olga Icon"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">St Olga Icon</span>
              </div>
            </div>
          </div>
        </section>

        <Dove />

        {/* Article 2 */}
        <article className="mb-16">
          <Card className="border-2 border-[#d4af37] bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
           
                <div>
                  <h2 className="text-2xl font-semibold text-[#7B4019] header">Building a Christian Home</h2>
             
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-[#6b5840] paragraph-message leading-relaxed mb-4">
                  Our wedding registry reflects our desire to build a home that honors God and serves as a 
                  sanctuary for our family. Each item we've chosen—from the kitchen tools that will help us 
                  prepare meals together, to the books that will nourish our minds and souls—represents our 
                  commitment to creating a space where love, faith, and tradition can flourish.
                </p>
                
                <p className="text-[#6b5840] paragraph-message leading-relaxed mb-4">
                  The Orthodox home is a little church, where the family gathers for prayer, where icons 
                  remind us of the saints who intercede for us, and where the rhythm of the liturgical year 
                  guides our daily lives. We are grateful for the support of our community as we begin this 
                  sacred journey together.
                </p>
                
                <blockquote className="border-l-4 border-[#d4af37] pl-6 my-6 italic text-[#7B4019]">
                  "The family is the foundation of society, and the Orthodox Christian family is the foundation 
                  of the Church." — St. John Chrysostom
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </article>

        <Dove />

  
   

        {/* Icon Images Between Articles */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Church Icon */}
            <div className="relative h-140 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/marriage-icons/orthodox.jpeg"
                alt="Orthodox Icon"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Collage of Saints of the Eastern Orthodox Church</span>
              </div>
            </div>
   
               {/* Church Icon */}
               <div className="relative h-140 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/marriage-icons/st-george.jpeg"
                alt="St George Icon"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">St George Icon</span>
              </div>
            </div>
          </div>
        </section>

   

        {/* Article 3 */}
        <article className="mb-16">
          <Card className="border-2 border-[#d4af37] bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
         
                <div>
                  <h2 className="text-2xl font-semibold text-[#7B4019] header">Gratitude and Blessings</h2>
                  
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-[#6b5840] paragraph-message leading-relaxed mb-4">
                  As we prepare for our wedding day, we are overwhelmed with gratitude for the love and support 
                  of our family, friends, and church community. Your presence at our celebration is the greatest 
                  gift we could receive, and we are humbled by your prayers and well-wishes.
                </p>
                
                <p className="text-[#6b5840] paragraph-message leading-relaxed mb-4">
                  The items in our registry are not necessities, but blessings that will help us create a home 
                  where we can grow in love and service to God. Each gift represents your participation in our 
                  journey and your investment in our future together.
                </p>
                
                <p className="text-[#6b5840] paragraph-message leading-relaxed">
                  We ask for your continued prayers as we begin this new chapter of our lives, that we may 
                  always keep Christ at the center of our marriage and serve Him faithfully in all that we do.
                </p>
              </div>
            </CardContent>
          </Card>
        </article>

        <Dove />
        <Dove />

        {/* Call to Action */}
        <section className="text-center py-12">
          <Card className="max-w-2xl mx-auto border-2 border-[#d4af37] bg-white/90">
            <CardContent className="py-8">
              <h3 className="text-2xl font-semibold text-[#7B4019] mb-4 header">Join Us in Celebration</h3>
              <p className="text-[#6b5840] paragraph-message mb-6">
                We invite you to explore our wedding registry and consider how you might help us build our 
                Orthodox Christian home together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/registry"
                  className="px-6 py-3 bg-[#7B4019] hover:bg-[#8f2800] text-white text-sm rounded-md shadow transition-all duration-200"
                >
                  View Registry
                </Link>
                <Link
                  href="/itinerary"
                  className="px-6 py-3 border-2 border-[#7B4019] text-[#7B4019] hover:bg-[#7B4019] hover:text-white text-sm rounded-md transition-all duration-200"
                >
                  Wedding Schedule
                </Link>
              </div>
              <span className="text-4xl block mt-6 mb-2">☦︎</span>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}