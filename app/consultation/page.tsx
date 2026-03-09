import { redirect } from "next/navigation"

export const metadata = {
  title: "Consultation | Donjon Intelligence Systems",
  description: "Schedule a consultation with our AI experts to discuss your business needs and solutions.",
}

export default function ConsultationPage() {
  redirect("/consulting")
}
