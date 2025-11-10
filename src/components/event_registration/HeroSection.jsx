import React from "react";

export default function HeroSection() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{
            backgroundImage: `linear-gradient(
                    rgba(10, 25, 49, 0.4) 0%,
                    rgba(10, 25, 49, 0.8) 100%
                  ),
                  url('https://lh3.googleusercontent.com/aida-public/AB6AXuDF3bt7cRzMZEoIw-xUspI4lraXuQcGV6eAKYC25YaRQMqngjSWJ3N762AwSR1mru7LoxTRGKDpve05wL9r8SLLEpjSq--cmPGiIpTTp8WtdFX2FBQy_FIBQd8IxtU0thFojwMwYb3iy5yQgHmBJgNbvxsoebj2AUiJmAOB6s5PJqhqbmB4llxKDmqvQQW54on91AtF9NAo0nzZsSUdZ7xTiRor6hp8bJ35t9OlYZCQ9x5xIYNh_B_-2mdzGesaZ2GKsZt862IW0Uk')`,
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
              Exclusive Webinar: Investing in Abidjan,s Real Estate Market
            </h1>
            <h2 className="text-white/90 text-sm @[480px]:text-base">
              Join our expert panel to uncover the lucrative opportunities in
              Côte d Ivoire,s thriving property market.
            </h2>
          </div>
          <a
            href="#register"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-background-dark text-sm font-bold transition-transform hover:scale-105"
          >
            <span className="truncate">Confirm Your Spot</span>
          </a>
        </div>
      </div>
    </div>
  );
}
