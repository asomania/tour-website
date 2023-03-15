import Header from "../components/Header";
import Navbar from "../components/Navbar";
function Tour({ words }) {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <h1>{words}</h1>
      </div>
    </>
  );
}

export default Tour;
