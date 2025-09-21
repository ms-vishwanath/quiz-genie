import CTAButtton from "@/components/custom/CTAButtton";
import Navbar from "@/components/custom/Navbar";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <section className="pb-20 ">
      <Navbar />
      <div className="container relative min-h-[70dvh] h-[70dvh] flex flex-col items-center justify-center mx-auto">
        <div className="absolute top-[30%] bottom-[50%] left-[50%] right-[50%] ">
          <Image src={"/assets/bg-pink.png"} width={200} height={200} alt="logo"/>1
        </div>
        <div className="flex flex-col gap-8 px-4">
          <div className="space-y-4">
            <h1 className="text-2xl lg:text-5xl">
              <span className="font-medium text-foreground">Create</span>{" "}
              <span className="text-primary font-medium">Smart Quizzes</span>{" "}
              <span className="font-medium text-foreground">
                with AI in Seconds
              </span>
            </h1>
            <p>
              Upload your content, enter a topic, or paste notes — our AI turns
              them into quiz questions you can edit, share, and practice.
            </p>
          </div>
          <div className="flex justify-center">
          <CTAButtton route="/dashboard" />
          </div>
        </div>
      </div>


    <div className="relative container mx-auto lg:w-7/12 px-2">
        <div className="lg:grid flex flex-col grid-cols-2 border space-y-4 border-primary rounded-xl shadow-xl">
        <div className="col-span-1 flex flex-col gap-4 lg:min-h-[40dvh] ps-10 justify-start pt-10 lg:pt-10  lg:justify-center">
          <Image src={"/assets/robot.svg"} width={30} height={20} alt="logo"/>
          <h1 className="text-2xl flex items-center gap-2 text-wrap">
          <span className="font-bold text-primary">AI That Works </span>
          <span className="font-bold">With You</span>
        </h1>
        <p>
          Harness the power of AI at every step—from creating quizzes and
          generating flashcards to refining questions and evaluating answers.
          Stay focused while AI handles the heavy lifting.
        </p>
        </div>
        <div className="col-span-1 flex flex-col justify-end mt-auto mx-auto">
          <Image src={"/assets/preview-app.svg"} width={300} height={300} alt="logo"/>
        </div>
      </div>
    </div>
  
    </section>
  );
}
