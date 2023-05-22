import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";
import Title from "@/components/Title";


export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center p-10 min-h-screen  ">
      <Title></Title>      
      <NewsletterForm></NewsletterForm>
      <Socials></Socials>
    </main>
  )
}
