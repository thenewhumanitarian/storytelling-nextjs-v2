import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import "./assets/footer.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </>
  );
}
