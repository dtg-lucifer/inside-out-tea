import React from "react";
import styles from "./style.module.scss";
import { Button } from "~/components/ui/button";
import { FaInstagram, FaMailBulk, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Aboutus = () => {
  return (
    <section className={`${styles.bg} py-[4rem] bg-green-50`}>
      <div className="space-y-[4rem] mx-auto w-[min(90%,60rem)]">
        <article className="space-y-4 animate-delay-[200ms] animate-fade-right">
          <h1 className="text-6xl font__oldmoney">Our story</h1>
          <p className={styles.para}>
            Inpired by the colorful emotions of &apos;Inside Out Tea&apos;
            movie, <span>Inside Out Tea</span> was born out of passion for
            creating more than just a drink - it&apos;s an emotional experience
            in every cup.
          </p>
        </article>
        <article className="space-y-4 animate-delay-[400ms] animate-fade-left">
          <h1 className="text-6xl font__oldmoney">Our mission</h1>
          <p className={styles.para}>
            We believe that tea should do more than just qyench your thirst. It
            should elevate your mood and connect with your inner feelings.
            That&apos;s why each of our blend is crafted to evoke a specific
            <span> emotion</span>, making every sip a journey through your own
            emotional landspace.
          </p>
        </article>
        <article className="space-y-4 animate-delay-[600ms] animate-fade-right">
          <h1 className="text-6xl font__oldmoney">What makes us unique</h1>
          <p
            className={`${styles.para} animate-delay-[650ms] animate-fade-right`}
          >
            Emotion-Centric Blends: Each of our tea blends is crafted with care
            to embody a specific mood, using ingredients that support the
            corresponding emotional experience.
          </p>
          <p
            className={`${styles.para} animate-delay-[700ms] animate-fade-right`}
          >
            Premium Ingredients: We use only the highest quality, all-natural
            ingredients sourced ethically from trusted suppliers around the
            world.{" "}
          </p>
          <p
            className={`${styles.para} animate-delay-[750ms] animate-fade-right`}
          >
            Sustainability Commitment: We are committed to sustainability, from
            our eco-friendly packaging to our ethical sourcing practices.
          </p>
          <p
            className={`${styles.para} animate-delay-[800ms] animate-fade-right`}
          >
            Community Focus: We believe in building a community of tea lovers
            who value mindfulness, self-care, and emotional well-being. Join us
            on this journey to sip, share, and celebrate every feeling.
          </p>
        </article>
        <article className="space-y-4 animate-delay-[800ms] animate-fade-left">
          <h1 className="text-6xl font__oldmoney">Our promise</h1>
          <p className={styles.para}>
            We promise to deliver more than just tea. We promise a sensory
            experience that nourishes your body and soul, a moment of calm
            amidst the chaos, and a connection to your inner self. Every blend
            is crafted with love, mindfulness, and a deep understanding of the
            emotions that make us human.
          </p>
        </article>
        <article className="space-y-4 animate-delay-[1s] animate-fade-right">
          <h1 className="text-6xl font__oldmoney">Join our community</h1>
          <p className={styles.para}>
            We invite you to become a part of the Mood Infusions family. Follow
            us on social media, share your #TeaForEveryEmotion moments, and sign
            up for our newsletter to receive exclusive offers, wellness tips,
            and updates on new blends.
          </p>
        </article>
        <article className="space-y-4 animate-delay-[1.2s] animate-fade-left">
          <h1 className="text-6xl font__oldmoney">Contact us</h1>
          <p className={styles.para}>
            Encourage visitors to reach out with a friendly invitation:
            &quot;Have a question or just want to chat about tea? Drop us a
            message - we&apos;d love to hear from you!&quot;
          </p>
          <p className="space-x-4">
            <Button asChild className="bg-red-800">
              <Link
                href={"https://youtube.com/@insideouttea?si=AK2g-fzwtqxE3U7l"}
              >
                <FaYoutube className="mr-4 text-2xl" /> Youtube
              </Link>
            </Button>
            <Button asChild className="bg-[#8c00fd]">
              <Link
                href={
                  "https://www.instagram.com/inside_out_tea?utm_source=qr&igsh=dHpjeGtmeGU3dzNx"
                }
              >
                <FaInstagram className="mr-4 text-2xl" /> Instagram
              </Link>
            </Button>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Aboutus;
