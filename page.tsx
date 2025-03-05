import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Custom AI:
              </span>{" "}
              Instant lifestyle shots for your products
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg">
              Finally: AI that truly understands your products. Create lifestyle and fashion photos for every occasion,
              instantly, without expensive photoshoots
            </p>
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-6 text-lg rounded-md">
              Try Custom AI free
            </Button>
          </div>
          <div className="relative">
            <div className="relative w-full h-[500px]">
              <Image
                src="https://sjc.microlink.io/bpJeF52I4EoyzaqfTCrjjMr6mQu5KSelU2USoyq9IS0SSUmHH9gjpqwuM4amevGDytdm8mk7YCPWXVI3MsI34w.jpeg"
                alt="AI Generated Product Shots"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <div className="border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center opacity-50">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-8 w-24 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* Professional Photoshoots Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aoGDXa9YY141qnO9vsVH6G2rHwdo6U.png"
              alt="Dress Transformation"
              width={600}
              height={600}
              className="rounded-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Professional photoshoots without the hassle</h2>
            <p className="text-gray-600 text-lg">
              Get photoshoot-quality images in minutes, not weeks. Train your AI, then instantly generate endless
              lifestyle photos with or without human models - at a fraction of the cost.
            </p>
          </div>
        </div>
      </section>

      {/* AI Understanding Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">AI that gets your products</h2>
            <p className="text-gray-600 text-lg">
              Unlike basic AI tools, Custom AI learns every detail of your products, from fabric textures to intricate
              designs. This means your products always look their best, naturally fitting into any scene.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CT6fakgogcIlgbu1drj0XLy5wXXgHB.png"
              alt="Scarf Transformation"
              width={600}
              height={600}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Market Faster Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ycao0JidhT7zwyN08CCIe6ifbeyPBp.png"
                alt="Tent Transformation"
                width={600}
                height={600}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Market faster, sell more</h2>
              <p className="text-gray-600 text-lg">
                Generate fresh, engaging content for every channel, in minutes. Create variations for different markets,
                design seasonal promotions, and keep your social media feeds buzzing - all with a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>
          <div className="relative">
            <div className="flex justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">1</span>
                </div>
                <span className="font-semibold">Upload</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold">2</span>
                </div>
                <span className="text-gray-400">Training</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold">3</span>
                </div>
                <span className="text-gray-400">Generate</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-purple-600 font-semibold">STEP 1: TRAIN</div>
                <h3 className="text-2xl font-bold">Train your AI in minutes</h3>
                <p className="text-gray-600">
                  Simply upload 3-20 photos of your product, taken from different angles to capture all the details.
                  Custom AI will quickly learn the unique characteristics of your item, from its shape and texture to
                  its finest details.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x5H0EC4ZhKKojfhx8gtnJwIYhmT8Pd.png"
                    alt="Product Training"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">One AI, endless product stories</h2>
          <p className="text-center text-gray-600 mb-12">
            Create engaging lifestyle photos that connect with your customers. Show your products in real-life
            situations, on models, or in any setting you imagine
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Clothes", "Shoes", "Bags", "Accessories", "Any product (almost)"].map((category) => (
              <Button
                key={category}
                variant={category === "Clothes" ? "default" : "outline"}
                className={category === "Clothes" ? "bg-black text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">FAQs</h2>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              More info in help centre
            </Link>
          </div>
          <Accordion type="single" collapsible>
            {[
              "Can I use Custom AI to put my clothes on virtual human models?",
              "What kind of products work best with Custom AI?",
              "Are there any products that Custom AI doesn't support?",
              "How is Custom AI different from AI Backgrounds?",
              "How can I create lifestyle product photos with AI?",
              "What's the best way to generate product photos with virtual models?",
              "How can I make AI-generated product photos look more realistic?",
              "What's the best AI tool for product photography?",
            ].map((question, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>Content for {question} goes here...</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Explore more features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Dy7wtza9Yrn5yWM3dK7HbmU3rjPdY.png"
                alt="Generative Resize"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Generative Resize</h3>
            </Card>
            <Card className="p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Dy7wtza9Yrn5yWM3dK7HbmU3rjPdY.png"
                alt="Generate Background"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Generate Background</h3>
            </Card>
            <Card className="p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Dy7wtza9Yrn5yWM3dK7HbmU3rjPdY.png"
                alt="Background removal"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Background removal</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg" />
                <span className="font-bold">CLAID.AI</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Copyright © 2025 Let's Enhance, Inc.
                <br />
                All Rights Reserved
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-gray-500 rounded-full" />
                <span>support@claid.ai</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>Blog</li>
                <li>About us</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>Pricing</li>
                <li>Customers</li>
                <li>AI image generation</li>
                <li>AI Photoshoot</li>
                <li>Generative Resize</li>
                <li>Enhancement</li>
                <li>Product Demo</li>
                <li>Help Center (FAQ)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">API</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>API Pricing</li>
                <li>Our APIs</li>
                <li>API Docs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>Join to our community (beta)</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>YouTube</li>
                <li>Affiliate program</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

