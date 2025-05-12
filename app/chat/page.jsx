import 'bootstrap/dist/css/bootstrap.min.css';
import SentimentAnalysisPanel from "./chat";
import Header from "../components/header";
import Footer from "../components/footer";

// Removed the <html> tag to avoid nesting issues
export default function Home() {
  return (
    <div>
      <Header />
      <SentimentAnalysisPanel />
      <Footer />
    </div>
  );
}
