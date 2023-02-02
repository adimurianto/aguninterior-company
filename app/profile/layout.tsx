import "bootstrap/dist/css/bootstrap.min.css";
import '../globals.css';

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "../common/header";
import Footer from "../common/footer";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <div className="container">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  )
}
