import "../sass/styles.scss";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingNav from "@/components/shared/FloatingNav";
import CustomCursor from "@/components/shared/CustomCursor";



export const metadata = {
  title: {
    template: "%s | DJINN",
    default: "DJINN | Unlocking Insights from Unstructured Data",
  },
  description: "DJINN extracts meaningful insights from unstructured data using advanced AI and machine learning. Discover our features, customized applications, and resources.",
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico' },
      { url: '/images/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png' },
    ],
  },
  manifest: '/images/favicon/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <Header />
        <main className="flex-grow">{children}</main>
        <FloatingNav />
        <Footer />
      </body>
    </html>
  );
}
