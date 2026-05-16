import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero title="Contact Us" description="Have a question or need support? We're here to help." />
      <div className="container mx-auto px-4 py-16 max-w-xl">
        <form className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your email address" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="How can we help?" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows={5} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Type your message here..."></textarea>
          </div>
          <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
