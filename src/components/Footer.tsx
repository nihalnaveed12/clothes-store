import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import ScrollAnimation from "@/components/animations/ScrollAnimation";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300">
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products"
                    className="hover:text-white transition-colors"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections"
                    className="hover:text-white transition-colors"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    href="/deals"
                    className="hover:text-white transition-colors"
                  >
                    Deals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-white transition-colors"
                  >
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="hover:text-white transition-colors"
                  >
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/our-story"
                    className="hover:text-white transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="hover:text-white transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Connected</h3>
              <p>
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-gray-600"
                />
                <Button type="submit" variant="secondary">
                  Subscribe
                </Button>
              </form>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://facebook.com"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} BS FASHION. All rights reserved.
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </footer>
  );
}
